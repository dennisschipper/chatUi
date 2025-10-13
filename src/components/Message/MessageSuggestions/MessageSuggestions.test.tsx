import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { MessageSuggestions } from "./MessageSuggestions";
import { IMessage } from "../../../types";

const onClickSuggestionMock = vi.fn()

describe("<MessageSuggestions />", () => {
  beforeEach(cleanup)

  const message: IMessage = {
    id: "1",
    content: "",
    source: { title: "You" },
    suggestions: [{ text: "Suggestion 1" }, { text: "Suggestion 2" }]
  }

  it("Should render any suggestions", () => {
    render(<MessageSuggestions message={message} onClickSuggestion={onClickSuggestionMock} />)
    message.suggestions?.forEach(s => expect(screen.getByText(s.text)).toBeTruthy())
  })

  it("Should call the prop if a suggestion is clicked", () => {
    render(<MessageSuggestions message={message} onClickSuggestion={onClickSuggestionMock} />)
    if (!message.suggestions) throw Error("") // Just for the type hints.
    fireEvent.click(screen.getByText(message.suggestions[0].text))
    expect(onClickSuggestionMock).toHaveBeenCalledTimes(1)
    expect(onClickSuggestionMock).toHaveBeenCalledWith(message.suggestions[0], message)
  })
})
