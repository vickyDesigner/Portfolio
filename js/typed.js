new TypeIt(".intro-text", {
  strings: "Hello:)",
  speed: 50,

  waitUntilVisible: true,
}).go();

const instance = new TypeIt("#text-right", {
  strings: ["I am a", "creative", "Web designer", "Eunjin"],
  speed: 40,
  loop: true,
  waitUntilVisible: true,
}).go();
