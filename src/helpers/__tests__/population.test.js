import calculatePopulation from "../population";

describe("Unit Tests: calculatePopulation()", () => {
  it("should return a calculated string", () => {
    expect(calculatePopulation(8800)).toBe("8.80M");
  });

  it("should return Million M if number >= 1000", () => {
    expect(calculatePopulation(164000)).toBe("164.00M");
  });

  it("should return K if number < 1000", () => {
    expect(calculatePopulation(880)).toBe("880.00K");
  });
});
