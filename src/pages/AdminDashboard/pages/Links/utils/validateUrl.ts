function validateUrl(newLink: string) {
  let errorMessage = "";

  if (!newLink) {
    errorMessage = "The Link is required";
  }

  if (
    newLink.length > 1 &&
    !/^(ftp|http|https):\/\/|(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+(\.[a-zA-Z]{2,})?(\.[a-zA-Z]{2,})?$/.test(
      newLink
    )
  ) {
    errorMessage = "Invalid url";
  }

  return errorMessage;
}

export default validateUrl;
