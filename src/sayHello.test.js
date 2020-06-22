var fun=require("./sayHello.js").fun;
describe("Square method Test", () => {
  test("It should greet the user", () => {
    const output = "Hello!";

    expect(fun()).toEqual(output);
  });
});