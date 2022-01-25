export function Pokemon(img, name, id, type, arrType) {
  (this.img = img),
    (this.name = name),
    (this.id = id),
    (this.arrType = arrType);
}

Pokemon.prototype.greeting = function () {
  return `I'm a ${this.name}`;
};
