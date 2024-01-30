export function isValidPhoneNumber(value: string) {
  const phoneRegex = /^[1-9][0-9]{10}$/;
  return phoneRegex.test(value);
}
