import type { IMessage } from "weaviate-agent-chat-ui";
import user from '../../packages/weaviate-agent-chat-ui/src/assets/icons/user.svg'
import ai from '../../packages/weaviate-agent-chat-ui/src/assets/icons/ai.svg'

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
