/**
 * Created by had on 1/7/16.
 */
/// <reference path="./../ui/KeyboardController.ts" />
/// <reference path="./../utils/maths/toRadians.ts" />
/// <reference path="./../utils/IPoint.ts" />

module com.swGame.display {

    import KeyboardController = com.swGame.ui.KeyboardController;
    import IPoint = com.swGame.utils.IPoint;
    import toRadians = com.swGame.utils.maths.toRadians;

    export class AbstractSpaceRock extends createjs.Shape{

        public _radius:number;
        public target:IPoint= {x:500,y:300};
        public rockSpeed:number= 5;

        private _originDistance:number= 600;
        private _deltaX:number;
        private _deltaY:number;

        constructor () {
            super();
            this.init();

        }

        get radius():number{
            return this._radius;
        }

        drawGraphics():void{
            //Draw SpaceRock Shape
        }

        update():void {
            this.x += this._deltaX;
            this.y += this._deltaY;
        }

        setPosition(){
            var angle= this.getRandomAngle();
            this.x= this.target.x+ Math.cos(angle)* this._originDistance;
            this.y= this.target.y+ Math.sin(angle)* this._originDistance;
            this.getDirection();
        }

        private getDirection():void{
            var angleRotation= Math.atan2(this.target.y - this.y, this.target.x - this.x) * 180 / Math.PI;

            this._deltaX = (Math.cos(toRadians(angleRotation))* this.rockSpeed);
            this._deltaY = (Math.sin(toRadians(angleRotation))* this.rockSpeed);
        }

        private getRandomAngle():number {
            return toRadians(Math.random()*360);
        }


        private init():void {

            this.drawGraphics();

        }

    }
}