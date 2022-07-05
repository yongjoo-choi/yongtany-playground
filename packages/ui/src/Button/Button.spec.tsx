import { render } from "@testing-library/react";

import { Button } from ".";

describe("Button", () => {
  it("renders", () => {
    const { queryAllByText } = render(<Button content="Hello" />);
    expect(queryAllByText("Hello")).toHaveLength(1);
  });
});
