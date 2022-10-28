import { passwordStrength } from "check-password-strength";
import stringEntropy from "fast-password-entropy";

export const passStr = (password) => {
  if (password.length === 0) return { weak: 0, medium: 0, strong: 0 };
  const passStr = passwordStrength(password, passwordOptions).value;

  if (passStr === "Strong") {
    return { weak: 34, medium: 33, strong: 33 };
  } else if (passStr === "Medium") {
    return { weak: 34, medium: 34, strong: 0 };
  } else if (passStr === "Weak" || passStr === "Too weak") {
    return { weak: 34, medium: 0, strong: 0 };
  } else {
    return { weak: 0, medium: 0, strong: 0 };
  }
};

export const passPercent = (password) => {
  return stringEntropy(password);
};

const passwordOptions = [
  {
    id: 0,
    value: "Too weak",
    minDiversity: 0,
    minLength: 0,
  },
  {
    id: 1,
    value: "Weak",
    minDiversity: 1,
    minLength: 6,
  },
  {
    id: 2,
    value: "Medium",
    minDiversity: 2,
    minLength: 8,
  },
  {
    id: 3,
    value: "Strong",
    minDiversity: 3,
    minLength: 10,
  },
];
