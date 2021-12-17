import './themes.css';
import './GamePanel.css';

import GameLevel from './GameLevel';
import GameInterface from './GameInterface';

import React, { useState } from 'react';

    
function GamePanel(props) {
    // Theme
    const [theme, setTheme] = useState('default');
    
    return (<div className={'game-background theme-' + theme}>
        <div className='game-panel'>
            <h1 className='title'>HISTOGRAPH</h1>
            <div className='main'>
                <GameInterface />
            </div>
        </div>
    </div>);
}

export default GamePanel;