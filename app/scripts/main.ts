/**
 * Created by had on 1/6/16.
 */
/// <reference path="../../definitions/jquery/jquery.d.ts" />
/// <reference path="../../definitions/easeljs/easeljs.d.ts" />

/// <reference path="./com/swGame/SpaceWarsGame.ts" />

import SpaceWarsGame= com.swGame.SpaceWarsGame;

$(function() {

    var game= new SpaceWarsGame();
    game.init();

});