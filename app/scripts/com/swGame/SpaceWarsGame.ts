/**
 * Created by had on 1/6/16.
 */

/// <reference path="./display/Spaceship.ts" />

module com.swGame {

    import Spaceship = com.swGame.display.Spaceship;

    export class SpaceWarsGame{

        private _stage:createjs.Stage;
        private _player:Spaceship;
        private _ticker_handler:{ handleEvent: (eventObj: Object) => void; };

        init(){

            this._stage = new createjs.Stage("GameCanvas");
            this._player = new Spaceship;
            this._stage.addChild(this._player);
            this._stage.update();
            this.setTicker();

        }

        setTicker(){
            this._ticker_handler = this.tick.bind(this);
            createjs.Ticker.setFPS(60);
            this.startTicker();
        }

        startTicker ():void {
            createjs.Ticker.addEventListener("tick", this._ticker_handler);
        }

        private tick (event:Event):void {
            //var deltaTime = event.delta;
            this._stage.update();
            this._player.update();
        }


    }
}