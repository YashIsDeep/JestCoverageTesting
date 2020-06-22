function sayHello()
{
	return "Hello!";
}
module.exports.fun=sayHello;
function demo()
{
	return sayHello();
}
module.exports.string=demo();