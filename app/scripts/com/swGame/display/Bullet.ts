/**
 * Created by had on 1/7/16.
 */

/// <reference path="../utils/maths/toRadians.ts" />

module com.swGame.display {

    import toRadians= com.swGame.utils.maths.toRadians;

    export class Bullet extends createjs.Shape {


        private _originX:number;
        private _originY:number;
        private _deltaX:number;
        private _deltaY:number;
        private _radius:number;

        constructor(config?:{xPos:number;yPos:number;angle:number}){
            super();

            var initPosition = config;
            if (initPosition == null) {
                initPosition = {xPos:0, yPos:0, angle:0};
            }
            this.setPosition(initPosition);
            this.init();

        }

        init(){

            this.drawGraphics();

        }

        update(){

            this.x += this._deltaX;
            this.y += this._deltaY;

        }

        setPosition(config:{xPos:number;yPos:number;angle:number}){

            this.x = this._originX = config.xPos;
            this.y = this._originY = config.yPos;
            this.rotation = config.angle;

            this._deltaX = (Math.cos(toRadians(this.rotation))) * 10;
            this._deltaY = (Math.sin(toRadians(this.rotation))) * 10;
            this._radius= 3;

        }

        private drawGraphics(){

            this.graphics.beginFill("#FFFFFF").drawCircle(0, 0, 2)
                .drawCircle(4, 0, 3).drawCircle(10, 0, 4);

        }

    }
}