import './GameGrid.css';

import { useState } from 'react';

function NumberSquare(props) {

    const style = {
        gridColumn: props.x,
        gridRow: props.y
    };

    return (<div style={style} 
                 className={'number-square' + (props.isSelected? ' selected' : (props.isCandidate? ' candidate' : ''))}
                 onClick={props.onClick}>
        {props.value}        
    </div>);
}

function NumberCircle(props) {

    const style = {
        gridColumn: props.x,
        gridRow: props.y
    };

    return (<div style={style} className='number-circle'>
        {props.value}        
    </div>);
}

function GameGrid(props) {

    const [state, setState] = useState({
        iSel: -1,
        jSel: -1
    });

    const lv = props.level;

    const style = {
        gridTemplateColumns: 'repeat(' + lv.n + ', 1fr)',
        gridTemplateRows: 'repeat(' + lv.n + ', 1fr)'
    }

    function processClick(i, j, isS, isC) {

        if (!props.active) {
            return;
        }

        if (isS) {
            // Deselect
            setState({
                ...state,
                iSel: -1,
                jSel: -1
            });
        }
        else if (isC) {
            // Swap and deselect
            lv.swap(state.iSel, state.jSel, i, j);
            setState({
                ...state,
                iSel: -1,
                jSel: -1
            });            
        }
        else {
            // Select
            setState({
                ...state,
                iSel: i,
                jSel: j
            });
        }

        if (props.onClick)
            props.onClick();
    }

    const squares = [];
    const circles = [];

    for (let i = 0; i < lv.n; ++i) {
        for (let j = 0; j < lv.n; ++j) {
            let isSel = (i === state.iSel) && (j === state.jSel);
            let isCand = ((Math.abs(i-state.iSel) + Math.abs(j-state.jSel)) === 1);
            squares.push(<NumberSquare key={squares.length} x={j+1} y={i+1} value={lv.getValue(i,j)}
                isSelected={isSel} isCandidate={isCand} onClick={() => { processClick(i,j, isSel, isCand);}}/>);
            if (i < lv.n-1 && j < lv.n-1) {
                circles.push(<NumberCircle key={circles.length} x={j+1} y={i+1} value={lv.getSumValue(i,j)}/>);
            }
        }
    }

    return (<div style={style} className='game-grid'>
        {squares}        
        {circles}
    </div>);
}

export default GameGrid;