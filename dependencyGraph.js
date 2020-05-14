// Directed dependency graph
module.exports= class DependencyGraph{
	constructor()
	{
		this.numVertices=0;
		this.edgesTo={};
		this.labelMap={}; // Maps each label to a unique vertex
		this.invLabelMap={};
		this.infected={}; // Maps from affected vertices to 
		//this.invLabelMap={};
	}
	
	addVertexByLabel(label)
	{
		//console.log(this.labelMap[label]);
		if(false);
		else
		{
			this.labelMap[label]=this.numVertices;
			this.invLabelMap[this.numVertices]=label;
			this.edgesTo[this.numVertices]=[];
			this.infected[this.numVertices]=false;
			this.numVertices++;
		}
	}
	addEdgeByLabel(label_from,label_to)
	{
		let from=this.labelMap[label_from];
		let to=this.labelMap[label_to];
		this.edgesTo[to].push(from);
	}
	infectVertexByLabel(label)
	{
		let vert=this.labelMap[label];
		this.infected[vert]=true;
	}
	// hacc
	// Spreads the infection of an infected node
	spread(root,hasSpread)
	{
		if(!this.infected[root])return;
		if(hasSpread[root])return;
		for(let childIndex in this.edgesTo[root])
		{
			let child=this.edgesTo[root][childIndex];
			this.infected[child]=true;
		}
		hasSpread[root]=true;
		for(let childIndex in this.edgesTo[root])
		{
			let child=this.edgesTo[root][childIndex];
			this.spread(child,hasSpread);
		}
	}
	spreadInfection()
	{
		var hasSpread=[];
		for (let i = 0; i < this.numVertices; i++)
			hasSpread[i]=false;
		for (let i = 0; i < this.numVertices; i++)
			if(this.infected[i])
				this.spread(i,hasSpread);
	}
	printInfectedFiles()
	{
		//console.log('Infected files');
		for(const key in Object.entries(this.invLabelMap))
			if(this.infected[key])
				console.log(this.invLabelMap[key]);
	}
	printDependencyGraph()
	{
		console.log("Dependencies:-");
		for (from = 0; from < this.numVertices; from++)
			for(toIndex in this.edgesTo[i])
			{
				let to=this.edgesTo[root][toIndex];
				console.log("   "+this.invLabelMap[from]+" >>> "+this.invLabelMap[to]);
			}
	}
};