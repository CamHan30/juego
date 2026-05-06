gdjs.MENUCode = {};
gdjs.MENUCode.localVariables = [];
gdjs.MENUCode.idToCallbackMap = new Map();
gdjs.MENUCode.GDTransparentButtonWithWhiteYellowBorderObjects1= [];
gdjs.MENUCode.GDTransparentButtonWithWhiteYellowBorderObjects2= [];
gdjs.MENUCode.GDcloud_95954Objects1= [];
gdjs.MENUCode.GDcloud_95954Objects2= [];
gdjs.MENUCode.GDMerged_9595Full_9595BackgroundObjects1= [];
gdjs.MENUCode.GDMerged_9595Full_9595BackgroundObjects2= [];
gdjs.MENUCode.GDDinoObjects1= [];
gdjs.MENUCode.GDDinoObjects2= [];
gdjs.MENUCode.GDsubvidatituloObjects1= [];
gdjs.MENUCode.GDsubvidatituloObjects2= [];
gdjs.MENUCode.GDsubvidaObjects1= [];
gdjs.MENUCode.GDsubvidaObjects2= [];
gdjs.MENUCode.GDHUDObjects1= [];
gdjs.MENUCode.GDHUDObjects2= [];
gdjs.MENUCode.GDTXTMONEDAObjects1= [];
gdjs.MENUCode.GDTXTMONEDAObjects2= [];
gdjs.MENUCode.GDAREADERIESGOObjects1= [];
gdjs.MENUCode.GDAREADERIESGOObjects2= [];
gdjs.MENUCode.GDbloquefantasmaObjects1= [];
gdjs.MENUCode.GDbloquefantasmaObjects2= [];
gdjs.MENUCode.GDLow_9595spikesObjects1= [];
gdjs.MENUCode.GDLow_9595spikesObjects2= [];
gdjs.MENUCode.GDAREADERIESGO2Objects1= [];
gdjs.MENUCode.GDAREADERIESGO2Objects2= [];
gdjs.MENUCode.GDbandeaObjects1= [];
gdjs.MENUCode.GDbandeaObjects2= [];
gdjs.MENUCode.GDWalking_9595enemyObjects1= [];
gdjs.MENUCode.GDWalking_9595enemyObjects2= [];
gdjs.MENUCode.GDTRIGGER_9595DERECHAObjects1= [];
gdjs.MENUCode.GDTRIGGER_9595DERECHAObjects2= [];
gdjs.MENUCode.GDTRIGGER_9595IZQUIERDAObjects1= [];
gdjs.MENUCode.GDTRIGGER_9595IZQUIERDAObjects2= [];
gdjs.MENUCode.GDFloater_9595enemyObjects1= [];
gdjs.MENUCode.GDFloater_9595enemyObjects2= [];
gdjs.MENUCode.GDTRIGGER_9595ABAJOObjects1= [];
gdjs.MENUCode.GDTRIGGER_9595ABAJOObjects2= [];
gdjs.MENUCode.GDTRIGGER_9595ARRIBAObjects1= [];
gdjs.MENUCode.GDTRIGGER_9595ARRIBAObjects2= [];
gdjs.MENUCode.GDGold_9595CoinObjects1= [];
gdjs.MENUCode.GDGold_9595CoinObjects2= [];
gdjs.MENUCode.GDCoin_9595GoldObjects1= [];
gdjs.MENUCode.GDCoin_9595GoldObjects2= [];
gdjs.MENUCode.GDStar_9595DiamondObjects1= [];
gdjs.MENUCode.GDStar_9595DiamondObjects2= [];
gdjs.MENUCode.GDfireballObjects1= [];
gdjs.MENUCode.GDfireballObjects2= [];
gdjs.MENUCode.GDFireballObjects1= [];
gdjs.MENUCode.GDFireballObjects2= [];
gdjs.MENUCode.GDCircleObjects1= [];
gdjs.MENUCode.GDCircleObjects2= [];
gdjs.MENUCode.GDCrossObjects1= [];
gdjs.MENUCode.GDCrossObjects2= [];
gdjs.MENUCode.GDbeeObjects1= [];
gdjs.MENUCode.GDbeeObjects2= [];
gdjs.MENUCode.GDSkullfruit_9595DropObjects1= [];
gdjs.MENUCode.GDSkullfruit_9595DropObjects2= [];


gdjs.MENUCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteYellowBorder"), gdjs.MENUCode.GDTransparentButtonWithWhiteYellowBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MENUCode.GDTransparentButtonWithWhiteYellowBorderObjects1.length;i<l;++i) {
    if ( gdjs.MENUCode.GDTransparentButtonWithWhiteYellowBorderObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MENUCode.GDTransparentButtonWithWhiteYellowBorderObjects1[k] = gdjs.MENUCode.GDTransparentButtonWithWhiteYellowBorderObjects1[i];
        ++k;
    }
}
gdjs.MENUCode.GDTransparentButtonWithWhiteYellowBorderObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "escena1", false);
}
}

}


};

