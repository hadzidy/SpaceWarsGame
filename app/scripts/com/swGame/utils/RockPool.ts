/**
 * Created by had on 1/7/16.
 */
/// <reference path="../display/AbstractSpaceRock.ts" />
/// <reference path="../display/Asteroid.ts" />

module com.swGame.utils {

    import AbstractSpaceRock= com.swGame.display.AbstractSpaceRock;
    import Asteroid= com.swGame.display.Asteroid;

    export class RockPool  {

        private _allRocks:Array<AbstractSpaceRock> = [];

        private static _instace:RockPool = null;

        constructor() {
            this.initAllocations(25);
        }

        static getInstance():RockPool {
            if(RockPool._instace == null) {
                RockPool._instace = new RockPool();
            }
            return RockPool._instace;
        }

        alloc():AbstractSpaceRock {

            var rock:AbstractSpaceRock;

            console.log("_allRocks: ", this._allRocks.length);

            if (this._allRocks.length < 1) {
                var idRock = Math.floor(Math.random() * 4) + 1;
                rock= new Asteroid();

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
                var idRock= Math.floor(Math.random() * 4) + 1;
                this._allRocks.push(new Asteroid());
            }
            console.log(this._allRocks, "*++++++");
        }
    }
}
