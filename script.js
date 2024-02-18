/**
 * 1
 */

//Создание объекта "Музыкальная коллекция"
const musicCollection = {
  //массив альбомов
  albums: [
    {
      title: "Царица",
      artist: "Анна Асти",
      year: "2023",
    },
    {
      title: "I Like it",
      artist: "Enrique Iglesias",
      year: "2010",
    },
    {
      title: "Brand New Day",
      artist: "Sting",
      year: "1999",
    },
  ],
};

//Иттерирование объекта "Музыкальная коллекция"

musicCollection[Symbol.iterator] = function () {
  const array = this.albums; //получаем массив альбомов
  let current = 0;
  return {
    next() {
      if (current < array.length) {
        return {
          value: array[current++],
          done: false,
        };
      } else {
        return {
          value: undefined,
          done: true,
        };
      }
    },
  };
};

for (const album of musicCollection) {
  console.log(`${album.title} - ${album.artist} (${album.year})`);
}

/**
 * 2
 */

let chefsAndSpecializations = new Map([
  ["Виктор", "Пицца"],
  ["Ольга", "Суши"],
  ["Дмитрий", "Десерты"],
]);

let pizza = chefsAndSpecializations.get("Виктор");
let sushi = chefsAndSpecializations.get("Ольга");
let desserts = chefsAndSpecializations.get("Дмитрий");

let cooksAndDishes = new Map()
  .set("Маргарита", pizza)
  .set("Пепперони", pizza)
  .set("Филадельфия", sushi)
  .set("Калифорния", sushi)
  .set("Тирамису", desserts)
  .set("Чизкейк", desserts);

let orders = new Map()
  .set("Алексей", ["Пепперони", "Тирамису"])
  .set("Мария", ["Калифорния", "Маргарита"])
  .set("Ирина", "Чизкейк");

for (let [client, dishes] of orders) {
  console.log(`Клиент ${client} заказал: ${dishes}`);
};
