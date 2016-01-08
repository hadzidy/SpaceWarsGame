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

        private _gun:Gun;
        private _radius:number= 13;
        private _shipSpeed:number= 0;

        constructor(private _canvasSize:{w:number;h:number}){
            super();
            this.init();
        }

        get radius():number{
            return this._radius;
        }

        get gun():Gun{
            return this._gun;
        }

        init():void {

            this.resetShipSpeed();
            this.drawGraphics();
            this._gun = new Gun(this);

            this.x = 120;
            this.y = 120;

        }

        update(delta:number):void{
            this.changePosition();
            this._gun.update(delta);
        }

        resetShipSpeed():void{
            this._shipSpeed = 0;
        }

        private changePosition():void{

            this.resetShipSpeed();

            if(KeyboardController.isKeyDown(KeyboardController.UP_KEY)) {
                this._shipSpeed = 10;
            }

            if(KeyboardController.isKeyDown(KeyboardController.JUMP_KEY)) {
                this._shipSpeed = 20;
            }

            if(KeyboardController.isKeyDown(KeyboardController.LEFT_KEY)){
                this.rotation += -10;
            }

            if(KeyboardController.isKeyDown(KeyboardController.RIGHT_KEY)) {
                this.rotation += 10;
            }

            var distanceX:number = this.x + (Math.cos(toRadians(this.rotation))* this._shipSpeed);
            var distanceY:number = this.y + (Math.sin(toRadians(this.rotation)) * this._shipSpeed);
            var csW:number= this._canvasSize.w;
            var csH:number= this._canvasSize.h;

            if(distanceX <  csW &&  distanceX > 0 && distanceY < csH &&  distanceY > 0){
                this.x = distanceX;
                this.y = distanceY;
            }

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