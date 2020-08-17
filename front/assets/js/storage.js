const engine = localStorage;
const storage = {

  clear: function() {
    engine.clear();
  },

  get: function(name) {
    if (engine.getItem(name)) {
      return JSON.parse(engine.getItem(name));
    }
    return null;
  },

  has: function(name) {
    return engine.getItem(name);
  },

  set: function(name, value) {
    engine.setItem(name, JSON.stringify(value));
  }
}