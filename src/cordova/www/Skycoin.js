var exec = require('cordova/exec');

var Skycoin = {
  createWallet: function(successCallback, errorCallback, args) {
    console.log('creating wallet');
    exec(successCallback, errorCallback, "Skycoin", "createwallet", args);
  },
  createAddress: function(successCallback, errorCallback, args) {
    console.log('creating address');
    exec(successCallback, errorCallback, "Skycoin", "createaddress", args);
  },
  getAddresses: function(successCallback, errorCallback, args) {
    console.log('getting address in wallet');
    exec(successCallback, errorCallback, "Skycoin", "getaddressinwallet", args);
  },
  getAddressBalance: function(successCallback, errorCallback, args) {
    console.log('getting address balance');
    exec(successCallback, errorCallback, "Skycoin", "getbalance", args);
  },
  sendSkycoin: function(successCallback, errorCallback, args) {
    console.log('sending skycoin');
    exec(successCallback, errorCallback, "Skycoin", "sendskycoin", args);
  }
};

module.exports = Skycoin;