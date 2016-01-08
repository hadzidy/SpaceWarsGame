/**
 * Created by had on 1/7/16.
 */

/// <reference path="../display/AbstractSpaceRock.ts" />
/// <reference path="../display/Asteroid.ts" />
/// <reference path="../display/Comet.ts" />
/// <reference path="../display/Meteorite.ts" />

module com.swGame.utils{

    import AbstractSpaceRock= com.swGame.display.AbstractSpaceRock;
    import Asteroid= com.swGame.display.Asteroid;
    import Comet= com.swGame.display.Comet;
    import Meteorite= com.swGame.display.Meteorite;

    export class SpaceRocksFactory{

        static ASTEROID_TYPE:number = 0;
        static COMET_TYPE:number = 1;
        static METEORITE_TYPE:number = 2;

        static create (id:number):AbstractSpaceRock {
            var a:AbstractSpaceRock;
            switch(id){
                case SpaceRocksFactory.ASTEROID_TYPE:
                    a = new Asteroid();
                    break;

                case SpaceRocksFactory.COMET_TYPE:
                    a = new Comet();
                    break;

                case SpaceRocksFactory.METEORITE_TYPE:
                    a = new Meteorite();
                    break;
            }
            return a;
        }

    }
}