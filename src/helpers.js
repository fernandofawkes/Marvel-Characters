export const extractNameParts = fullName => {
  const nameParts = (fullName || "").split(" (");
  return { real: (nameParts[1] || "").slice(0, -1), known: nameParts[0] };
};
