import './themes.css';
import './GamePanel.css';

import GameLevel from './GameLevel';

import React, { useState } from 'react';

function GamePanel(props) {
    // Theme
    const [theme, setTheme] = useState('default');

    let test = new GameLevel();
    test.shuffle();

    console.log(test);

    return (<div className={'game-background theme-' + theme}>
        <div className='game-panel'>
            <h1 className='title'>HISTOGRAPH</h1>
            <div className='main'></div>
        </div>
    </div>);
}

export default GamePanel;