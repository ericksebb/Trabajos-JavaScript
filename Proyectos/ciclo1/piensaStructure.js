'use strict'

class User {
constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    if (gender === 0) {
            this.gender = "Male";
        } else if (gender === 1) {
            this.gender = "Female";
        } else {
            this.gender = "Other";
        }
    }
}


class Level {
  constructor(levelNumber, difficulty) {
    this.levelNumber = levelNumber;
    this.difficulty = difficulty;
  }
}

class Game {
  constructor(gameName) {
    this.gameName = gameName;
    this.levels = [];
  }

  createLevels() {
    for (let i = 1; i <= 10; i++) {
      const level = new Level(i, 'ez');
      this.levels.push(level);
    }
  }
}

let game1 = new Game("a");
game1.createLevels();

let game2 = new Game("B");
game2.createLevels();

let game3 = new Game("c");
game3.createLevels();

let game4 = new Game("d");
game4.createLevels();

let game5 = new Game("e");
game5.createLevels();

let game6 = new Game("f");
game6.createLevels();

let user1 = new User("Luis", 10, 0);

let settings = {
    user: user1,
    games: [game1, game2, game3, game4, game5, game6],
    sound: true,
    music: true,
    notifications: true
    };