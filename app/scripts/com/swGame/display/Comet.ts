/**
 * Created by had on 1/7/16.
 */

/// <reference path="./AbstractSpaceRock.ts" />
/// <reference path="./../utils/IPoint.ts" />

module com.swGame.display {

    import AbstractSpaceRock= com.swGame.display.AbstractSpaceRock;
    import IPoint = com.swGame.utils.IPoint;

    export class Comet extends AbstractSpaceRock{

        public _radius:number= 18;
        public target:IPoint= {x:600,y:200};
        public rockSpeed:number= 3;

        constructor(){
            super();
        }

        drawGraphics():void{
            this.graphics.beginStroke("white")
                .setStrokeStyle(2)
                .moveTo(-30, 0)
                .lineTo(-24, -12)
                .lineTo(-18, -18)
                .lineTo(0, -18)
                .lineTo(12, -12)
                .lineTo(18, 6)
                .lineTo(6, 18)
                .lineTo(-12, 18)
                .lineTo(-24, 12)
                .lineTo(-30, 6)
                .closePath();
        }

    }

}