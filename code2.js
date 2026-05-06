gdjs.GAME_32OVERCode = {};
gdjs.GAME_32OVERCode.localVariables = [];
gdjs.GAME_32OVERCode.idToCallbackMap = new Map();
gdjs.GAME_32OVERCode.GDMedievalButtonBeigeObjects1= [];
gdjs.GAME_32OVERCode.GDMedievalButtonBeigeObjects2= [];
gdjs.GAME_32OVERCode.GDTransparentButtonWithWhiteYellowBorderObjects1= [];
gdjs.GAME_32OVERCode.GDTransparentButtonWithWhiteYellowBorderObjects2= [];
gdjs.GAME_32OVERCode.GDSkullGameOverDialogObjects1= [];
gdjs.GAME_32OVERCode.GDSkullGameOverDialogObjects2= [];
gdjs.GAME_32OVERCode.GDDinoObjects1= [];
gdjs.GAME_32OVERCode.GDDinoObjects2= [];
gdjs.GAME_32OVERCode.GDsubvidatituloObjects1= [];
gdjs.GAME_32OVERCode.GDsubvidatituloObjects2= [];
gdjs.GAME_32OVERCode.GDsubvidaObjects1= [];
gdjs.GAME_32OVERCode.GDsubvidaObjects2= [];
gdjs.GAME_32OVERCode.GDHUDObjects1= [];
gdjs.GAME_32OVERCode.GDHUDObjects2= [];
gdjs.GAME_32OVERCode.GDTXTMONEDAObjects1= [];
gdjs.GAME_32OVERCode.GDTXTMONEDAObjects2= [];
gdjs.GAME_32OVERCode.GDAREADERIESGOObjects1= [];
gdjs.GAME_32OVERCode.GDAREADERIESGOObjects2= [];
gdjs.GAME_32OVERCode.GDbloquefantasmaObjects1= [];
gdjs.GAME_32OVERCode.GDbloquefantasmaObjects2= [];
gdjs.GAME_32OVERCode.GDLow_9595spikesObjects1= [];
gdjs.GAME_32OVERCode.GDLow_9595spikesObjects2= [];
gdjs.GAME_32OVERCode.GDAREADERIESGO2Objects1= [];
gdjs.GAME_32OVERCode.GDAREADERIESGO2Objects2= [];
gdjs.GAME_32OVERCode.GDbandeaObjects1= [];
gdjs.GAME_32OVERCode.GDbandeaObjects2= [];
gdjs.GAME_32OVERCode.GDWalking_9595enemyObjects1= [];
gdjs.GAME_32OVERCode.GDWalking_9595enemyObjects2= [];
gdjs.GAME_32OVERCode.GDTRIGGER_9595DERECHAObjects1= [];
gdjs.GAME_32OVERCode.GDTRIGGER_9595DERECHAObjects2= [];
gdjs.GAME_32OVERCode.GDTRIGGER_9595IZQUIERDAObjects1= [];
gdjs.GAME_32OVERCode.GDTRIGGER_9595IZQUIERDAObjects2= [];
gdjs.GAME_32OVERCode.GDFloater_9595enemyObjects1= [];
gdjs.GAME_32OVERCode.GDFloater_9595enemyObjects2= [];
gdjs.GAME_32OVERCode.GDTRIGGER_9595ABAJOObjects1= [];
gdjs.GAME_32OVERCode.GDTRIGGER_9595ABAJOObjects2= [];
gdjs.GAME_32OVERCode.GDTRIGGER_9595ARRIBAObjects1= [];
gdjs.GAME_32OVERCode.GDTRIGGER_9595ARRIBAObjects2= [];
gdjs.GAME_32OVERCode.GDGold_9595CoinObjects1= [];
gdjs.GAME_32OVERCode.GDGold_9595CoinObjects2= [];
gdjs.GAME_32OVERCode.GDCoin_9595GoldObjects1= [];
gdjs.GAME_32OVERCode.GDCoin_9595GoldObjects2= [];
gdjs.GAME_32OVERCode.GDStar_9595DiamondObjects1= [];
gdjs.GAME_32OVERCode.GDStar_9595DiamondObjects2= [];
gdjs.GAME_32OVERCode.GDfireballObjects1= [];
gdjs.GAME_32OVERCode.GDfireballObjects2= [];
gdjs.GAME_32OVERCode.GDFireballObjects1= [];
gdjs.GAME_32OVERCode.GDFireballObjects2= [];
gdjs.GAME_32OVERCode.GDCircleObjects1= [];
gdjs.GAME_32OVERCode.GDCircleObjects2= [];
gdjs.GAME_32OVERCode.GDCrossObjects1= [];
gdjs.GAME_32OVERCode.GDCrossObjects2= [];
gdjs.GAME_32OVERCode.GDbeeObjects1= [];
gdjs.GAME_32OVERCode.GDbeeObjects2= [];
gdjs.GAME_32OVERCode.GDSkullfruit_9595DropObjects1= [];
gdjs.GAME_32OVERCode.GDSkullfruit_9595DropObjects2= [];


