import type { IMessage, IRecentItem, IMessageSource, IMessageSuggestion } from "weaviate-agent-chat-ui";
import user from '../../packages/weaviate-agent-chat-ui/src/assets/icons/user.svg'
import ai from '../../packages/weaviate-agent-chat-ui/src/assets/icons/ai.svg'
import type { ReactElement, ReactNode } from "react";


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
  return ({ id, content, source })
}

export const systemMessage = (): IMessage => {
  const id = Math.random().toString()
  const source: IMessageSource = { title: "ChatUi", icon: ai }
  return({ id, source, content: <div>I am a system response</div> })
}

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
