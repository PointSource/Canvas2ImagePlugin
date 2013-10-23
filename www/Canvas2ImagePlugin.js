//
//  Canvas2ImagePlugin.js
//  Canvas2ImagePlugin PhoneGap/Cordova plugin
//
//  Created by Tommy-Carlos Williams on 29/03/12.
//  Copyright (c) 2012 Tommy-Carlos Williams. All rights reserved.
//  MIT Licensed
//

//This was adapted by JM Huret, 10/20/13, to operate with requireJS like many other Cordova Plugins

cordova.define("canvas2ImagePlugin", function(require, exports, module) {
    var exec = require('cordova/exec');
    
    /**
     * This class exposes the ability to take a Screenshot to JavaScript
     */
    var Canvas2ImagePlugin = function() {};

    /**
     * Save the screenshot to the user's Photo Library
     */
    Canvas2ImagePlugin.prototype.saveImageDataToLibrary = function(successCallback, failureCallback, canvasId) {
        // successCallback required
        if (typeof successCallback != "function") {
            console.log("Canvas2ImagePlugin Error: successCallback is not a function");
        }
        else if (typeof failureCallback != "function") {
            console.log("Canvas2ImagePlugin Error: failureCallback is not a function");
        }
        else {
            var canvas = (typeof canvasId === "string") ? document.getElementById(canvasId) : canvasId;
            var imageData = canvas.toDataURL().replace(/data:image\/png;base64,/,'');
            return cordova.exec(successCallback, failureCallback, "Canvas2ImagePlugin","saveImageDataToLibrary",[imageData]);
        }
    }

    var canvas2ImagePlugin = new Canvas2ImagePlugin();
    module.exports = canvas2ImagePlugin;

});

if (!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.canvas2ImagePlugin) {
    window.plugins.canvas2ImagePlugin = cordova.require("canvas2ImagePlugin");
}
