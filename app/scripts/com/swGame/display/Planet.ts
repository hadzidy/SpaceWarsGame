/**
 * Created by had on 1/8/16.
 */

/// <reference path="./AbstractSpaceRock.ts" />
/// <reference path="./../utils/IPoint.ts" />

module com.swGame.display {

    import AbstractSpaceRock= com.swGame.display.AbstractSpaceRock;
    import IPoint = com.swGame.utils.IPoint;

    export class Planet extends AbstractSpaceRock{

        public _radius:number= 30;
        public target:IPoint= {x:600,y:200};
        public rockSpeed:number= 1;

        constructor(){
            super();
        }

        drawGraphics():void{
            this.graphics.beginStroke("white")
                .setStrokeStyle(2)
                .drawCircle(0,0,30)
                .closePath();
        }

    }

}