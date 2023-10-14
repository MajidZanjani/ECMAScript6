function skier(name, sound) {
  return {
    name, //instead of: 'this.name = name'
    sound,
    powderYell: function () {
      let yell = this.sound.toUpperCase();
      console.log(`${yell}! ${yell}!`);
    },
  };
}

skier('Sendy', 'yeah').powderYell();
