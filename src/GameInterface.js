import './GameInterface.css';

import { useState } from 'react';

import GameLevel from './GameLevel';

function NumberSquare(props) {


    return (<div>
        {props.value}        
    </div>);
}

function GameGrid(props) {

    const style = {
        'grid-template-columns': 'repeat(' + props.level.n + ', 1fr)',
        'grid-template-rows': 'repeat(' + props.level.n + ', 1fr)'
    }

    return (<div style={style} className='game-grid'>
        
    </div>);
}

function GameInterface(props) {

    const n = props.n || 4;

    const [state, setState] = useState(() => {
            let lv = new GameLevel(n);
            lv.shuffle();
            return {
                level: lv
            };
    });

    return (<div className='game-interface'>
        <GameGrid level={state.level} />
    </div>);
}

export default GameInterface;