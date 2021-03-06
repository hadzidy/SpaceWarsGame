/// <reference path="../display/Spaceship.ts" />
/// <reference path="../utils/BulletPool.ts" />
/// <reference path="../display/Bullet.ts" />
/// <reference path="../ui/KeyboardController.ts" />

module com.swGame.ammo {

    import Spaceship= com.swGame.display.Spaceship;
    import BulletPool= com.swGame.utils.BulletPool;
    import Bullet= com.swGame.display.Bullet;
    import KeyboardController= com.swGame.ui.KeyboardController;

    export class Gun {

        private _bulletCollection:Array<Bullet>=[];
        private _bulletCurrentTime: number= 0;
        private _deltaTime:number;
        private _bulletPool:BulletPool = new BulletPool();

        static BULLET_MAX_INTERVAL:number = 500;

        constructor(private _ship:Spaceship){

            this._bulletCurrentTime= 0;

        }

        get bulletCollection():Array<Bullet>{
            return this._bulletCollection
        }

        update(delta:number):void{

            this._deltaTime = delta;
            this.shoot();

            for(var index in this._bulletCollection) {

                var b:Bullet = this._bulletCollection[index];
                b.update();

                /*free bullet when exceed stage limits*/
                if(b.x < 0 || b.x > 950 || b.y < 0 || b.y > 750) {
                    this._bulletCollection.splice(index,1);
                    this._bulletPool.free(b);
                }
            }

        }

        shoot():void{

            if(KeyboardController.isKeyDown(KeyboardController.SHOOT_KEY)){
                if(this._bulletCurrentTime<=0){
                    this.createBullet();
                    this._bulletCurrentTime = Gun.BULLET_MAX_INTERVAL;
                }else{
                    this._bulletCurrentTime -= this._deltaTime;
                }
            }else{
                this._bulletCurrentTime = 0;
            }

        }

        createBullet():void{

            var b = this._bulletPool.alloc();
            b.setPosition({xPos:this._ship.x, yPos:this._ship.y, angle:this._ship.rotation});
            this._bulletCollection.push(b);
            this._ship.parent.addChild(b);

        }

        removeBullet(bullet:Bullet):void{
            this._ship.parent.removeChild(bullet);
            var deleteR= this._bulletCollection.indexOf(bullet);
            this._bulletCollection.splice(deleteR, 1);
            this._bulletPool.free(bullet);
        }

    }
}