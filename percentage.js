function multiply=require('./math/mul.js');
function divide=require('./math/div.js');
function percentage(a,b)
{
	return multiply(divide(a,b),100);
}