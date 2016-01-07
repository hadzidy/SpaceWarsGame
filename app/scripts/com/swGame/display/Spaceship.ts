/**
 * Created by had on 1/6/16.
 */
module com.swGame.display {

    export class Spaceship extends createjs.Shape {

        private _radius:number;

        constructor(){

            super();
            this.init();
            this._radius= 14;

        }


        init():void {

            this.drawGraphics();
            this.x = 120;
            this.y = 120;

        }

        update():void{
            this.changePosition();
            //this.gun.update();
        }

        private changePosition(){
            this.x++;
            this.y++;

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