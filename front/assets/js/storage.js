const engine = {
  clear: function() {
    localStorage.clear();
  },
  get: function(name) {
    if (localStorage.getItem(name)) {
      return JSON.parse(localStorage.getItem(name));
    }
    return null;
  },
  has: function(name) {
    return localStorage.getItem(name);
  },
  set: function(name, value) {
    localStorage.setItem(name, JSON.stringify(value));
  }
}