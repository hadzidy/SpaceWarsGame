/**
 * Created by had on 1/7/16.
 */

module com.swGame.display {

    export class Bullet extends createjs.Shape {


        private originX:number;
        private originY:number;

        constructor(){
            super();

            this.init();

        }

        init(){

            this.drawGraphics();

        }

        update(){

            this.x += 10;

        }

        private drawGraphics(){

            this.graphics.beginFill("#FFFFFF").drawCircle(0, 0, 2)
                .drawCircle(4, 0, 3).drawCircle(10, 0, 4);

        }

    }
}