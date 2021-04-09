export const usernameIsValid = (name) => {
  if (!name.includes(" ")) {
    return true;
  } else {
    return false;
  }
};

export const emailIsValid = (email) => {
  if (!email.includes(".") || !email.includes("@")) {
    return false;
  } else {
    return true;
  }
};

export const passwordIsValid = (password) => {
  if (!password.includes(" ") || password.length < 4) {
    return true;
  } else {
    return false;
  }
};
