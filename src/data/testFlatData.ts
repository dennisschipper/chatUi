import type { IChatEntry } from "src/types";

export const testFlatData: IChatEntry[] = Array.from({ length: 100 }, (_, index) => ({
  id: `test-${index + 1}`,
  type: 'text' as const,
  text: `This is test chat entry number ${index + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  from: index % 2 === 0 ? 'You' as const : 'CityScout' as const
}));