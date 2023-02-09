export function generateUid(): number {
  return Math.floor(Math.random() * 999999) + 100000;
}
