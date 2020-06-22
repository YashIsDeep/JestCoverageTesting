var fun=require("./sayHello.js").fun;
describe("Greeting Test", () => {
  test("It should greet the user", () => {
    const output = "Hello!";

    expect(fun()).toEqual(output);
  });
});