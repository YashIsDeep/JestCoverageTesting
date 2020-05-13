var multiply=require('./math/mul.js').fun;
var divide=require('./math/div.js').fun;
function percentage(a,b)
{
	return multiply(divide(a,b),100);
}

function demo()
{
	let a=Math.round(Math.random()*10);
	let b=10+Math.round(Math.random()*10);
	let string="Percentage of "+a+" over "+b+" is "+percentage(a,b)+"%.";
	return string;
}
module.exports.string=demo();
