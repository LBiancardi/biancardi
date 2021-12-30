export function Pokemon(img, name, id, type) {
  (this.img = img), (this.name = name), (this.id = id), (this.type = type);
}

Pokemon.prototype.greeting = function () {
  return `I'm a ${this.name}`;
};
