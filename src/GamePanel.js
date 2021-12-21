import './themes.css';
import './GamePanel.css';

import GameInterface from './GameInterface';
import GameMenu from './GameMenu';
import GameTutorial from './GameTutorial';

import React, { useState } from 'react';

    
function GamePanel(props) {

    const [state, setState] = useState({
        theme: 'default',
        scene: 'menu',
        data: {}
    });

    function nextScene(new_scene, new_data) {
        setState({
            ...state,
            scene: new_scene, 
            data: new_data
        });
    }

    let currentScene = null;

    switch(state.scene) {
        case 'menu':
            currentScene = <GameMenu sceneSetter={nextScene} />;
            break;
        case 'learn':
            currentScene = <GameTutorial sceneSetter={nextScene}/>;
            break;
        case 'start': 
            currentScene = <GameInterface n={3} />;
            break;
        default:
            break;
    }
    
    return (<div className={'game-background theme-' + state.theme}>
        <div className='game-panel'>
            <h1 className='title'>HISTOGRAPH</h1>
            <div className='main'>                
                {currentScene}
            </div>
        </div>
    </div>);
}

export default GamePanel;