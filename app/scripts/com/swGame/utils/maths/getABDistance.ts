/**
 * Created by had on 1/8/16.
 */
module com.swGame.utils.maths {
    export function getABDistance(a:IPoint, b:IPoint):number {
        /* Get the distance between two points */
        var distance = Math.sqrt(((a.x-b['x'])*(a.x-b['x'])) + ((a.y-b['y'])*(a.y-b['y'])));
        return distance
    }
}