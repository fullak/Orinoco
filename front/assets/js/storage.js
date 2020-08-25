// Objet permettant d'accèder au différent action sur le localStorage
const Storage = {

  engine: localStorage,
  
  clear: function() {
    this.engine.clear();
  },

  get: function(name) {
    if (this.engine.getItem(name)) {
      return JSON.parse(this.engine.getItem(name));
    }
    return null;
  },

  has: function(name) {
    return this.engine.getItem(name);
  },

  set: function(name, value) {
    this.engine.setItem(name, JSON.stringify(value));
  }
}