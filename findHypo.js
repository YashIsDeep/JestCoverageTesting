function add=require('./math/add.js');
function square=require('./square.js');
function findHypo(a,b)
{
	return sqrt( add(square(a),square(b)) );
}