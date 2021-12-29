import './GameMenu.css';

import { FaQuestionCircle, FaPlay } from 'react-icons/fa';

function GameMenu(props) {

    const sceneSetter = props.sceneSetter || (() => {});

    return (<div className='game-menu'>
        <FaPlay className='icon-button' onClick={() => { sceneSetter('start') }} />
        <FaQuestionCircle className='icon-button' onClick={() => { sceneSetter('learn') }} />
    </div>);
}

export default GameMenu;