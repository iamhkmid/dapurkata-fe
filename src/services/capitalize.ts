export const capitalize = (word: string) => {
  return word
    .split("")
    .map((letter, index) =>
      index ? letter.toLowerCase() : letter.toUpperCase()
    )
    .join("");
};
