const fs = require('fs');
var Graph=require('./dependencyGraph.js');

var graph=new Graph();
try {
    const data = fs.readFileSync('vertices.list', 'UTF-8');
    const lines = data.split(/\r?\n/);
    lines.forEach((file) => {
    	if(!(file===""))
    		graph.addVertexByLabel(file);
    });
} 
catch (err) {
    console.error(err);
}


try {
    const data = fs.readFileSync('edges.list', 'UTF-8');
    const lines = data.split(/\r?\n/);
    lines.forEach((line) => {
    	if(!(line===""))
    	{
    		let tokens=line.split(' → ');
    		graph.addEdgeByLabel(tokens[0],tokens[1]);
    	}
    });
} 
catch (err) {
    console.error(err);
}


try {
    const data = fs.readFileSync('infVertices.list', 'UTF-8');
    const lines = data.split(/\r?\n/);
    lines.forEach((file) => {
    	if(!(file===""))
    		graph.infectVertexByLabel(file);
    });
} 
catch (err) {
    console.error(err);
}
graph.spreadInfection();
graph.printInfectedFiles();


console.log(graph.labelMap);
console.log(graph.edgesTo);
console.log(graph.invLabelMap);
console.log(graph.infected);