gdjs.GAME_32OVERCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteYellowBorder"), gdjs.GAME_32OVERCode.GDTransparentButtonWithWhiteYellowBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GAME_32OVERCode.GDTransparentButtonWithWhiteYellowBorderObjects1.length;i<l;++i) {
    if ( gdjs.GAME_32OVERCode.GDTransparentButtonWithWhiteYellowBorderObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GAME_32OVERCode.GDTransparentButtonWithWhiteYellowBorderObjects1[k] = gdjs.GAME_32OVERCode.GDTransparentButtonWithWhiteYellowBorderObjects1[i];
        ++k;
    }
}
gdjs.GAME_32OVERCode.GDTransparentButtonWithWhiteYellowBorderObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MENU", false);
}
}

}


};

gdjs.GAME_32OVERCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GAME_32OVERCode.GDMedievalButtonBeigeObjects1.length = 0;
gdjs.GAME_32OVERCode.GDMedievalButtonBeigeObjects2.length = 0;
gdjs.GAME_32OVERCode.GDTransparentButtonWithWhiteYellowBorderObjects1.length = 0;
gdjs.GAME_32OVERCode.GDTransparentButtonWithWhiteYellowBorderObjects2.length = 0;
gdjs.GAME_32OVERCode.GDSkullGameOverDialogObjects1.length = 0;
gdjs.GAME_32OVERCode.GDSkullGameOverDialogObjects2.length = 0;
gdjs.GAME_32OVERCode.GDDinoObjects1.length = 0;
gdjs.GAME_32OVERCode.GDDinoObjects2.length = 0;
gdjs.GAME_32OVERCode.GDsubvidatituloObjects1.length = 0;
gdjs.GAME_32OVERCode.GDsubvidatituloObjects2.length = 0;
gdjs.GAME_32OVERCode.GDsubvidaObjects1.length = 0;
gdjs.GAME_32OVERCode.GDsubvidaObjects2.length = 0;
gdjs.GAME_32OVERCode.GDHUDObjects1.length = 0;
gdjs.GAME_32OVERCode.GDHUDObjects2.length = 0;
gdjs.GAME_32OVERCode.GDTXTMONEDAObjects1.length = 0;
gdjs.GAME_32OVERCode.GDTXTMONEDAObjects2.length = 0;
gdjs.GAME_32OVERCode.GDAREADERIESGOObjects1.length = 0;
gdjs.GAME_32OVERCode.GDAREADERIESGOObjects2.length = 0;
gdjs.GAME_32OVERCode.GDbloquefantasmaObjects1.length = 0;
gdjs.GAME_32OVERCode.GDbloquefantasmaObjects2.length = 0;
gdjs.GAME_32OVERCode.GDLow_9595spikesObjects1.length = 0;
gdjs.GAME_32OVERCode.GDLow_9595spikesObjects2.length = 0;
gdjs.GAME_32OVERCode.GDAREADERIESGO2Objects1.length = 0;
gdjs.GAME_32OVERCode.GDAREADERIESGO2Objects2.length = 0;
gdjs.GAME_32OVERCode.GDbandeaObjects1.length = 0;
gdjs.GAME_32OVERCode.GDbandeaObjects2.length = 0;
gdjs.GAME_32OVERCode.GDWalking_9595enemyObjects1.length = 0;
gdjs.GAME_32OVERCode.GDWalking_9595enemyObjects2.length = 0;
gdjs.GAME_32OVERCode.GDTRIGGER_9595DERECHAObjects1.length = 0;
gdjs.GAME_32OVERCode.GDTRIGGER_9595DERECHAObjects2.length = 0;
gdjs.GAME_32OVERCode.GDTRIGGER_9595IZQUIERDAObjects1.length = 0;
gdjs.GAME_32OVERCode.GDTRIGGER_9595IZQUIERDAObjects2.length = 0;
gdjs.GAME_32OVERCode.GDFloater_9595enemyObjects1.length = 0;
gdjs.GAME_32OVERCode.GDFloater_9595enemyObjects2.length = 0;
gdjs.GAME_32OVERCode.GDTRIGGER_9595ABAJOObjects1.length = 0;
gdjs.GAME_32OVERCode.GDTRIGGER_9595ABAJOObjects2.length = 0;
gdjs.GAME_32OVERCode.GDTRIGGER_9595ARRIBAObjects1.length = 0;
gdjs.GAME_32OVERCode.GDTRIGGER_9595ARRIBAObjects2.length = 0;
gdjs.GAME_32OVERCode.GDGold_9595CoinObjects1.length = 0;
gdjs.GAME_32OVERCode.GDGold_9595CoinObjects2.length = 0;
gdjs.GAME_32OVERCode.GDCoin_9595GoldObjects1.length = 0;
gdjs.GAME_32OVERCode.GDCoin_9595GoldObjects2.length = 0;
gdjs.GAME_32OVERCode.GDStar_9595DiamondObjects1.length = 0;
gdjs.GAME_32OVERCode.GDStar_9595DiamondObjects2.length = 0;
gdjs.GAME_32OVERCode.GDfireballObjects1.length = 0;
gdjs.GAME_32OVERCode.GDfireballObjects2.length = 0;
gdjs.GAME_32OVERCode.GDFireballObjects1.length = 0;
gdjs.GAME_32OVERCode.GDFireballObjects2.length = 0;
gdjs.GAME_32OVERCode.GDCircleObjects1.length = 0;
gdjs.GAME_32OVERCode.GDCircleObjects2.length = 0;
gdjs.GAME_32OVERCode.GDCrossObjects1.length = 0;
gdjs.GAME_32OVERCode.GDCrossObjects2.length = 0;
gdjs.GAME_32OVERCode.GDbeeObjects1.length = 0;
gdjs.GAME_32OVERCode.GDbeeObjects2.length = 0;
gdjs.GAME_32OVERCode.GDSkullfruit_9595DropObjects1.length = 0;
gdjs.GAME_32OVERCode.GDSkullfruit_9595DropObjects2.length = 0;

