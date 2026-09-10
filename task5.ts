// Провести рефакторинг задачи так, чтобы код (toString().padStart(2, "0")) не повторялся, вынести его в отдельную функцию и использовать
// Саму задачу обернуть в отдельную функцию getDate, которая принимает в качестве параметра произвольную дату в формате '2026-10-22T22:10:15'
//* Проверить валидна ли дата в переданном параметре

//функция
function noPad(value: number): string {
  return value.toString().padStart(2, "0");
}

function getDate(dateString: string): string {
  const date: Date = new Date(dateString);
  //проверка даты
  if (Number.isNaN(date.getTime())) {
    console.log(`Incorrect format "${dateString}"`);
    return "";
  }

  const day = noPad(date.getDate());
  const month = noPad(date.getMonth() + 1);
  const year = date.getFullYear();

  const hours = noPad(date.getHours());
  const minutes = noPad(date.getMinutes());
  const seconds = noPad(date.getSeconds());

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

console.log(getDate("2026-10-22T22:10:15"));
