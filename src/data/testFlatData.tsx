import type { IMessage } from "weaviate-agent-chat-ui";
import user from '../../packages/weaviate-agent-chat-ui/src/assets/icons/user.svg'
import ai from '../../packages/weaviate-agent-chat-ui/src/assets/icons/ai.svg'
import type { ReactNode } from "react";

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
