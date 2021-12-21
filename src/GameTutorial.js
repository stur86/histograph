import './GameTutorial.css';
import GameLevel from './GameLevel';
import GameGrid from './GameGrid';
import GameHistogram from './GameHistogram';

import { useState } from 'react';

const tLevel = new GameLevel(3);
tLevel.shuffle(1);

function GameTutorial(props) {

    const [page, setPage] = useState(1);

    const sceneSetter = props.sceneSetter || (() => {});

    return (<div className='game-tutorial'>
        {page === 1? 
        (<>
            <GameGrid level={tLevel} />
            <p>
                This is the <b>number grid</b>. The squares contain the <b>base numbers</b>, which
                range from 0 to 3. The circles contain the <b>sum of the four numbers in the squares they touch</b>.
                You can click on a square and then its neighbour to have them switch places, and the sums will change 
                accordingly. <b>Try it now!</b>
            </p>
            <button onClick={() => {setPage(2);}}>Next ⯈</button>
        </>) : 
        (<>
            <div className='tutorial-hist-container'>
                <GameHistogram level={tLevel} />
            </div>
            <p>
                This is the <b>histogram</b>. It shows the number of circles that contain
                a certain number. Your goal is to make it so that the actual numbers (the smaller, lighter bars)
                correspond to the solution (the thicker, darker ones). You do so by <b>switching around numbers</b>
                until the two match. Every puzzle is guaranteed to be solvable in a minimum number of steps. Good luck!
            </p>
            <button onClick={() => {setPage(1);}}>⯇ Back</button>                        
        </>)}
        <button onClick={() => {sceneSetter('menu');}}>⯇ Menu</button>
    </div>);
}

export default GameTutorial;