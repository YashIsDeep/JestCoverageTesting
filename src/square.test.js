var fun=require("./square.js").fun;
describe("Square method Test", () => {
  test("It should square a number", () => {
    const input = 6;
    const output = 36;

    expect(fun(input)).toEqual(output);
  });
});