gdjs.MENUCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MENUCode.GDTransparentButtonWithWhiteYellowBorderObjects1.length = 0;
gdjs.MENUCode.GDTransparentButtonWithWhiteYellowBorderObjects2.length = 0;
gdjs.MENUCode.GDcloud_95954Objects1.length = 0;
gdjs.MENUCode.GDcloud_95954Objects2.length = 0;
gdjs.MENUCode.GDMerged_9595Full_9595BackgroundObjects1.length = 0;
gdjs.MENUCode.GDMerged_9595Full_9595BackgroundObjects2.length = 0;
gdjs.MENUCode.GDDinoObjects1.length = 0;
gdjs.MENUCode.GDDinoObjects2.length = 0;
gdjs.MENUCode.GDsubvidatituloObjects1.length = 0;
gdjs.MENUCode.GDsubvidatituloObjects2.length = 0;
gdjs.MENUCode.GDsubvidaObjects1.length = 0;
gdjs.MENUCode.GDsubvidaObjects2.length = 0;
gdjs.MENUCode.GDHUDObjects1.length = 0;
gdjs.MENUCode.GDHUDObjects2.length = 0;
gdjs.MENUCode.GDTXTMONEDAObjects1.length = 0;
gdjs.MENUCode.GDTXTMONEDAObjects2.length = 0;
gdjs.MENUCode.GDAREADERIESGOObjects1.length = 0;
gdjs.MENUCode.GDAREADERIESGOObjects2.length = 0;
gdjs.MENUCode.GDbloquefantasmaObjects1.length = 0;
gdjs.MENUCode.GDbloquefantasmaObjects2.length = 0;
gdjs.MENUCode.GDLow_9595spikesObjects1.length = 0;
gdjs.MENUCode.GDLow_9595spikesObjects2.length = 0;
gdjs.MENUCode.GDAREADERIESGO2Objects1.length = 0;
gdjs.MENUCode.GDAREADERIESGO2Objects2.length = 0;
gdjs.MENUCode.GDbandeaObjects1.length = 0;
gdjs.MENUCode.GDbandeaObjects2.length = 0;
gdjs.MENUCode.GDWalking_9595enemyObjects1.length = 0;
gdjs.MENUCode.GDWalking_9595enemyObjects2.length = 0;
gdjs.MENUCode.GDTRIGGER_9595DERECHAObjects1.length = 0;
gdjs.MENUCode.GDTRIGGER_9595DERECHAObjects2.length = 0;
gdjs.MENUCode.GDTRIGGER_9595IZQUIERDAObjects1.length = 0;
gdjs.MENUCode.GDTRIGGER_9595IZQUIERDAObjects2.length = 0;
gdjs.MENUCode.GDFloater_9595enemyObjects1.length = 0;
gdjs.MENUCode.GDFloater_9595enemyObjects2.length = 0;
gdjs.MENUCode.GDTRIGGER_9595ABAJOObjects1.length = 0;
gdjs.MENUCode.GDTRIGGER_9595ABAJOObjects2.length = 0;
gdjs.MENUCode.GDTRIGGER_9595ARRIBAObjects1.length = 0;
gdjs.MENUCode.GDTRIGGER_9595ARRIBAObjects2.length = 0;
gdjs.MENUCode.GDGold_9595CoinObjects1.length = 0;
gdjs.MENUCode.GDGold_9595CoinObjects2.length = 0;
gdjs.MENUCode.GDCoin_9595GoldObjects1.length = 0;
gdjs.MENUCode.GDCoin_9595GoldObjects2.length = 0;
gdjs.MENUCode.GDStar_9595DiamondObjects1.length = 0;
gdjs.MENUCode.GDStar_9595DiamondObjects2.length = 0;
gdjs.MENUCode.GDfireballObjects1.length = 0;
gdjs.MENUCode.GDfireballObjects2.length = 0;
gdjs.MENUCode.GDFireballObjects1.length = 0;
gdjs.MENUCode.GDFireballObjects2.length = 0;
gdjs.MENUCode.GDCircleObjects1.length = 0;
gdjs.MENUCode.GDCircleObjects2.length = 0;
gdjs.MENUCode.GDCrossObjects1.length = 0;
gdjs.MENUCode.GDCrossObjects2.length = 0;
gdjs.MENUCode.GDbeeObjects1.length = 0;
gdjs.MENUCode.GDbeeObjects2.length = 0;
gdjs.MENUCode.GDSkullfruit_9595DropObjects1.length = 0;
gdjs.MENUCode.GDSkullfruit_9595DropObjects2.length = 0;

