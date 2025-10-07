import { describe, it, vi, expect, beforeEach } from "vitest";
import { Recent } from "./Recent";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { IRecentItem } from "../../types";

const onClickMock = vi.fn()

vi.mock('motion/react', async (importOriginal) => {
  const actual = await importOriginal()
  return {
    ...actual as any,
    AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    motion: new Proxy({}, { get: () => (props: any) => <div {...props} /> }),
  }
})

describe("<Recent />", () => {
  beforeEach(cleanup)
  const items: IRecentItem[] = [{ text: "Lorel ipsum." }, { text: "Dolor sit amet." }]

  it("Should not render if there's no items", () => {
    const { container } = render(<Recent recentItems={[]} onClick={onClickMock} />)
    expect(container.firstChild).toBeNull()
  })

  it("Should show items", () => {
    render(<Recent recentItems={items} onClick={onClickMock} />)
    expect(screen.getByText(items[0].text)).toBeTruthy()
    expect(screen.getByText(items[1].text)).toBeTruthy()
  })

  it("Should have a custom title", () => {
    render(<Recent recentItems={items} onClick={onClickMock} header={{ title: "I am title."}} />)
    expect(screen.getByText("I am title.")).toBeTruthy()
  })

  it("Should call the onClick when clicked on", () => {
    render(<Recent recentItems={items} onClick={onClickMock} />)
    items.forEach(
      (item, i) => {
        fireEvent.click(screen.getByText(item.text))
        expect(onClickMock).toHaveBeenCalledTimes(i + 1)
        expect(onClickMock).toHaveBeenCalledWith(item)
      }
    )
  })
})
