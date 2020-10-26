const { Graph } = require("./Graph.js")

const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ')

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
]

const flightGraph = new Graph()

airports.forEach(airport => flightGraph.addNode(airport))
routes.forEach(route => flightGraph.addEdge(...route))

console.log(flightGraph)

flightGraph.breadthFirstSearch('PHX', 'BKK')

flightGraph.depthFirstSearch('PHX', 'BKK')