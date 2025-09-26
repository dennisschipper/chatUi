import type { IIntroGroup, IIntroSuggestion, IIntroSuggestionMark } from "src/types";
import star from 'src/assets/icons/chatIntro/star.svg'

export const introSuggestionMarks: IIntroSuggestionMark[] = [
  { text: "Start exploring here", icon: star, color: "D6D1E2" }
]

export const introSuggestions: IIntroSuggestion[] = [
  { id: "1", text: "What are the top 10 products by units sold this year?", highlights: ["top 10 products"] },
  { id: "2", text: "What percentage of total sales volume comes from the top 5 products?", highlights: ["total sales volume"] }
]

export const introGroups: IIntroGroup[] = [
  {
    id: '1',
    color: "#D6D1E2",
    title: "Product discovery",
    subtitle: "Browse categories, see what's trending, and explore new arrivals.",
    sections: [
      { title: "Top-selling products, slow movers, and volume trends.", suggestions: introSuggestions, marks: introSuggestionMarks },
      // { title: "Products by customer behaviour.", suggestions: introSuggestions },
      // { title: "Forecasting & projections", suggestions: introSuggestions }
    ]
  },
  {
    id: '2',
    color: "#DED4BA",
    title: "Support & issues",
    subtitle: "Access common problems, troubleshooting steps, and warranty info.",
    sections: [
      { title: "Top-selling products, slow movers, and volume trends.", suggestions: introSuggestions, marks: introSuggestionMarks },
      { title: "Products by customer behaviour.", suggestions: introSuggestions },
      { title: "Forecasting & projections", suggestions: introSuggestions }
    ]
  },
  {
    id: '3',
    color: "#DEBABA",
    title: "Product outliers",
    subtitle: "Identify products with unusual pricing, specs, performance, or reviews that stand apart from the rest.",
    sections: [
      { title: "Top-selling products, slow movers, and volume trends.", suggestions: introSuggestions, marks: introSuggestionMarks },
      { title: "Products by customer behaviour.", suggestions: introSuggestions },
      { title: "Forecasting & projections", suggestions: introSuggestions }
    ]
  },
  {
    id: '4',
    color: "#DEBABA",
    title: "Product Experts",
    subtitle: "",
    sections: []
  },
  {
    id: '4',
    color: "#DEBABA",
    title: "Product Reverse",
    subtitle: "",
    sections: []
  },
  {
    id: '4',
    color: "#DEBABA",
    title: "Product Title",
    subtitle: "",
    sections: []
  }
]



