import type { IMessage, IRecentItem, IMessageSource, IMessageSuggestion } from "weaviate-agent-chat-ui";
import user from '../../packages/weaviate-agent-chat-ui/src/assets/icons/user.svg'
import ai from '../../packages/weaviate-agent-chat-ui/src/assets/icons/ai.svg'
import type { ReactNode } from "react";


export const demoSuggestions: IMessageSuggestion[] = [
  { text: "Show me recent failed authentication attempts", highlights: ["failed authentication"] },
  { text: "Analyze suspicious network traffic patterns", highlights: ["suspicious network traffic"] },
  { text: "List all privilege escalation incidents this month", highlights: ["privilege escalation incidents"] },
  { text: "Check for unauthorized access to sensitive files", highlights: ["unauthorized access"] },
  { text: "Review firewall rules and port scanning activity", highlights: ["firewall rules", "port scanning"] },
  { text: "Identify accounts with excessive permissions", highlights: ["excessive permissions"] },
  { text: "Scan for outdated software and security patches", highlights: ["outdated software", "security patches"] },
  { text: "Detect potential malware or ransomware signatures", highlights: ["malware", "ransomware"] },
  { text: "Audit changes to system configuration files", highlights: ["system configuration"] },
  { text: "Monitor data exfiltration attempts", highlights: ["data exfiltration"] }
]

export const getRandom = <T,>(array: T[]): T[] => {
  const firstIndex = Math.floor(Math.random() * array.length)
  let secondIndex = Math.floor(Math.random() * array.length)
  while (secondIndex === firstIndex) {
    secondIndex = Math.floor(Math.random() * array.length)
  }
  return [array[firstIndex], array[secondIndex]]
}

export const userMessage = (content: ReactNode): IMessage => {
  const id = Math.random().toString()
  const source: IMessageSource = { title: "You", icon: user } 
  return ({ id, content, source, meta: { displayMeta: false } })
}

export const systemMessage = (index: number): IMessage => {
  return systemMessageSuggestions[index]
}

export const systemMessageSuggestions: IMessage[] = [
  {
    id: "001",
    content: "Show me a detailed comparison of sales volumes between our newest product launches and our older, more established products, including how those trends have shifted over the past year.",
    source: { title: "You", icon: user },
    meta: { displayMeta: false }
  },
  {
    id: "002",
    content:
    <div className="chatContent">
      <p>Here's the breakdown:</p>
      <ol>
        <li>New product launches (past 12 months) → 185k units sold total, showing a steady upward trend with a 22% increase quarter over quarter. The strongest launch was Product X with 60k units, now accounting for 18% of all sales in its category.</li>
        <li>Established products (2+ years old) → 720k units sold total, but growth has slowed to 3% year over year. Several products, like Product A and Product B, show a slight decline of 5-7% compared to last year.</li>
        <li>Trend comparison → New products now make up 20% of overall sales volume, up from just 12% a year ago, indicating they are gradually taking share from legacy items.</li>
      </ol>
    </div>,
    source: { title: "ChatUi", icon: ai },
    suggestions: [
      { text: "Which established products are experiencing the greatest volume decline?", highlights: ["greatest volume decline"] },
      { text: "Projected sales distribution between new and established products over the next year?", highlights: ["Projected sales distribution"]}
    ]
  },
  {
    id: "003",
    content: "Which established products are experiencing the greatest volume decline?",
    source: { title: "You", icon: user },
    meta: { displayMeta: false }
  },
  {
    id: "004",
    content:
    <div className="chatContent">
      <p>Products with the steepest volume decline:</p>
      <ol>
        <li><strong>Product A:</strong> -7.2% decline (45k → 41.8k units)
          <ul>
            <li>West Coast showing highest impact at -12%</li>
            <li>Price competition from new entrants</li>
          </ul>
        </li>
        <li><strong>Product B:</strong> -6.8% decline (38k → 35.4k units)
          <ul>
            <li>Consumer preference shifting to premium alternatives</li>
            <li>Weakest in Northeast and West Coast markets</li>
          </ul>
        </li>
        <li><strong>Product F:</strong> -6.3% decline (29k → 27.2k units)
          <ul>
            <li>Aging product design losing appeal</li>
          </ul>
        </li>
      </ol>
    </div>,
    source: { title: "ChatUi", icon: ai },
    suggestions: [
      { text: "What strategies could reverse these declines?", highlights: ["strategies", "reverse"] },
      { text: "Should we consider discontinuing any of these products?", highlights: ["discontinuing"] }
    ]
  },
  {
    id: "005",
    content: "What strategies could reverse these declines?",
    source: { title: "You", icon: user },
    meta: { displayMeta: false }
  },
  {
    id: "006",
    content:
    <div className="chatContent">
      <p>Recommended turnaround strategies:</p>
      <ol>
        <li><strong>Product refresh initiatives:</strong>
          <ul>
            <li>Product A: Update packaging and positioning for premium segment</li>
            <li>Product B: Launch limited edition variants to create urgency</li>
            <li>Product F: Redesign scheduled for Q2 2026 based on consumer feedback</li>
          </ul>
        </li>
        <li><strong>Pricing optimization:</strong>
          <ul>
            <li>Strategic bundling with new products to drive volume</li>
            <li>Regional pricing adjustments for West Coast market</li>
            <li>Loyalty pricing tiers for repeat customers</li>
          </ul>
        </li>
        <li><strong>Marketing investment:</strong>
          <ul>
            <li>Increase digital spend by 25% focusing on product benefits</li>
            <li>Influencer partnerships to reach younger demographics</li>
            <li>In-store promotions and sampling programs</li>
          </ul>
        </li>
      </ol>
      <p>Initial investment required: $2.3M, projected ROI: 180% over 18 months</p>
    </div>,
    source: { title: "ChatUi", icon: ai },
    suggestions: [
      { text: "Break down the $2.3M investment by initiative", highlights: ["$2.3M investment"] },
      { text: "What's the timeline for implementing these strategies?", highlights: ["timeline", "implementing"] }
    ]
  }
]




