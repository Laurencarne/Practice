export  function mergeStringAlternately(word1: string, word2: string): string {
  const maxLength = Math.max(word1.length, word2.length)
  const word3Array = []
  for (let i = 0; i < maxLength; i++) {
      word3Array.push(word1.charAt(i), word2.charAt(i))
  }

  return word3Array.join('')
  };