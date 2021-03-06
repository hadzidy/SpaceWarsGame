/**
 * Created by had on 1/7/16.
 */

/// <reference path="../display/AbstractSpaceRock.ts" />
/// <reference path="../utils/RockPool.ts" />
/// <reference path="../utils/IPoint.ts" />

module com.swGame.core{

    import AbstractSpaceRock= com.swGame.display.AbstractSpaceRock;
    import RockPool= com.swGame.utils.RockPool;
    import IPoint= com.swGame.utils.IPoint;

    export class SpaceRocksManager{

        private _rockCollection:Array<AbstractSpaceRock>=[];
        private _deltaTime:number;
        private _rockTimer:number= 0;

        //time between rock shoots
        static ROCK_MAX_INTERVAL:number = 400;

        constructor(private _stage:createjs.Stage) {

        }

        get allRocks():Array<AbstractSpaceRock> {
            return this._rockCollection;
        }

        update(delta:number): void {
            this._deltaTime = delta;
            this.shoot();

            for(var index in this._rockCollection){
                var a:AbstractSpaceRock = this._rockCollection[index];
                a.update();
                if(a.x < -100 || a.x > 1000 || a.y < -100 || a.y > 800) {
                    this._rockCollection.splice(index,1);
                    RockPool.getInstance().free(a);
                }

            }
        }

        removeSpaceRock(spaceRock:AbstractSpaceRock):void{

            this._stage.removeChild(spaceRock);
            var deleteR= this._rockCollection.indexOf(spaceRock);
            this._rockCollection.splice(deleteR, 1);
            RockPool.getInstance().free(spaceRock);

        }

        private shoot(){
            if(this._rockTimer<=0){
                this.createRock();
                this._rockTimer = SpaceRocksManager.ROCK_MAX_INTERVAL;
            }else{
                this._rockTimer -= this._deltaTime;
            }
        }

        private createRock():void {
            var a:AbstractSpaceRock = RockPool.getInstance().alloc();
            a.setPosition();
            this._rockCollection.push(a);
            this._stage.addChild(a);
        }
    }
}