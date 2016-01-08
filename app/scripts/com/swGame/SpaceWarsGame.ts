/**
 * Created by had on 1/6/16.
 */

/// <reference path="./display/Spaceship.ts" />
/// <reference path="./display/Bullet.ts" />
/// <reference path="./display/AbstractSpaceRock.ts" />
/// <reference path="./ui/KeyboardController.ts" />
/// <reference path="./core/SpaceRocksManager.ts" />
/// <reference path="./core/CollisionManager.ts" />
/// <reference path="./events/CollisionEvent.ts" />

module com.swGame {

    import Spaceship = com.swGame.display.Spaceship;
    import Bullet = com.swGame.display.Bullet;
    import AbstractSpaceRock = com.swGame.display.AbstractSpaceRock;
    import KeyboardController = com.swGame.ui.KeyboardController;
    import SpaceRocksManager = com.swGame.core.SpaceRocksManager;
    import CollisionManager = com.swGame.core.CollisionManager;
    import CollisionEvent = com.swGame.events.CollisionEvent;

    export class SpaceWarsGame{

        private _stage:createjs.Stage;
        private _player:Spaceship;
        private _ticker_handler:{ handleEvent: (eventObj: Object) => void; };
        private _spaceRocksManager:SpaceRocksManager;
        private _collisionManager:CollisionManager;

        get stage():createjs.Stage{
            return this._stage;
        }

        get player():Spaceship{
            return this._player;
        }

        get spaceRocksManager():SpaceRocksManager{
            return this._spaceRocksManager;
        }

        init(){

            KeyboardController.initialize($(document));
            this._stage = new createjs.Stage("gameCanvas");
            this._player = new Spaceship({w:this._stage.canvas.width, h: this._stage.canvas.height});
            this._stage.addChild(this._player);
            this._spaceRocksManager =  new SpaceRocksManager(this._stage);
            this._stage.update();
            this.setTicker();
            this._collisionManager = new CollisionManager(this);

            this._collisionManager.addEventListener(CollisionEvent.BULLET_ROCK_COLLISION_EVENT, (e:CollisionEvent)=>{
                var bulletToRemove:Bullet = e.collisionData.bullet;
                var rockToRemove:AbstractSpaceRock = e.collisionData.rock;
                this._player.gun.removeBullet(bulletToRemove);
                this._spaceRocksManager.removeSpaceRock(rockToRemove);
            });

            this._collisionManager.addEventListener(CollisionEvent.ROCK_SHIP_COLLISION_EVENT, ()=>{
                this.stopTicker();
                setTimeout(()=>{
                    this._stage.clear();
                },200);
            });

        }

        private setTicker():void{
            this._ticker_handler = this.tick.bind(this);
            createjs.Ticker.setFPS(60);
            this.startTicker();
        }

        private startTicker ():void {
            createjs.Ticker.addEventListener("tick", this._ticker_handler);
        }

        private stopTicker ():void {
            createjs.Ticker.removeEventListener("tick", this._ticker_handler);
        }

        private tick (event:Event):void {
            var deltaTime = event["delta"];
            this._stage.update();
            this._player.update(deltaTime);
            this._spaceRocksManager.update(deltaTime);
            this._collisionManager.update();
        }

    }
}