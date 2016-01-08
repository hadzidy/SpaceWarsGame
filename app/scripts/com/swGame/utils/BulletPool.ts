/// <reference path="../display/Bullet.ts" />

module com.swGame.utils {

    import Bullet = com.swGame.display.Bullet;

    export class BulletPool  {

        private _allBullets:Array<Bullet> = [];

        constructor() {
            this.initAllocations(25);
        }

        private initAllocations(max:number):void {
            for (var i = 0; i < max; i++ ) {
                this._allBullets.push(new Bullet());
            }
        }

        //regresa instancia de bullet
        alloc():Bullet {

            var bullet:Bullet;
            if (this._allBullets.length < 1) {
                bullet = new Bullet();
            } else {
                bullet = this._allBullets.pop();
            }
            return bullet;
        }

        //vuelve a ingresar una instancia al pool de Bullets
        free(target:Bullet):void {
            this._allBullets.push(target);
        }
    }
}
