export function capitalizeFirstLetter(text: string): string {
  const words = text.split(' ');

  if (words.length === 0) {
    return text;
  }

  const firstWord = words[0];
  const capitalizedFirstWord =
    firstWord.charAt(0).toUpperCase() + firstWord.slice(1);

  words[0] = capitalizedFirstWord;

  return words.join(' ');
}
