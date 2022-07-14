import { filterHtmlRegex, trimRegex } from './regexs'

export function formatText(text: string): string {
  return text.replace(filterHtmlRegex, '').replace(trimRegex, '')
}
