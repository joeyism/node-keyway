"use strict";

var keyway= function(arr){
    var obj = {};
    arr.forEach(function(key){
        obj[key] = ""; 
    });
    return obj;
};

Array.keyway = function(arr){
    return keyway(arr);
};

Array.prototype.keyway = function(){
    return keyway(this);
}
