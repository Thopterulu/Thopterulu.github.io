// Fuzzy search utility functions
export function fuzzyScore(term, text) {
  if (!term || !text) return 0;

  const termLower = term.toLowerCase();
  const textLower = text.toLowerCase();

  // Exact match gets highest score
  if (textLower === termLower) return 1000;

  // Starts with term gets high score
  if (textLower.startsWith(termLower)) return 900;

  // Contains term gets medium score
  if (textLower.includes(termLower)) return 800;

  // Fuzzy matching algorithm
  let score = 0;
  let termIndex = 0;
  let consecutiveMatches = 0;

  for (let i = 0; i < textLower.length && termIndex < termLower.length; i++) {
    if (textLower[i] === termLower[termIndex]) {
      score += 10 + consecutiveMatches;
      termIndex++;
      consecutiveMatches++;
    } else {
      consecutiveMatches = 0;
    }
  }

  // Bonus for matching all characters
  if (termIndex === termLower.length) {
    score += 100;
  }

  // Penalty for length difference
  const lengthDiff = Math.abs(textLower.length - termLower.length);
  score -= lengthDiff * 2;

  return Math.max(0, score);
}

export function fuzzyFilter(items, searchTerm, getSearchableFields) {
  if (!searchTerm.trim()) return items;

  const results = items.map(item => {
    const fields = getSearchableFields(item);
    const maxScore = Math.max(...fields.map(field => fuzzyScore(searchTerm, field)));
    return { item, score: maxScore };
  });

  return results
    .filter(result => result.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(result => result.item);
}

export function highlightMatch(text, searchTerm) {
  if (!searchTerm || !text) return text;

  const termLower = searchTerm.toLowerCase();
  const textLower = text.toLowerCase();

  // Find the best match position
  let bestStart = textLower.indexOf(termLower);
  if (bestStart === -1) {
    // Fallback to character-by-character matching
    let termIndex = 0;
    let start = -1;

    for (let i = 0; i < textLower.length && termIndex < termLower.length; i++) {
      if (textLower[i] === termLower[termIndex]) {
        if (start === -1) start = i;
        termIndex++;
      }
    }

    if (start !== -1 && termIndex === termLower.length) {
      bestStart = start;
    }
  }

  if (bestStart !== -1) {
    const before = text.substring(0, bestStart);
    const match = text.substring(bestStart, bestStart + searchTerm.length);
    const after = text.substring(bestStart + searchTerm.length);

    return (
      <>
        {before}
        <mark style={{ backgroundColor: '#ffd700', padding: '0 2px', borderRadius: '2px' }}>
          {match}
        </mark>
        {after}
      </>
    );
  }

  return text;
}