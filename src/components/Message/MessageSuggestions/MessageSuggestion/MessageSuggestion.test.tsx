import { beforeEach, describe, expect, it, vi } from "vitest";
import { MessageSuggestion, TMessageSuggestionProps } from "./MessageSuggestion";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { IMessageSuggestion } from "../../../../types";

const onClickMock = vi.fn()

describe("<MessageSuggestion>", () => {
  beforeEach(() => {
    cleanup()
    vi.clearAllMocks()
  })
  
  const baseSuggestion: IMessageSuggestion = { text: "Lorel ipsum dolor sit amet." }
  const highlightsSuggestion: IMessageSuggestion = {
    text: "Lorel ipsum dolor sit amet.", highlights: ["Lorel", "dolor"]
  }

  it("Should render a suggestion", () => {
    render(<MessageSuggestion suggestion={baseSuggestion} onClick={onClickMock} />)
    const textContainer = screen.getByText(baseSuggestion.text)
    expect(textContainer).toBeTruthy()
  })

  it("Should call the onClick prop when clicked", () => {
    render(<MessageSuggestion suggestion={baseSuggestion} onClick={onClickMock} />)
    const textContainer = screen.getByText(baseSuggestion.text)
    fireEvent.click(textContainer)
    expect(onClickMock).toHaveBeenCalledTimes(1)
    expect(onClickMock).toHaveBeenCalledWith(baseSuggestion)
  })

  it("Should render highlights", () => {
    render(<MessageSuggestion suggestion={highlightsSuggestion} onClick={onClickMock} />)
    expect(screen.getByText((highlightsSuggestion.highlights as string[])[0])).toBeTruthy()
    expect(screen.getByText((highlightsSuggestion.highlights as string[])[1])).toBeTruthy()
  })

  it("Should render a custom component", () => {
    expect(onClickMock).toHaveBeenCalledTimes(0)
    const Comp = (props: TMessageSuggestionProps) => (
      <div onClick={() => props.onClick(props.suggestion)}>
        Custom Component: {props.suggestion?.text}
      </div>
    )
    render(<MessageSuggestion suggestion={baseSuggestion} onClick={onClickMock} component={<Comp onClick={null!} suggestion={null!} />} />)
    const text = screen.getByText("Custom Component", { exact: false })
    fireEvent.click(text)
    expect(onClickMock).toHaveBeenCalledTimes(1)
    expect(onClickMock).toHaveBeenCalledWith(baseSuggestion)
  })
})
