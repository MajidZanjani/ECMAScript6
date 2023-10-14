let cats = ['Charmy', 'Charlie'];
let dogs = ['Biscuit', 'Cookie'];
let animals = ['Smoky', 'Miro', 'Swimmy', ...cats, ...dogs];

console.log(animals);

animals.forEach((element) => {
  console.log(element);
});
