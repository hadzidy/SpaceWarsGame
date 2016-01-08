/**
 * Created by had on 1/7/16.
 */
/// <reference path="../display/AbstractSpaceRock.ts" />
/// <reference path="../display/Comet.ts" />

module com.swGame.utils {

    import AbstractSpaceRock= com.swGame.display.AbstractSpaceRock;
    import Comet= com.swGame.display.Comet;

    export class RockPool  {

        private _allRocks:Array<AbstractSpaceRock> = [];

        private static _instance:RockPool = null;

        constructor() {
            this.initAllocations(25);
        }

        static getInstance():RockPool {
            if(RockPool._instance == null) {
                RockPool._instance = new RockPool();
                console.log("rockPool");
            }
            return RockPool._instance;
        }

        alloc():AbstractSpaceRock {

            var rock:AbstractSpaceRock;
            if (this._allRocks.length < 1) {
                rock= new Comet();
            } else {
                rock = this._allRocks.pop();
            }
            return rock;
        }

        free(target:AbstractSpaceRock):void {
            this._allRocks.push(target);
        }

        private initAllocations(max:number):void {
            for (var i = 0; i < max; i++ ) {
                this._allRocks.push(new Comet());
            }
            console.log(this._allRocks, "*++++++");
        }
    }
}
