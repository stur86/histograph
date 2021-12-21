import './GameMenu.css';

function GameMenu(props) {

    const sceneSetter = props.sceneSetter || (() => {});

    return (<div className='game-menu'>
        <button onClick={() => { sceneSetter('start') }}>New Game</button>
        <button onClick={() => { sceneSetter('learn') }}>How to Play</button>
    </div>);
}

export default GameMenu;