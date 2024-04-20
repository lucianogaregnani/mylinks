function validateTitle(newTitle: string) {
  let errorMessage = "";

  if (!newTitle) {
    errorMessage = "The title is required";
  }

  if (newTitle.length > 20) {
    errorMessage = "The title must be less than 20 characters";
  }

  return errorMessage;
}

export default validateTitle;
