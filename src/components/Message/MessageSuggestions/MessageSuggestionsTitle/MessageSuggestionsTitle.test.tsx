import { cleanup, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { MessageSuggestionsTitle } from "./MessageSuggestionsTitle";

describe("<MessageSuggestionsTitle>", () => {
  beforeEach(cleanup)
  
  it("Should display a title", () => {
    render(<MessageSuggestionsTitle text="I am title." />)
    expect(screen.getByText("I am title.")).toBeTruthy()
  })

  it("Should return nothing if the title is not provided", () => {
    const { container } = render(<MessageSuggestionsTitle />)
    const header = container.querySelector("header")
    expect(header).toBeFalsy()
  })

  it("Should return a custom component", () => {
    const Comp = () => (<div>I am also title.</div>)
    render(<MessageSuggestionsTitle component={<Comp />} />)
    expect(screen.getByText("I am also title.")).toBeTruthy()
  })
})
