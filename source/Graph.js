class Graph {
    constructor() {
        this.graph = new Map()
    }

    addNode(value) {
        this.graph.set(value, [])
    }

    addEdge(origin, destination) {
        this.graph.get(origin).push(destination)
        this.graph.get(destination).push(origin)
    }

    breadthFirstSearch(start, target) {
        const visited = new Set()
        const queue = [start]

        while (queue.length > 0) {
            const node = queue.shift()
            const destinations = this.graph.get(node)

            for (const destination of destinations) {
                if (!visited.has(destination)) {
                    visited.add(destination)
                    queue.push(destination)
                    console.log(destination)
                }
                if (destination === target) {
                    console.log(`${target} found.`)
                } 
            }
        }
    }

    depthFirstSearch(start, target, visited = new Set()) {
        let steps = 0
        visited.add(start)
        const destinations = this.graph.get(start)

        for (const destination of destinations) {
            steps++
            if (!visited.has(destination)) {
                this.depthFirstSearch(destination, target, visited)
            }
            if (destination === target) {
                return console.log(`${target} found in ${steps} steps.`)
                
            } 
        }
    }
}

exports.Graph = Graph
