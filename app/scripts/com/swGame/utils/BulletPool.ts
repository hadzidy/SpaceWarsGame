/// <reference path="../display/Bullet.ts" />

module com.swGame.utils {

    import Bullet = com.swGame.display.Bullet;

    export class BulletPool  {

        private _allBullets:Array<Bullet> = [];

        constructor() {
            this.initAllocations(25);
        }

        /*returns bullet instance*/
        alloc():Bullet {

            var bullet:Bullet;
            if (this._allBullets.length < 1) {
                bullet = new Bullet();
            } else {
                bullet = this._allBullets.pop();
            }
            return bullet;
        }
        
        /*push bullet instance to pool*/
        free(target:Bullet):void {
            this._allBullets.push(target);
        }

        private initAllocations(max:number):void {
            for (var i = 0; i < max; i++ ) {
                this._allBullets.push(new Bullet());
            }
        }
    }
}