export const chatHistory1: IMessage[] = [
  {
    id: "chat1-001",
    content: "Why is our established product volume declining?",
    source: { title: "You", icon: user },
    meta: { displayMeta: false }
  },
  {
    id: "chat1-002",
    content:
    <div className="chatContent">
      <p>Based on sales data from the past 12 months, established products show a decline of approximately 5-7% in volume. Key factors include:</p>
      <ol>
        <li>Market saturation in core categories</li>
        <li>Increased competition from newer entrants</li>
        <li>Shifting consumer preferences toward premium alternatives</li>
        <li>Product A and Product B showing steepest drops at 7.2% and 6.8% respectively</li>
      </ol>
    </div>,
    source: { title: "ChatUi", icon: ai },
    suggestions: [
      { text: "Which specific products have declined the most?", highlights: ["declined the most"] },
      { text: "What's driving the shift in consumer preferences?", highlights: ["consumer preferences"] }
    ]
  },
  {
    id: "chat1-003",
    content: "Which specific products have declined the most?",
    source: { title: "You", icon: user },
    meta: { displayMeta: false }
  },
  {
    id: "chat1-004",
    content:
    <div className="chatContent">
      <p>Top 5 products with the steepest volume decline:</p>
      <ol>
        <li>Product A: -7.2% (from 45k to 41.8k units)</li>
        <li>Product B: -6.8% (from 38k to 35.4k units)</li>
        <li>Product F: -6.3% (from 29k to 27.2k units)</li>
        <li>Product J: -5.9% (from 52k to 48.9k units)</li>
        <li>Product M: -5.4% (from 33k to 31.2k units)</li>
      </ol>
      <p>Combined, these five products account for 68% of the total volume decline across all established products.</p>
    </div>,
    source: { title: "ChatUi", icon: ai },
    suggestions: [
      { text: "Are there regional patterns in these declines?", highlights: ["regional patterns"] },
      { text: "How does pricing compare to competitor products?", highlights: ["pricing compare"] }
    ]
  },
  {
    id: "chat1-005",
    content: "Are there regional patterns in these declines?",
    source: { title: "You", icon: user },
    meta: { displayMeta: false }
  },
  {
    id: "chat1-006",
    content:
    <div className="chatContent">
      <p>Yes, clear regional patterns emerge:</p>
      <ol>
        <li><strong>West Coast:</strong> Steepest decline at -9.1%, driven primarily by Product A and Product B</li>
        <li><strong>Northeast:</strong> Moderate decline at -6.2%, more evenly distributed across products</li>
        <li><strong>Midwest:</strong> Slight decline at -3.8%, showing more resilience</li>
        <li><strong>Southeast:</strong> Minimal decline at -2.1%, Product J actually growing at +1.3%</li>
      </ol>
      <p>West Coast shows highest sensitivity to premium alternatives and new product launches.</p>
    </div>,
    source: { title: "ChatUi", icon: ai },
    suggestions: [
      { text: "What marketing strategies are working in the Southeast?", highlights: ["marketing strategies", "Southeast"] },
      { text: "Should we adjust pricing in the West Coast market?", highlights: ["pricing", "West Coast"] }
    ]
  },
  {
    id: "chat1-007",
    content: "What marketing strategies are working in the Southeast?",
    source: { title: "You", icon: user },
    meta: { displayMeta: false }
  },
  {
    id: "chat1-008",
    content:
    <div className="chatContent">
      <p>Southeast market success factors:</p>
      <ol>
        <li><strong>Bundling campaigns:</strong> "Value Pack" promotions increased basket size by 18%</li>
        <li><strong>Local partnerships:</strong> Regional retailer collaborations improved shelf placement</li>
        <li><strong>Loyalty programs:</strong> Repeat purchase rate 23% higher than national average</li>
        <li><strong>Digital engagement:</strong> Social media spend focused on lifestyle content vs. product-centric</li>
      </ol>
      <p>The Southeast team also maintained consistent promotional cadence without heavy discounting, preserving brand value.</p>
    </div>,
    source: { title: "ChatUi", icon: ai },
    suggestions: [
      { text: "Can we replicate the bundling strategy nationwide?", highlights: ["bundling strategy nationwide"] },
      { text: "What's the ROI on the loyalty programs?", highlights: ["ROI", "loyalty programs"] }
    ]
  }
]

