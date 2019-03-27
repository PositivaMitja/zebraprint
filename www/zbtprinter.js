var exec = require('cordova/exec');

exports.discoverPrinters = function(successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'ZebraBluetoothPrinter', 'discoverPrinters', []);
};

exports.printImage = function(base64, MACAddress, speed, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'ZebraBluetoothPrinter', 'printImage', [base64, MACAddress, speed]);
};

exports.getPrinterName = function(MACAddress, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'ZebraBluetoothPrinter', 'getPrinterName', [MACAddress]);
};


