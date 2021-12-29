import './GameInterface.css';

import { useState } from 'react';

import GameLevel from './GameLevel';
import GameGrid from './GameGrid';
import GameHistogram from './GameHistogram';

import { FaPlay, FaUndo } from 'react-icons/fa';

function GameInterface(props) {

    const n = props.n || 4;
    const moves = props.m || 2;

    const [state, setState] = useState(() => {
            let lv = new GameLevel(n);
            lv.shuffle(moves);
            return {
                level: lv,
                turns: 0,
                won: false
            };
    });

    function onClick() {
        setState({
            ...state,
            won: state.level.isWin,
            turns: state.turns+1
        });
    }

    // Endgame functions?
    function rePlay() {
        let lv = new GameLevel(n);
        lv.shuffle(moves);
        setState({
            level: lv,
            turns: 0,
            won: false
        });
    }

    function returnToMenu() {
        props.sceneSetter('menu');
    }


    return (<div className='game-interface'>
        <div>
            <GameGrid level={state.level} onClick={onClick} active={!state.won}/>
            <GameHistogram level={state.level} />
        </div>
        {state.won? <div className='game-win-overlay'>
            <FaUndo className='game-win-btn' onClick={rePlay} />
            <span>YOU WON!</span> 
            <FaPlay  className='game-win-btn' onClick={returnToMenu} />
        </div> : null}
    </div>);
}

export default GameInterface;