export const handleSyntaxError = (e: unknown) => {
  if (e === SyntaxError) {
    console.log(e);
  } else {
    console.warn("Script failed to load", e);
  }
};
