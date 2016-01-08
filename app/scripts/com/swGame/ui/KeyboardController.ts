/**
 * Created by had on 1/7/16.
 */
module com.swGame.ui {


    export class KeyboardController {

        static UP_KEY:number = 38;
        static RIGHT_KEY:number = 39;
        static LEFT_KEY:number = 37;

        static SHOOT_KEY:number = 32;
        static JUMP_KEY:number = 86;

        private static KEY_PRESS:{[key:number]:boolean} = {};

        public static initialize(document:JQuery):void {

            KeyboardController.KEY_PRESS[KeyboardController.UP_KEY] = false;
            KeyboardController.KEY_PRESS[KeyboardController.RIGHT_KEY] = false;
            KeyboardController.KEY_PRESS[KeyboardController.LEFT_KEY] = false;
            KeyboardController.KEY_PRESS[KeyboardController.SHOOT_KEY] = false;

            document.keydown((e) => {
                e.preventDefault();
                KeyboardController.KEY_PRESS[e.keyCode] = true;
            });

            document.keyup((e) => {
                e.preventDefault();
                KeyboardController.KEY_PRESS[e.keyCode] = false;
            });

        }

        public static isKeyDown(pressKey:number):boolean {
            return KeyboardController.KEY_PRESS[pressKey];
        }

    }

}