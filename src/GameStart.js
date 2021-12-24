import './GameStart.css';

import { useState } from 'react';

function clamp(x, min, max) {
    return Math.min(Math.max(x, min), max);
}

function CounterControl(props) {

    let maxValue = props.max || 9999;
    let minValue = props.min || -9999;

    const onChange = props.onChange || (() => {});

    function increaseValue(dv) {
        let newValue = clamp(props.value+dv, minValue, maxValue);

        console.log(newValue);

        onChange(newValue);
    }

    return (<div className='counter-control'>
        <div className='cctrl-minus' onClick={() => {increaseValue(-1)}}>-</div>
        <div className='cctrl-value'>{props.value}</div>
        <div className='cctrl-plus' onClick={() => {increaseValue(1)}}>+</div>
    </div>)
}


function GameStart(props) {

    const [state, setState] = useState({
        grid: 3,
        moves: 1
    });

    return (<div className='game-start'>
        <div className='start-param'>
            <h2>Size of grid</h2>
            <CounterControl value={state.grid} min={3} max={6} 
            onChange={(v) => { setState({...state, grid: v})}}/>
        </div>
        <div className='start-param'>
            <h2>Number of moves</h2>
            <CounterControl value={state.moves} min={1} max={5}
            onChange={(v) => { setState({...state, moves: v})}}/>
        </div>
        <div className='start-param' style={{justifyContent: 'center'}}>
            <button onClick={() => { props.sceneSetter('game', state)}}>Start</button>
        </div>
    </div>);
}

export default GameStart;