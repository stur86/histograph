import _ from 'lodash';

const MAX_NUM = 3;

function makeMatrix(n, fillfunc=(() => 0) ) {
    let M = []

    for (let i = 0; i < n; ++i) {
        M.push([]);
        for (let j = 0; j < n; ++j) {
            M[i].push(fillfunc(j, i));
        }
    }

    return M;
}

function makeSumMatrix(M) {
    let S = [];
    let n = M.length;

    for (let i = 0; i < n-1; ++i) {
        S.push([]);
        for (let j = 0; j < n-1; ++j) {
            S[i].push(M[i][j]+M[i+1][j]+M[i][j+1]+M[i+1][j+1]);
        }
    }

    return S;
}

function makeHistogram(S) {
    let h = new Array(4*MAX_NUM+1).fill(0);
    let n = S.length;

    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < n; ++j) {
            let s = S[i][j];
            h[s] += 1;
        }
    }

    return h;
}

function getNeighbour(i, j, n) {
    const dirs = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0]
    ];

    let nlist = dirs.map(([di, dj]) => ([i+di, j+dj]));
    nlist = nlist.filter(([i, j]) => (
        i >= 0 && i < n && j >= 0 && j < n
    ));

    return nlist[_.random(0, nlist.length-1)];
}

class GameLevel {

    constructor(size=4) {
        this.n = size;

        // Generate the number matrix
        this._solmat = makeMatrix(size, () => (_.random(0, MAX_NUM)));
        // The sums
        this._solsums = makeSumMatrix(this._solmat);
        // And the histogram
        this._solhist = makeHistogram(this._solsums);

        // Now the actual board
        this._mat = _.cloneDeep(this._solmat);
        this._sums = _.cloneDeep(this._solsums);
        this._hist = _.cloneDeep(this._solhist);
    }

    swap(i1, j1, i2, j2) {        

        let v1 = this._mat[i1][j1];
        let v2 = this._mat[i2][j2];

        let dv = v2-v1;

        this._mat[i1][j1] = v2;
        this._mat[i2][j2] = v1;

        this.changeSumsAround(i1, j1, dv);
        this.changeSumsAround(i2, j2, -dv);
    }

    changeSumsAround(i, j, ds) {


        for (let is=Math.max(i-1, 0); is < Math.min(i+1, this.n-1); ++is) {
            for (let js=Math.max(j-1,0); js < Math.min(j+1, this.n-1); ++js) {
                let oldsum = this._sums[is][js];
                let newsum = oldsum+ds;

                this._sums[is][js] = newsum;

                this._hist[oldsum] -= 1;
                this._hist[newsum] += 1;
            }
        }
    }

    shuffle(steps=5, attempts=5) {
        const dirs = [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0]
        ];

        // Shuffle the solution board to create a new problem
        for (let s = 0; s < steps; ++s) {
            let maxerr = 0;
            let maxswap = null;

            for (let a = 0; a < attempts; ++a) {

                // Pick a random pair of adjacent numbers to swap
                let i1 = _.random(0, this.n-1);
                let j1 = _.random(0, this.n-1);
                let d = dirs[_.random(0, 3)];
                let [i2, j2] = getNeighbour(i1, j1, this.n);

                // Try the swap!
                this.swap(i1, j1, i2, j2);
                // Check the error
                let err = this._hist.reduce((s, x, i) => (s+Math.abs(x-this._solhist[i])), 0);
                // Reverse the swap
                this.swap(i1, j1, i2, j2);

                if (err >= maxerr) {
                    maxerr = err;
                    maxswap = [i1, j1, i2, j2];
                }
            }

            // Do the swap
            this.swap(...maxswap);
        }
    }
}

export default GameLevel;