export const passwordGenerate = () => {
  const password = Math.random().toString(36).slice(-8);
  console.log(password);
  return password;
};
