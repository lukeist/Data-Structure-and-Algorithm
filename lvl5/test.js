class Netflix {
  constructor(title, genre, rating, numOfEp) {
    this.title = title;
    this.genre = genre;
    this.rating = rating;
    this.numOfEp = numOfEp;
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

let bridgerton = new Netflix("bridgeton", "drama");
