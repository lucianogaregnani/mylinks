function validateUsername(username: string) {
  let messageError = "";

  if (username.length === 0) messageError = "Username is required";

  if (!/^[a-zA-Z0-9_]+$/.test(username))
    messageError =
      "The username can only contain underscore, numbers and lowercase letters.";

  if (username.length > 15)
    messageError = "The maximum number of characters is 15";

  return messageError;
}

export default validateUsername;
