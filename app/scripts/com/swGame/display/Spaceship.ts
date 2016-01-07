/**
 * Created by had on 1/6/16.
 */

/// <reference path="./../ui/KeyboardController.ts" />
/// <reference path="../utils/maths/toRadians.ts" />

module com.swGame.display {

    import toRadians = com.swGame.utils.maths.toRadians;
    import KeyboardController = com.swGame.ui.KeyboardController;

    export class Spaceship extends createjs.Shape {

        private _radius:number;
        private _shipSpeed:number= 0;

        constructor(){

            super();
            this.init();
            this._radius= 14;

        }


        init():void {

            this.drawGraphics();
            this.x = 120;
            this.y = 120;

        }

        update():void{
            this.changePosition();
            //this.gun.update();
        }

        resetShipSpeed(){
            this._shipSpeed = 0;
        }

        private changePosition(){

            this.resetShipSpeed();

            if(KeyboardController.isKeyDown(KeyboardController.UP_KEY)) {
                this._shipSpeed = 10;
            }

            //if(KeyboardController.isKeyDown(KeyboardController.DOWN_KEY)) {
            //    this._shipSpeedY = 10;
            //}
            //
            if(KeyboardController.isKeyDown(KeyboardController.LEFT_KEY)) {
                this.rotation += -10;
            }

            if(KeyboardController.isKeyDown(KeyboardController.RIGHT_KEY)) {
                this.rotation += 10;
            }

            this.x += Math.cos(toRadians(this.rotation)) * this._shipSpeed;
            this.y += Math.sin(toRadians(this.rotation)) * this._shipSpeed;

        }

        private drawGraphics():void {

            this.graphics.setStrokeStyle(2)
                .beginStroke("#FFFFFF")
                .moveTo(-14, 0)
                .lineTo(-3, -5)
                .lineTo(2, -6)
                .lineTo(7, -6)
                .lineTo(12, -3)
                .lineTo(14, 0)
                .lineTo(12, 3)
                .lineTo(7, 6)
                .lineTo(2, 6)
                .lineTo(-3, 5)
                .lineTo(-14, 0)
                .moveTo(-7, -3)
                .lineTo(-14, -6)
                .lineTo(-14, -8)
                .lineTo(-7, -8)
                .lineTo(-3, -5)
                .moveTo(-7, 3)
                .lineTo(-14, 6)
                .lineTo(-14, 8)
                .lineTo(-7, 8)
                .lineTo(-3, 5)
                .endStroke()
                .setStrokeStyle(1).beginStroke("#FFFFFF")
                .drawCircle(4, 0, 2);

        }
    }

}