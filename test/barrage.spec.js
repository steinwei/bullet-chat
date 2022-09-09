import { expect, it } from "vitest";

const defaultConfig = {
  fontSize: 20,
  fontColor: "#fff",
  duration: 10000,
  trackHeight: 20 * 1.5,
};

function makeOptions(options) {
  const { fontSize, fontColor, duration, trackHeight } = Object.assign(
    defaultConfig,
    options
  );
  const handled = {
    fontSize,
    fontColor,
    duration,
    trackHeight,
  };
  return handled;
}

it("utils", () => {
  const result = makeOptions({});
  expect(result).toEqual(defaultConfig);
});
