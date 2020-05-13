// Directed dependency graph
module.exports= class DependencyGraph{
	constructor()
	{
		this.numVertices=0;
		this.edgesTo={};
		this.labelMap={}; // Maps each label to a unique vertex
		this.invLabelMap={};
		this.infected=[]; // Maps from affected vertices to 
		//this.invLabelMap={};
	}
	
	addVertexByLabel(label)
	{
		if(labelMap.has(label))
			return labelMap[label];
		else
		{
			labelMap[label]=numVertices;
			invLabelMap[numVertices]=label;
			edgesTo[numVertices]=[];
			infected[numVertices]=false;
			numVertices++;
		}
	}
	addEdgeByLabel(label_from,label_to)
	{
		if((!labelMap.has(label_from))||(!(labelMap.has(label_to))))
		{
			console.log("Invalid edge");
		}
		let from=labelMap[label_from];
		let to=labelMap[label_to];
		edgesTo[label_from].push(label_to);
	}
	infectVertexByLabel(label)
	{
		if(!labelMap.has(label))
		{
			console.log("Invalid Attempt to mark affected");
		}
		let vert=labelMap[label];
		infected[vert]=true;
	}
	
	// Spreads the infection of an infected node
	spread(root,hasSpread)
	{
		if(!infected[root])return;
		if(hasSpread[root])return;
		for(child in edgesTo[root])
			infected[child]=true;
		hasSpread[root]=true;
		for(child in edgesTo[root])
			dfs(child,hasSpread);
	}
	spreadInfection()
	{
		var hasSpread=[];
		for(i in range(numVertices))
			hasSpread[i]=false;
		for(root in range(numVertices))
			if(infected[root])
				spread(root,hasSpread);
	}
	printInfectedFiles()
	{
		console.log('Infected files');
		for(const [key,value] in Object.entries(invLabelMap))
			if(infected[key])
				console.log(value);
	}
	printDependencyGraph()
	{
		console.log("Dependencies:-");
		for(from in range(numVertices))
			for(to in edgesTo[i])
				console.log("   "+invLabelMap[from]+" >>> "+invLabelMap[to]);
	}
};