export const chatHistory2: IMessage[] = [
  {
    id: "chat2-001",
    content: "Show me projected sales distribution between new and established products over the next year.",
    source: { title: "You", icon: user },
    meta: { displayMeta: false }
  },
  {
    id: "chat2-002",
    content:
    <div className="chatContent">
      <p>Projected sales distribution for the next 12 months:</p>
      <ol>
        <li><strong>New products (launched in past 12 months):</strong> Expected to grow from 20% to 28% of total sales volume</li>
        <li><strong>Established products:</strong> Expected to decrease from 80% to 72% of total sales volume</li>
        <li><strong>Total volume growth:</strong> Overall sales projected to grow 8% year-over-year</li>
      </ol>
      <p>New products driving the majority (65%) of incremental growth despite being smaller base.</p>
    </div>,
    source: { title: "ChatUi", icon: ai },
    suggestions: [
      { text: "Which new products will drive the most growth?", highlights: ["new products", "most growth"] },
      { text: "What assumptions are built into these projections?", highlights: ["assumptions", "projections"] }
    ]
  },
  {
    id: "chat2-003",
    content: "Which new products will drive the most growth?",
    source: { title: "You", icon: user },
    meta: { displayMeta: false }
  },
  {
    id: "chat2-004",
    content:
    <div className="chatContent">
      <p>Top growth drivers among new products (next 12 months):</p>
      <ol>
        <li><strong>Product X:</strong> +142% growth projected (60k → 145k units), expanding to 200 new retail locations</li>
        <li><strong>Product Y:</strong> +89% growth projected (32k → 60k units), strong e-commerce momentum</li>
        <li><strong>Product Z:</strong> +76% growth projected (28k → 49k units), benefiting from category expansion</li>
      </ol>
      <p>Product X alone expected to represent 12% of total company sales by end of year.</p>
    </div>,
    source: { title: "ChatUi", icon: ai },
    suggestions: [
      { text: "What's the production capacity for Product X?", highlights: ["production capacity", "Product X"] },
      { text: "How profitable are these new products vs established ones?", highlights: ["profitable", "new products"] }
    ]
  },
  {
    id: "chat2-005",
    content: "How profitable are these new products vs established ones?",
    source: { title: "You", icon: user },
    meta: { displayMeta: false }
  },
  {
    id: "chat2-006",
    content:
    <div className="chatContent">
      <p>Profitability comparison (gross margin %):</p>
      <ol>
        <li><strong>New products average:</strong> 38.2% gross margin
          <ul>
            <li>Product X: 42.1% (premium positioning)</li>
            <li>Product Y: 36.8% (competitive mid-tier)</li>
            <li>Product Z: 35.7% (value segment entry)</li>
          </ul>
        </li>
        <li><strong>Established products average:</strong> 44.6% gross margin
          <ul>
            <li>Product A: 48.3% (mature, optimized)</li>
            <li>Product B: 46.2% (economies of scale)</li>
          </ul>
        </li>
      </ol>
      <p>While established products have higher margins, new products are trending upward as production scales and costs optimize.</p>
    </div>,
    source: { title: "ChatUi", icon: ai },
    suggestions: [
      { text: "When will new products reach margin parity?", highlights: ["margin parity"] },
      { text: "What investments are needed to scale production?", highlights: ["investments", "scale production"] }
    ]
  },
  {
    id: "chat2-007",
    content: "When will new products reach margin parity?",
    source: { title: "You", icon: user },
    meta: { displayMeta: false }
  },
  {
    id: "chat2-008",
    content:
    <div className="chatContent">
      <p>Margin parity timeline by product:</p>
      <ol>
        <li><strong>Product X:</strong> Expected Q3 2026 (18 months)
          <ul>
            <li>Current: 42.1% → Target: 45%+</li>
            <li>Key driver: Supplier negotiations at 100k+ unit volumes</li>
          </ul>
        </li>
        <li><strong>Product Y:</strong> Expected Q1 2027 (24 months)
          <ul>
            <li>Current: 36.8% → Target: 44%+</li>
            <li>Key driver: Manufacturing process improvements and automation</li>
          </ul>
        </li>
        <li><strong>Product Z:</strong> Expected Q4 2027 (30+ months)
          <ul>
            <li>Current: 35.7% → Target: 43%+</li>
            <li>Key driver: Material cost reduction through alternative sourcing</li>
          </ul>
        </li>
      </ol>
      <p>These timelines assume current growth trajectories continue and planned operational improvements are executed.</p>
    </div>,
    source: { title: "ChatUi", icon: ai },
    suggestions: [
      { text: "What are the risks to these margin improvement timelines?", highlights: ["risks", "margin improvement"] },
      { text: "How does this compare to industry benchmarks?", highlights: ["industry benchmarks"] }
    ]
  }
]

