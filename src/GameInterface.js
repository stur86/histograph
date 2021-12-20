import './GameInterface.css';

import { useState } from 'react';

import GameLevel from './GameLevel';
import GameGrid from './GameGrid';
import GameHistogram from './GameHistogram';

function GameInterface(props) {

    const n = props.n || 4;

    const [state, setState] = useState(() => {
            let lv = new GameLevel(n);
            lv.shuffle(2);
            return {
                level: lv,
                turns: 0
            };
    });

    function onClick() {
        setState({
            ...state,
            turns: state.turns+1
        });
    }

    return (<div className='game-interface'>
        <GameGrid level={state.level} onClick={onClick}/>
        <GameHistogram level={state.level} />
    </div>);
}

export default GameInterface;