// flags.ts - Utility functions for handling stuff with country flags

// Code taken from https://dev.to/jorik/country-code-to-flag-emoji-a21
export function getFlagEmoji(countryCode: string) {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}
