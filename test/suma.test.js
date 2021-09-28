const suma = require("./suma");

const sumador = [
  {
    a: 10,
    b: 23,
    expecta: 33,
  },
  {
    a: 22,
    b: 33,
    expecta: 54,
  },
];

describe("calculate", () => {
  sumador.forEach(({ a, b, expecta }) => {
    const solution = suma(a, b);

    test(`suma ${a} y ${b} result: ${solution}`, () => {
      expect(expecta).toBe(solution);
    });
  });
});
