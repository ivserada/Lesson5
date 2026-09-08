// Напишите функцию, которая при каждом вызове будет выводит увеличенный счетчик на 1

// Пример:
const counter = createCounter(10);
console.log(counter());
console.log(counter());
function createCounter(n: number) {
  let newN = n;
  return () => {
    newN += 1;
    return newN;
  };
}
