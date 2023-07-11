class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2) {
        if (this.adjacencyList.hasOwnProperty(v1) && this.adjacencyList.hasOwnProperty(v2)) {
            this.adjacencyList[v1].push(v2)
            this.adjacencyList[v2].push(v1)
            return true
        } else {
            throw Error("vertex is not in thier")
        }    
    }

    removeEdge(v1, v2) {
        if (this.adjacencyList.hasOwnProperty(v1) && this.adjacencyList.hasOwnProperty(v2)) {
            this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2)
            this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1)
        }
    }

    removeVertex(vertex) {
        for (let i = 0; i < this.adjacencyList[vertex].length; i++) {
            const adjacentVertex = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex, adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }

    dfs(start) {
        const result = []
        let visited = {}
        const adjacencyList = this.adjacencyList
            
        function dfs(vertex) {
            if (!vertex) return null;
            visited[vertex] = true
            result.push(vertex)
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    return dfs(neighbor)
                }
            })
        }
        dfs(start);
        
        return result
    }
}

let g = new Graph() 
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")