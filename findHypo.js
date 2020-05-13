var add=require('./math/add.js').fun;
var square=require('./square.js').fun;
function findHypo(a,b)
{
	return Math.sqrt( add(square(a),square(b)) );
}

function demo()
{
	let a=Math.round(Math.random()*10);
	let b=Math.round(Math.random()*10);
	let string="Hypotenuse of "+a+" and "+b+" is "+findHypo(a,b)+".";
	return string;
}
module.exports.string=demo();