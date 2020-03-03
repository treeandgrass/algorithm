class Edge {
    constructor(s, e, w) {
        this.s = s;
        this.e = e;
        this.w = w;
    }
}

class Griphic {
    constructor(edges, vertexs) {
        this.edges = edges;
        this.vertexs = vertexs;
    }

    getShortestPaths(start, target) {
        let T = [];
        let parents = new Array(this.vertexs.length);
        let dist = new Array(this.vertexs.length);
        const maxInt = Math.pow(2, 30) - 1;

        dist.fill(maxInt);
        dist[start] = 0;

        while (T.length < this.vertexs.length) {
            let u = this.vertexs[0];
            let min = dist[0];
            for (let i = 1; i < this.vertexs.length; i++) {
                if (min > dist[i] && !T.includes(i)) {
                    min = dist[i];
                    u = i;
                }
            }

            T.push(u);

            for (let i = 0; i < this.edges[u].length; i++) {
                const edge = this.edges[u][i];
                if (dist[edge.e] > dist[u] + edge.w) {
                    dist[edge.e] = dist[u] + edge.w;
                    parents[edge.e] = u;
                }
            }
        }

        const result = {};

        result.minDist = dist[target];
        result.paths = [];
        result.paths.push(target);
        while (parents[target]) {
            target = parents[target];
            result.paths.push(target);
        }

        return result;
    }

    getMiniGenerateTree(start) {
        let T = [];
        let parents = [];
        let max = Math.pow(2, 30) -1;
        const cost = new Array(this.vertexs.length);

        for (let i = 0; i < cost.length; i++) {
            cost[i] =  max;
        }

        cost[start]  = 0;
        parents[start] = -1;

        while (T.length < this.vertexs.length) {
            let u = -1;
            let w = max;
            for (let i = 0; i < this.vertexs.length; i++) {
                if (!T.includes(i) && cost[i] < w) {
                    u =  i;
                    w = cost[i];
                }
            }

            T.push(u);

            for (let i = 0; i < this.edges[u].length; i++) {
                let edge = this.edges[u][i];
                if (!T.includes(edge.e) && cost[edge.e] > edge.w) {
                    cost[edge.e] = edge.w;
                    parents[edge.e] = u;
                }
            }
        }

        let result = {};
        for (let i = 0; i < parents.length; i++) {
            if (!result[i]) result[i] = [];
            result[i].push(parents[i]);
        }

        return  result;
    }
}

const edges = [];
edges[0] = [];
edges[0].push(new Edge(0, 1, 807));
edges[0].push(new Edge(0, 3, 1331));
edges[0].push(new Edge(1, 0, 807));

edges[1] = [];
edges[1].push(new Edge(1, 0, 807));
edges[1].push(new Edge(1, 2, 381));
edges[1].push(new Edge(1, 3, 1267));

edges[2] = [];
edges[2].push(new Edge(2, 1, 381));
edges[2].push(new Edge(2, 3, 1015));
edges[2].push(new Edge(2, 4, 1663));

edges[3] = [];
edges[3].push(new Edge(3, 0, 1331));
edges[3].push(new Edge(3, 1, 1267));
edges[3].push(new Edge(3, 2, 1015));
edges[3].push(new Edge(3, 4, 599));

edges[4] = [];
edges[4].push(new Edge(4, 2, 1663));
edges[4].push(new Edge(4, 3, 599));

const vertexs = [0, 1, 2, 3, 4];
const griphic = new Griphic(edges, vertexs);
console.log(griphic.getShortestPaths(1, 4));
console.log(griphic.getMiniGenerateTree(1));