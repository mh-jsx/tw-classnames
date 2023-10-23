// twc.test.js

const twc = require("./twc");

describe("twc function", () => {
  it("should merge class names without conditional classes", () => {
    const result = twc("bg-blue-500", "text-white", "p-4");
    expect(result).toBe("bg-blue-500 text-white p-4");
  });

  it("should merge class names with conditional classes (true)", () => {
    const isActive = true;
    const result = twc("bg-blue-500", "text-white", { "font-bold": isActive });
    expect(result).toBe("bg-blue-500 text-white font-bold");
  });

  it("should merge class names with conditional classes (false)", () => {
    const isActive = false;
    const result = twc("bg-blue-500", "text-white", { "font-bold": isActive });
    expect(result).toBe("bg-blue-500 text-white");
  });

  it("should handle null and undefined values", () => {
    const result = twc("bg-blue-500", null, undefined, "p-4");
    expect(result).toBe("bg-blue-500 p-4");
  });

  it("should handle numbers as class names", () => {
    const result = twc(42, "text-red-500", 7);
    expect(result).toBe("42 text-red-500 7");
  });

  it("should handle boolean values", () => {
    const result = twc("bg-blue-500", true, false);
    expect(result).toBe("bg-blue-500");
  });

  it("should handle an object with multiple classes", () => {
    const classes = {
      "text-green-500": true,
      "font-bold": false,
      "p-2": true,
    };
    const result = twc("bg-yellow-300", classes);
    expect(result).toBe("bg-yellow-300 text-green-500 p-2");
  });
});
