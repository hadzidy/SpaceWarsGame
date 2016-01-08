/**
 * Created by had on 1/7/16.
 */

/// <reference path="../display/AbstractSpaceRock.ts" />
/// <reference path="../utils/SpaceRocksFactory.ts" />

module com.swGame.utils {

    import AbstractSpaceRock= com.swGame.display.AbstractSpaceRock;
    import SpaceRocksFactory= com.swGame.utils.SpaceRocksFactory;

    export class RockPool  {

        private _rockCollection:Array<AbstractSpaceRock> = [];

        private static _instance:RockPool = null;

        constructor() {
            this.initAllocations(25);
        }

        static getInstance():RockPool {
            if(RockPool._instance == null) {
                RockPool._instance = new RockPool();
            }
            return RockPool._instance;
        }

        alloc():AbstractSpaceRock {

            var rock:AbstractSpaceRock;
            if (this._rockCollection.length < 1) {
                rock= this.getSpaceRock();
            } else {
                rock = this._rockCollection.pop();
            }
            return rock;
        }

        free(target:AbstractSpaceRock):void {
            this._rockCollection.push(target);
        }

        private initAllocations(max:number):void {
            for (var i = 0; i < max; i++ ) {
                this._rockCollection.push(this.getSpaceRock());
            }
        }


        /*get rocks from SpaceRockFactory*/

        private getSpaceRock():AbstractSpaceRock{
            var rockId:number= Math.floor(Math.random() * 3);
            var rock:AbstractSpaceRock= SpaceRocksFactory.create(rockId);
            return rock;
        }
    }
}
