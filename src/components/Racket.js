import Phaser from "phaser";

export default class Racket extends Phaser.GameObjects.Rectangle {
  constructor(scene, x, y, w, h, color, velocity) {
    // recibe el parametro scene porque se va a trabajar en una escena
    // los demas parametros son son de la clase rectangle, que le dan una posicion, tamaño y color

    super(scene, x, y, w, h, color);
    scene.add.existing(this); // agrega la paleta a la escena
    scene.physics.add.existing(this);
    // this.body.setImmovable(true);
    // this.body.allowGravity = false;

    // THIS hace referencia a la clase Racket en este caso
    // THIS suele hacer referencia al objeto que se este trabajando

    this.velocity = velocity;
    this.cursor = scene.input.keyboard.createCursorKeys();
  }

  update() {
    if (this.cursor.left.isDown) {
      // this.body.setVelocityX(-this.velocity);
    } else if (this.cursor.right.isDown) {
      // this.body.setVelocityX(this.velocity);
    } else {
      // this.body.setVelocityX(0);
    }
  }
}