gdjs.MENUCode.eventsList0(runtimeScene);
gdjs.MENUCode.GDTransparentButtonWithWhiteYellowBorderObjects1.length = 0;
gdjs.MENUCode.GDTransparentButtonWithWhiteYellowBorderObjects2.length = 0;
gdjs.MENUCode.GDcloud_95954Objects1.length = 0;
gdjs.MENUCode.GDcloud_95954Objects2.length = 0;
gdjs.MENUCode.GDMerged_9595Full_9595BackgroundObjects1.length = 0;
gdjs.MENUCode.GDMerged_9595Full_9595BackgroundObjects2.length = 0;
gdjs.MENUCode.GDDinoObjects1.length = 0;
gdjs.MENUCode.GDDinoObjects2.length = 0;
gdjs.MENUCode.GDsubvidatituloObjects1.length = 0;
gdjs.MENUCode.GDsubvidatituloObjects2.length = 0;
gdjs.MENUCode.GDsubvidaObjects1.length = 0;
gdjs.MENUCode.GDsubvidaObjects2.length = 0;
gdjs.MENUCode.GDHUDObjects1.length = 0;
gdjs.MENUCode.GDHUDObjects2.length = 0;
gdjs.MENUCode.GDTXTMONEDAObjects1.length = 0;
gdjs.MENUCode.GDTXTMONEDAObjects2.length = 0;
gdjs.MENUCode.GDAREADERIESGOObjects1.length = 0;
gdjs.MENUCode.GDAREADERIESGOObjects2.length = 0;
gdjs.MENUCode.GDbloquefantasmaObjects1.length = 0;
gdjs.MENUCode.GDbloquefantasmaObjects2.length = 0;
gdjs.MENUCode.GDLow_9595spikesObjects1.length = 0;
gdjs.MENUCode.GDLow_9595spikesObjects2.length = 0;
gdjs.MENUCode.GDAREADERIESGO2Objects1.length = 0;
gdjs.MENUCode.GDAREADERIESGO2Objects2.length = 0;
gdjs.MENUCode.GDbandeaObjects1.length = 0;
gdjs.MENUCode.GDbandeaObjects2.length = 0;
gdjs.MENUCode.GDWalking_9595enemyObjects1.length = 0;
gdjs.MENUCode.GDWalking_9595enemyObjects2.length = 0;
gdjs.MENUCode.GDTRIGGER_9595DERECHAObjects1.length = 0;
gdjs.MENUCode.GDTRIGGER_9595DERECHAObjects2.length = 0;
gdjs.MENUCode.GDTRIGGER_9595IZQUIERDAObjects1.length = 0;
gdjs.MENUCode.GDTRIGGER_9595IZQUIERDAObjects2.length = 0;
gdjs.MENUCode.GDFloater_9595enemyObjects1.length = 0;
gdjs.MENUCode.GDFloater_9595enemyObjects2.length = 0;
gdjs.MENUCode.GDTRIGGER_9595ABAJOObjects1.length = 0;
gdjs.MENUCode.GDTRIGGER_9595ABAJOObjects2.length = 0;
gdjs.MENUCode.GDTRIGGER_9595ARRIBAObjects1.length = 0;
gdjs.MENUCode.GDTRIGGER_9595ARRIBAObjects2.length = 0;
gdjs.MENUCode.GDGold_9595CoinObjects1.length = 0;
gdjs.MENUCode.GDGold_9595CoinObjects2.length = 0;
gdjs.MENUCode.GDCoin_9595GoldObjects1.length = 0;
gdjs.MENUCode.GDCoin_9595GoldObjects2.length = 0;
gdjs.MENUCode.GDStar_9595DiamondObjects1.length = 0;
gdjs.MENUCode.GDStar_9595DiamondObjects2.length = 0;
gdjs.MENUCode.GDfireballObjects1.length = 0;
gdjs.MENUCode.GDfireballObjects2.length = 0;
gdjs.MENUCode.GDFireballObjects1.length = 0;
gdjs.MENUCode.GDFireballObjects2.length = 0;
gdjs.MENUCode.GDCircleObjects1.length = 0;
gdjs.MENUCode.GDCircleObjects2.length = 0;
gdjs.MENUCode.GDCrossObjects1.length = 0;
gdjs.MENUCode.GDCrossObjects2.length = 0;
gdjs.MENUCode.GDbeeObjects1.length = 0;
gdjs.MENUCode.GDbeeObjects2.length = 0;
gdjs.MENUCode.GDSkullfruit_9595DropObjects1.length = 0;
gdjs.MENUCode.GDSkullfruit_9595DropObjects2.length = 0;


return;

}

gdjs['MENUCode'] = gdjs.MENUCode;
