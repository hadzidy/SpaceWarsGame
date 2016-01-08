/**
 * Created by had on 1/6/16.
 */

/// <reference path="./../ammo/Gun.ts" />
/// <reference path="./../ui/KeyboardController.ts" />
/// <reference path="../utils/maths/toRadians.ts" />

module com.swGame.display {

    import Gun = com.swGame.ammo.Gun;
    import toRadians = com.swGame.utils.maths.toRadians;
    import KeyboardController = com.swGame.ui.KeyboardController;

    export class Spaceship extends createjs.Shape {

        public  gun:Gun;
        private _radius:number;
        private _shipSpeed:number= 0;

        constructor(private _canvasSize:{w:number;h:number}){

            super();
            this.init();
            this._radius= 14;

        }

        init():void {

            this.resetShipSpeed();
            this.drawGraphics();
            this.gun = new Gun(this);

            this.x = 120;
            this.y = 120;

        }

        update(delta:number):void{
            this.changePosition();
            this.gun.update(delta);
        }

        resetShipSpeed(){
            this._shipSpeed = 0;
        }

        private changePosition(){

            this.resetShipSpeed();

            if(KeyboardController.isKeyDown(KeyboardController.UP_KEY)) {
                this._shipSpeed = 10;
            }

            if(KeyboardController.isKeyDown(KeyboardController.LEFT_KEY)) {
                this.rotation += -10;
            }

            if(KeyboardController.isKeyDown(KeyboardController.RIGHT_KEY)) {
                this.rotation += 10;
            }

            var distanceX:number = Math.cos(toRadians(this.rotation))* this._shipSpeed;
            var distanceY:number = Math.sin(toRadians(this.rotation)) * this._shipSpeed;

            if(this.x + distanceX < this._canvasSize.w && this.x + distanceX > 0)
                this.x += distanceX;

            if(this.y + distanceY < this._canvasSize.h && this.y + distanceY > 0)
                this.y += distanceY;

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