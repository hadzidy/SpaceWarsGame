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
        public target:IPoint;

        private _speed:number= 800;

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
            this.x += 10;
            this.y += 10;
        }

        private getRandomAngle():number {
            return toRadians(Math.random()*360);
        }


        private init():void {

            this.drawGraphics();

        }

    }
}