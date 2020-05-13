var multiply=require('./math/mul.js').fun;
function square(a)
{
	return multiply(a,a);
}
module.exports.fun=square;

function demo()
{
	let a=Math.round(Math.random()*10);
	let string="Square of "+a+" is "+square(a)+". ";
	return string;
}
module.exports.string=demo();
