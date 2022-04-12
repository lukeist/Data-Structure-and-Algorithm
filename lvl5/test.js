class Netflix {
  constructor(action, drama, comedy, war) {
    this.action = action;
    this.drama = drama;
    this.comedy = comedy;
    this.war = war;
  }

  play() {
    alert("playing");
  }
  pause() {
    alert("pausing");
  }
  skip() {
    alert("skipping");
  }
}
