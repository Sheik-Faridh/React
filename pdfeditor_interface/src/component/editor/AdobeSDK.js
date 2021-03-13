class AdobeEditor {

    static initialize(){
        return new Promise(resolve => {
            if(window.AdobeDC){
                resolve();
            }else{
                document.addEventListener("adobe_dc_view_sdk.ready",() => {
                    resolve();
                })
            }
        })
    }

    static setView(targetId){
        // Production client Id
        return new AdobeDC.View({clientId: "125caf7fe0ae46a184b9a2bac6dd3cf3", divId: targetId});
        // Development Client Id
        //return new AdobeDC.View({clientId: "92271d71aa3743d48f2e538f56c47c67", divId: targetId});
    }

    static renderFile(file,fileName,targetId){
        const adobeClientView = this.setView(targetId);
        adobeClientView.previewFile({
            content: {
                promise: Promise.resolve(file)
            }, 
            metaData: {
                fileName
            }
        });
        return adobeClientView;
    }

    static registerUser(adobeClientView,userData){
        const profile = {
            userProfile: {
                name: userData.userName,
                firstName: userData.firstName,
                lastName: userData.lastName,
                email: userData.email
            }
        };
          
        adobeClientView.registerCallback(
            AdobeDC.View.Enum.CallbackType.GET_USER_PROFILE_API,
            function() {
                return new Promise((resolve, reject) => {
                   resolve({
                      code: AdobeDC.View.Enum.ApiResponseCode.SUCCESS,
                      data: profile
                   });
                });
            });
    }

    static registerSaveEvent(adobeClientView,saveCBHandler){
        adobeClientView.registerCallback(
            AdobeDC.View.Enum.CallbackType.SAVE_API,
            saveCBHandler
        ) 
    }

}

export default AdobeEditor;