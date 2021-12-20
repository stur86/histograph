import './GameHistogram.css';

function HistogramBar(props) {

    const v = props.value;
    const t = props.target;

    const h = Math.max(v, t);

    const style = {
        ...props.style,
        height: h*100 + '%'
    };

    let vp = 0;
    let tp = 0;
    let op = 0;

    if (h === v) {
        // Value greater than target
        vp = (v-t)/v;
        tp = 0;
        op = 1-vp;
    }
    else {
        vp = 0;
        tp = (t-v)/t;
        op = 1-tp;
    }


    let children = [
        <div className='target' style={{ height: (tp*100) + '%' }}/>,
        <div className='value' style={{ height: (vp*100) + '%' }}/>,
        <div className='overlap' style={{ height: (op*100) + '%' }}/>
    ];


    return (<div style={style} className='histo-bar'>
        {children}
    </div>);
}

function GameHistogram(props) {

    const lv = props.level;

    const gridTemplate = {
        gridTemplateColumns: 'repeat(' + (lv.maxsum+1) + ', 1fr)'
    };

    const solbars = [];
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