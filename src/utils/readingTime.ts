export function getReadingTime(content: string): string {
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / 230);
  return `${minutes} min read`;
}
