// import Phaser from "phaser";
// import Racket from "../components/Racket";
// import Ball from "../components/Ball";
// import events from "./EventCenter";

// export default class Pong extends Phaser.Scene {
//   constructor() {
//     super("pong");
//     this.level;
//     this.score;
//     this.obstacles = [];
//     this.racket;
//     this.ball;
//     this.velocityRacket;
//     this.velocityBall;
//   }

//   init(data) {
//     this.level = data.level || 1;
//     this.score = data.score || 0;
//     this.velocityRacket = data.velocityRacket || 300;
//     this.velocityBall = data.velocityBall || 200;
//   }

//   create() {
//     this.scene.launch("ui", {
//       level: this.level,
//       score: this.score,
//     });

//     this.racket = new Racket(
//       this,
//       400,
//       550,
//       100,
//       20,
//       0xffffff,
//       this.velocityRacket
//     );

//     this.ball = new Ball(this, 400, 300, 10, 0xffffff, this.velocityBall);

//     // add collider
//     this.physics.add.collider(this.racket, this.ball, this.hit, null, this);

//     // colision con los obstaculos
//     this.obstacles.forEach((obstacle) => {
//       const o = this.add.rectangle(
//         obstacle.x,
//         obstacle.y,
//         obstacle.ancho,
//         obstacle.alto,
//         0xffffff
//       );
//       this.physics.add.existing(o);
//       //o.body.setImmovable(true);
//       this.physics.add.collider(this.ball, o);
//     });
//   }

//   update() {
//     this.racket.update();
//   }

//   hit() {
//     this.score += 1;
//     events.emit("actualizarDatos", {
//       //eventEmitter emite eventos que se comunican entre escenas
//       //en este caso es un evento de la escena UI
//       level: this.level,
//       score: this.score,
//     });

//     if (this.score === 3) {
//       this.nextLevel();
//     }

//     this.ball.setColor();
//   }

//   nextLevel() {
//     this.level += 1;
//     this.score = 0;
//     this.velocityBall *= 1.1;
//     this.velocityRacket += 50;
//     this.obstacles.push({
//       x: Phaser.Math.Between(100, 700),
//       y: Phaser.Math.Between(0, 400),
//       ancho: Phaser.Math.Between(50, 100),
//       alto: Phaser.Math.Between(20, 40),
//     });

//     this.scene.start("pong", {
//       level: this.level,
//       score: this.score,
//       velocityBall: this.velocityBall,
//       velocityRacket: this.velocityRacket,
//       obstaculos: this.obstacles,
//     });
//   }
// }
