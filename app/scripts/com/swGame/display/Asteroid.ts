/**
 * Created by had on 1/7/16.
 */

/// <reference path="./AbstractSpaceRock.ts" />

module com.swGame.display {

    import AbstractSpaceRock= com.swGame.display.AbstractSpaceRock;

    export class Asteroid extends AbstractSpaceRock{

        public _radius:number= 15;

        constructor(){
            super();
        }

        drawGraphics(){
            this.graphics.beginStroke("white")
                .setStrokeStyle(2)
                .moveTo(-15, -5)
                .lineTo(0, -15)
                .lineTo(10, -15)
                .lineTo(15, -10)
                .lineTo(15, 5)
                .lineTo(0, 15)
                .lineTo(-10, 10)
                .closePath();
        }

    }

}