import { PermissionsAndroid, Platform } from "react-native";

function AppUtils() {}

AppUtils.removeSpecialsCharacters = function (str) {
    this.str = str.replace(" ", "");

    return this.str.toString().replace(/[^\w\s]/gi,"");
};

AppUtils.removeAllSpaces = function (str) {
    return str.replace(/\s/g, "");
};

AppUtils.getCurrentPosition = function (callback) {
    this.requestGPSPermission().
    then(ok => {
        navigator.geolocation.getCurrentPosition(position => {
            callback(null, position);
        }, error => callback(error, null), { "enableHighAccuracy": true, "timeout": 20000, "maximumAge": 10000 });
    }).
    catch(err => {
        callback(err, null);
    });
};

AppUtils.requestGPSPermission = function () {
    if (Platform.OS === "ios") {
        return Promise.resolve(true);
    }

    return PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,{"title": "Localização","message": "O Markeii precisa da sua permissão para acessar os dados do GPS.","buttonPositive": "OK"})
        .then(granted => {
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                return Promise.resolve("You can use the location");
            } else {
                return Promise.reject(new Error("GPS permission denied"));
            }
        });
};

AppUtils.requestCameraPermission = function () {
    if (Platform.OS === "ios") {
        return Promise.resolve(true);
    }
    return PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {"title": "Camera","message": "O Markeii precisa da sua permissão para acessar a camera.","buttonPositive": "OK"})
        .then(granted => {
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                return Promise.resolve("Permission allowed");
            } else {
                return Promise.reject(new Error("Camera permission denied"));
            }
        });
};

AppUtils.requestReadStoragePermission = function () {
    if (Platform.OS === "ios") {
        return Promise.resolve(true);
    }
    return PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,{"title": "Acesso","message": "O Markeii precisa da sua permissão para acessar a sua galeria de fotos.","buttonPositive": "OK"})
        .then(granted => {
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                return Promise.resolve("Permission allowed");
            } else {
                return Promise.reject(new Error("Storage permission denied"));
            }
        });
};

AppUtils.requestWriteStoragePermission = function () {
    if (Platform.OS === "ios") {
        return Promise.resolve(true);
    }
    return PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,{"title": "Armazenamento","message": "O Markeii precisa da sua permissão para salvar fotos.","buttonPositive": "OK"})
        .then(granted => {
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                return Promise.resolve("Permission allowed");
            } else {
                return Promise.reject(new Error("Storage permission denied"));
            }
        });
};

AppUtils.isEmail = function (email){
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailReg.test(email);
};


AppUtils.removeAccentuation = function (str) {
    let com_acento = "ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŕ";
    let sem_acento = "AAAAAAACEEEEIIIIDNOOOOOOUUUUYRsBaaaaaaaceeeeiiiionoooooouuuuybyr";
    var newStr = "";

    for (var i = 0; i < str.length; i++) {
        var replace = false;

        for (var a = 0; a < com_acento.length; a++) {
            if (str.substr(i,1) === com_acento.substr(a,1)) {
                newStr += sem_acento.substr(a, 1);
                replace = true;
                break;
            }
        }

        if (replace === false) {
            newStr += str.substr(i, 1);
        }
    }

    return newStr;
};

module.exports = AppUtils;
