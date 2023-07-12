class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2, weight) {
        if (this.adjacencyList.hasOwnProperty(v1) && this.adjacencyList.hasOwnProperty(v2)) {
            this.adjacencyList[v1].push({node: v2, weight})
            this.adjacencyList[v2].push({node: v1, weight})
            return true
        } else { 
            throw Error("vertex is not in thier")
        }    
    }

    removeEdge(v1, v2) {
        if (this.adjacencyList.hasOwnProperty(v1) && this.adjacencyList.hasOwnProperty(v2)) { 
            this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v.node !== v2)
            this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v.node !== v1)
        }
    }

    removeVertex(vertex) {
        for (let i = 0; i < this.adjacencyList[vertex].length; i++) {
            const adjacentVertex = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex, adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }
    // reecursively
    depthFirstRecursively(start) {
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
    // itrative
    depthFirstIterative(start) {
        const stack = [start]
        const result = []
        const visited = {}
        visited[start] = true
        let currentVertex
        while (stack.length) {
            currentVertex = stack.pop()
            visited[currentVertex] = true
            result.push(currentVertex)
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true
                    stack.push(neighbor)
                }
            })
        }
        return result
    }

    breathFirstSearch(start) {
        const result = [];
        const queue = [start]
        const visited = {}
        let currentVertex;
        while (queue.length) {
            currentVertex = queue.shift()
            visited[currentVertex] = true
            result.push(currentVertex)
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true
                    stack.push(neighbor)
                }
            })
        }
        return result
    }
}

let g = new WeightedGraph() 
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