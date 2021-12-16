import './themes.css';
import './GamePanel.css';

import React, { useState } from 'react';

function GamePanel(props) {
    // Theme
    const [theme, setTheme] = useState('default');

    return (<div className={'game-background theme-' + theme}>
        <div className='game-panel'>
            <h1 className='title'>HISTOGRAPH</h1>
            <div className='main'></div>
        </div>
    </div>);
}

export default GamePanel;