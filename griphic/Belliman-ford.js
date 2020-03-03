class Edge {
    constructor(s, t, w) {
        this.s = s;
        this.t = t;
        this.w = w;
    }
}


function bellimanFord(n, edges, k, start, end) {
    let shorts = new Array(2);
    let maxInt = Math.pow(2, 30) - 1;
    for (let i = 0; i < 2; i++) {
        const arr = new Array(n);
        arr.fill(maxInt);
        shorts[i] = arr;
    }

    shorts[0][start] = 0;
    shorts[1][start] = 0;

    for (let i = 0; i <= k; i++) {
        for (let j = 0; j < edges.length; j++) {
            shorts[i & 1][edges[j].t] = Math.min(shorts[i&1][edges[j].t], shorts[~i&1][edges[j].s] + edges[j].w);
        }
    }

    return shorts[k&1][end] < maxInt ? shorts[k&1][end] : -1;
}


const edges = [];
edges.push(new Edge(0, 1, 100));
edges.push(new Edge(1, 2, 100));
edges.push(new Edge(0, 2, 500));

const dest = bellimanFord(3, edges, 1, 0, 2);
console.log(dest);