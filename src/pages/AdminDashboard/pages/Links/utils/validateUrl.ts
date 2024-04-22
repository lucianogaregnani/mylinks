function validateUrl(newLink: string) {
  let errorMessage = "";

  if (!newLink) {
    errorMessage = "The Link is required";
  }

  try {
    new URL(newLink);
  } catch (error) {
    errorMessage = "Invalid link";
  }

  return errorMessage;
}

export default validateUrl;