export const recentItems: IRecentItem[] = [
  { id: "1", text: "Established product volume declining" },
  { id: "2", text: "New and established products projected sales." }
]

export const testFlatData: IMessage[] = Array.from({ length: 100 }, (_, index) => ({
  id: `test-${index + 1}`,
  source: {
    title: index % 2 === 0 ? 'You' : 'Weaviate',
    icon: index % 2 === 0 ? user : ai,
  },
  content: `This is test chat entry number ${index + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  suggestions: [
    { 
      text: "Which established products are experiencing the greatest volume decline?",
      highlights: ["greatest volume decline"]
    }, 
    { 
      text: "Projected sales distribution between new and established products over the next year?",
      highlights: ["Projected sales distribution"]
    }
  ]
}));


export const cards: ReactNode[] = [
  <>
    <h1>Incident analysis</h1>
    <p>Analysis of the brute force attempt yesterday.</p>
    <ol>
      <li>Time: 12.35 to 14.22</li>
      <li>212 succesful logins</li>
      <li>42 account lockouts triggered</li>
      <li><a href="#">Postmortem on Notion</a></li>
    </ol>
  </>,

  <>
    <h1>Code vulnerability: Privilege Escalation</h1>
    <p>Potential privilege escalation bug uncovered.</p>
    <ol>
      <li>Commit ID: <a href="#">8f3a1de</a></li>
      <li>Vulnerable function: roleAssign()</li>
      <li>Fix required: Input validation & access checks</li>
    </ol>
  </>,

  <>
    <h1>Unusual port scanning</h1>
    <p>Mass scan activity detected inside corporate LAN.</p>
    <ol>
      <li>Time: 16.20 to 17.05</li>
      <li>4,382 connection attempts logged.</li>
    </ol>
  </>,

  <>
    <h1>Q4 Revenue Forecast</h1>
    <p>Updated projections for Q4 based on current trends.</p>
    <ol>
      <li>Expected revenue: $18.2M (+12% vs Q3)</li>
      <li>New products contributing 31% of total</li>
      <li>West Coast region recovery accelerating</li>
      <li>Risk factors: Supply chain delays, seasonal demand</li>
    </ol>
  </>,

  <>
    <h1>Customer Retention Analysis</h1>
    <p>Deep dive into retention metrics across segments.</p>
    <ol>
      <li>Overall retention: 84.2% (up 2.1% YoY)</li>
      <li>Premium segment: 91.5% retention</li>
      <li>Mid-tier segment: 82.8% retention</li>
      <li>Churn drivers: Price sensitivity (38%), Product availability (22%)</li>
    </ol>
  </>,

  <>
    <h1>Competitor Market Share Shift</h1>
    <p>Recent changes in competitive landscape.</p>
    <ol>
      <li>Competitor A gained 2.3% share in premium segment</li>
      <li>Our share holding steady at 28.7% overall</li>
      <li>New entrant capturing 1.8% in value segment</li>
      <li><a href="#">Full competitive analysis report</a></li>
    </ol>
  </>,

  <>
    <h1>Digital Channel Performance</h1>
    <p>E-commerce and digital marketing effectiveness.</p>
    <ol>
      <li>E-commerce sales: +47% YoY, now 23% of total</li>
      <li>Mobile conversion rate: 3.8% (up from 2.9%)</li>
      <li>Social media ROI: $4.20 per dollar spent</li>
      <li>Top performing channel: Instagram (42% of digital sales)</li>
    </ol>
  </>

]
