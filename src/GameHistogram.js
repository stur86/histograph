import './GameHistogram.css';

function HistogramBar(props) {

    const v = props.value;
    const t = props.target;

    const valueStyle = {
        height: (v*100)+'%'
    };

    const targetStyle = {
        height: (t*100)+'%'
    };

    return (<div style={props.style} className='histo-bar'>
        <div className='target-bar' style={targetStyle}/>
        <div className='value-bar' style={valueStyle}/>
    </div>);
}

function GameHistogram(props) {

    const lv = props.level;

    const gridTemplate = {
        gridTemplateColumns: 'repeat(' + (lv.maxsum+1) + ', 1fr)'
    };

    const bars = [];
    const numbers = [];

    for (let n = 0; n <= lv.maxsum; ++n) {

        const gridCol = {
            gridColumn: (n+1)
        };

        let hv = lv.getHistogramValue(n);
        let shv = lv.getHistogramValue(n, true);

        bars.push(<HistogramBar key={n} style={gridCol} value={hv} target={shv} />);
        numbers.push(<span key={n} style={gridCol}>{n}</span>);
    }


    return (<div className='game-histogram'>
        <div className='game-histogram-bars game-histogram-grid' style={gridTemplate}>
            {bars}            
        </div>
        <div className='game-histogram-axis game-histogram-grid'  style={gridTemplate}>
            {numbers}            
        </div>
    </div>);
}

export default GameHistogram;