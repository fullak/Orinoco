const engine = localStorage;

function get(name) {
  if (engine.getItem(name)) {
    return JSON.parse(engine.getItem(name));
  }
  return null;
}

function set(name, value) {
  localStorage.setItem(name, JSON.stringify(value));
}

function clear() {
  localStorage.clear();
}

function has(name) {
  return engine.getItem(name);
}
