/**
 * Created by had on 1/8/16.
 */

/// <reference path="../SpaceWarsGame.ts" />
/// <reference path="./../display/Bullet.ts" />
/// <reference path="./../display/AbstractSpaceRock.ts" />
/// <reference path="./../utils/maths/getABDistance.ts" />
/// <reference path="./../events/CollisionEvent.ts" />

module com.swGame.core{

    import Bullet = com.swGame.display.Bullet;
    import AbstractSpaceRock = com.swGame.display.AbstractSpaceRock;
    import getABDistance = com.swGame.utils.maths.getABDistance;
    import CollisionEvent = com.swGame.events.CollisionEvent;

    export class CollisionManager extends createjs.EventDispatcher{

        private _playerHitArea:createjs.Shape;

        constructor(private _game:SpaceWarsGame){
            super();
            this.setplayerHitArea();
        }

        update():void {
            this._playerHitArea.x = this._game.player.x;
            this._playerHitArea.y = this._game.player.y;
            this.rocksVsShipCollision();
            this.bulletVsRockCollision();
        }

        private setplayerHitArea(){
            this._playerHitArea = new createjs.Shape();
            this._playerHitArea.graphics.beginStroke("red")
                .setStrokeStyle(2)
                .drawCircle(0,0,this._game.player.radius)
                .closePath();

            /*To see the hit area*/
            //this._game.stage.addChild(this._playerHitArea);
        }

        /*determines whether there's intersections Bullet vs Rock*/

        private bulletVsRockCollision():void {

            var allBullets= this._game.player.gun.bulletCollection;
            var allRocks = this._game.spaceRocksManager.allRocks;

            for(var indexB in allBullets){
                var bullet:Bullet= allBullets[indexB];
                var a = {x: bullet.x, y: bullet.y};
                for(var indexR in allRocks){
                    var rock:AbstractSpaceRock= allRocks[indexR];
                    var b = {x: rock.x, y: rock.y};
                    var distance = getABDistance(a,b);
                    if(distance < (bullet.radius +rock.radius)){
                        var event = new CollisionEvent(CollisionEvent.BULLET_ROCK_COLLISION_EVENT);
                        event.collisionData = {bullet:bullet,rock:rock};
                        this.dispatchEvent(event);
                    }
                }
            }
        }

        /*determines whether there's intersections Rock vs Ship*/

        private rocksVsShipCollision():void{

            var allRocks = this._game.spaceRocksManager.allRocks;
            var ship = this._game.player;

            for(var index in allRocks){
                var rock:AbstractSpaceRock = allRocks[index];
                var a = {x:ship.x, y:ship.y};
                var b = {x:rock.x, y:rock.y};
                var distance = getABDistance(a,b);
                if(distance < (ship.radius + rock.radius)){
                    this.dispatchEvent(new CollisionEvent(CollisionEvent.ROCK_SHIP_COLLISION_EVENT));
                }

            }

        }


    }

}