// Написать функцию, которая проверяет - подходит ли пароль, переданный параметром, под заданные требования:
// Пароль должен содержать как минимум одну заглавную букву и цифру
// Пароль только из латинских букв
// Длина пароля должна быть не менее 10 символов
function validatePassword(password: string): boolean {
  // 1. Длина не менее 10 символов
  if (password.length < 10) {
    return false;
  }

  const latinOnly = /^[A-Za-z0-9]+$/; // 2. Только латинские буквы и цифры
  if (!latinOnly.test(password)) {
    return false;
  }

  const hasUpperCase = /[A-Z]/.test(password); // 3. Как минимум одна заглавная буква
  if (!hasUpperCase) {
    return false;
  }

  const hasDigit = /[0-9]/.test(password); // 4. Как минимум одна цифра
  if (!hasDigit) {
    return false;
  }

  return true;
}
console.log(validatePassword("123ASDaaafвввв"));