gdjs.GAME_32OVERCode.eventsList0(runtimeScene);
gdjs.GAME_32OVERCode.GDMedievalButtonBeigeObjects1.length = 0;
gdjs.GAME_32OVERCode.GDMedievalButtonBeigeObjects2.length = 0;
gdjs.GAME_32OVERCode.GDTransparentButtonWithWhiteYellowBorderObjects1.length = 0;
gdjs.GAME_32OVERCode.GDTransparentButtonWithWhiteYellowBorderObjects2.length = 0;
gdjs.GAME_32OVERCode.GDSkullGameOverDialogObjects1.length = 0;
gdjs.GAME_32OVERCode.GDSkullGameOverDialogObjects2.length = 0;
gdjs.GAME_32OVERCode.GDDinoObjects1.length = 0;
gdjs.GAME_32OVERCode.GDDinoObjects2.length = 0;
gdjs.GAME_32OVERCode.GDsubvidatituloObjects1.length = 0;
gdjs.GAME_32OVERCode.GDsubvidatituloObjects2.length = 0;
gdjs.GAME_32OVERCode.GDsubvidaObjects1.length = 0;
gdjs.GAME_32OVERCode.GDsubvidaObjects2.length = 0;
gdjs.GAME_32OVERCode.GDHUDObjects1.length = 0;
gdjs.GAME_32OVERCode.GDHUDObjects2.length = 0;
gdjs.GAME_32OVERCode.GDTXTMONEDAObjects1.length = 0;
gdjs.GAME_32OVERCode.GDTXTMONEDAObjects2.length = 0;
gdjs.GAME_32OVERCode.GDAREADERIESGOObjects1.length = 0;
gdjs.GAME_32OVERCode.GDAREADERIESGOObjects2.length = 0;
gdjs.GAME_32OVERCode.GDbloquefantasmaObjects1.length = 0;
gdjs.GAME_32OVERCode.GDbloquefantasmaObjects2.length = 0;
gdjs.GAME_32OVERCode.GDLow_9595spikesObjects1.length = 0;
gdjs.GAME_32OVERCode.GDLow_9595spikesObjects2.length = 0;
gdjs.GAME_32OVERCode.GDAREADERIESGO2Objects1.length = 0;
gdjs.GAME_32OVERCode.GDAREADERIESGO2Objects2.length = 0;
gdjs.GAME_32OVERCode.GDbandeaObjects1.length = 0;
gdjs.GAME_32OVERCode.GDbandeaObjects2.length = 0;
gdjs.GAME_32OVERCode.GDWalking_9595enemyObjects1.length = 0;
gdjs.GAME_32OVERCode.GDWalking_9595enemyObjects2.length = 0;
gdjs.GAME_32OVERCode.GDTRIGGER_9595DERECHAObjects1.length = 0;
gdjs.GAME_32OVERCode.GDTRIGGER_9595DERECHAObjects2.length = 0;
gdjs.GAME_32OVERCode.GDTRIGGER_9595IZQUIERDAObjects1.length = 0;
gdjs.GAME_32OVERCode.GDTRIGGER_9595IZQUIERDAObjects2.length = 0;
gdjs.GAME_32OVERCode.GDFloater_9595enemyObjects1.length = 0;
gdjs.GAME_32OVERCode.GDFloater_9595enemyObjects2.length = 0;
gdjs.GAME_32OVERCode.GDTRIGGER_9595ABAJOObjects1.length = 0;
gdjs.GAME_32OVERCode.GDTRIGGER_9595ABAJOObjects2.length = 0;
gdjs.GAME_32OVERCode.GDTRIGGER_9595ARRIBAObjects1.length = 0;
gdjs.GAME_32OVERCode.GDTRIGGER_9595ARRIBAObjects2.length = 0;
gdjs.GAME_32OVERCode.GDGold_9595CoinObjects1.length = 0;
gdjs.GAME_32OVERCode.GDGold_9595CoinObjects2.length = 0;
gdjs.GAME_32OVERCode.GDCoin_9595GoldObjects1.length = 0;
gdjs.GAME_32OVERCode.GDCoin_9595GoldObjects2.length = 0;
gdjs.GAME_32OVERCode.GDStar_9595DiamondObjects1.length = 0;
gdjs.GAME_32OVERCode.GDStar_9595DiamondObjects2.length = 0;
gdjs.GAME_32OVERCode.GDfireballObjects1.length = 0;
gdjs.GAME_32OVERCode.GDfireballObjects2.length = 0;
gdjs.GAME_32OVERCode.GDFireballObjects1.length = 0;
gdjs.GAME_32OVERCode.GDFireballObjects2.length = 0;
gdjs.GAME_32OVERCode.GDCircleObjects1.length = 0;
gdjs.GAME_32OVERCode.GDCircleObjects2.length = 0;
gdjs.GAME_32OVERCode.GDCrossObjects1.length = 0;
gdjs.GAME_32OVERCode.GDCrossObjects2.length = 0;
gdjs.GAME_32OVERCode.GDbeeObjects1.length = 0;
gdjs.GAME_32OVERCode.GDbeeObjects2.length = 0;
gdjs.GAME_32OVERCode.GDSkullfruit_9595DropObjects1.length = 0;
gdjs.GAME_32OVERCode.GDSkullfruit_9595DropObjects2.length = 0;


return;

}

gdjs['GAME_32OVERCode'] = gdjs.GAME_32OVERCode;
