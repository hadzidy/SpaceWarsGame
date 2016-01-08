/**
 * Created by had on 1/6/16.
 */

/// <reference path="./display/Spaceship.ts" />
/// <reference path="./ui/KeyboardController.ts" />
/// <reference path="./core/SpaceRocksManager.ts" />

module com.swGame {

    import Spaceship = com.swGame.display.Spaceship;
    import KeyboardController = com.swGame.ui.KeyboardController;
    import SpaceRocksManager = com.swGame.core.SpaceRocksManager;

    export class SpaceWarsGame{

        private _stage:createjs.Stage;
        private _player:Spaceship;
        private _ticker_handler:{ handleEvent: (eventObj: Object) => void; };
        private _spaceRocksManager:SpaceRocksManager;

        init(){

            KeyboardController.initialize($(document));
            this._stage = new createjs.Stage("gameCanvas");
            this._player = new Spaceship({w:this._stage.canvas.width, h: this._stage.canvas.height});
            this._stage.addChild(this._player);
            this._spaceRocksManager =  new SpaceRocksManager(this._stage);
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
            var deltaTime = event["delta"];
            this._stage.update();
            this._player.update(deltaTime);
            this._spaceRocksManager.update(deltaTime);
        }


    }
}