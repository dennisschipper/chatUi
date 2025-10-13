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
    source: { title: "You", icon: user }
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
  </>

]
