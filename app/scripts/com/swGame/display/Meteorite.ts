/**
 * Created by had on 1/7/16.
 */

/// <reference path="./AbstractSpaceRock.ts" />

module com.swGame.display {

    import AbstractSpaceRock= com.swGame.display.AbstractSpaceRock;

    export class Meteorite extends AbstractSpaceRock{

        public _radius:number= 20;
        public target:IPoint= {x:400,y:400};
        public rockSpeed:number= 8;

        constructor(){
            super();
        }

        drawGraphics():void{
            this.graphics.beginStroke("white")
                .setStrokeStyle(2)
                .moveTo(-2,0)
                .lineTo(-2,-4)
                .lineTo(0,-6)
                .lineTo(2,-4)
                .lineTo(4,-2)
                .lineTo(4,0)
                .lineTo(0,2)
                .closePath();
        }

    }

}