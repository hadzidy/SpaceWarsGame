/**
 * Created by had on 1/8/16.
 */

/// <reference path="./../display/AbstractSpaceRock.ts" />
/// <reference path="./../display/Bullet.ts" />

module com.swGame.events {

    import Bullet = com.swGame.display.Bullet;
    import ISpaceRock = com.swGame.display.AbstractSpaceRock;


    export class CollisionEvent extends createjs.Event {

        static ROCK_SHIP_COLLISION_EVENT = "CollisionManager.RockShipCollisionEvent";
        static BULLET_ROCK_COLLISION_EVENT = "CollisionManager.BulletRockCollisionEvent";

        public collisionData:{bullet:Bullet; rock:ISpaceRock};

        constructor (type:string) {
            super(type, false, false);
        }
    }
}