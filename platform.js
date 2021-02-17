"use strict";
exports.__esModule = true;
exports.Platform = exports.Devices = void 0;
var Devices;
(function (Devices) {
    Devices["cartucho"] = "cartucho";
    Devices["tarjeta"] = "tarjeta";
    Devices["cd"] = "cd";
    Devices["dvd"] = "dvd";
    Devices["bluray"] = "bluray";
})(Devices = exports.Devices || (exports.Devices = {}));
var Platform = /** @class */ (function () {
    function Platform(name, releaseYear, company, nBits, generation, hasHD, hdSize, hasInternetConnection, storageDevice, color) {
        this.name = name;
        this.releaseYear = releaseYear;
        this.company = company;
        this.nBits = nBits;
        this.generation = generation;
        this.hasHD = hasHD;
        this.hdSize = hdSize;
        this.hasInternetConnection = hasInternetConnection;
        this.storageDevice = storageDevice;
        this.color = color;
    }
    Platform.prototype.getName = function () {
        return this.name;
    };
    Platform.prototype.getReleaseYear = function () {
        return this.releaseYear;
    };
    Platform.prototype.getCompany = function () {
        return this.company;
    };
    Platform.prototype.getNBits = function () {
        return this.nBits;
    };
    Platform.prototype.getGeneration = function () {
        return this.generation;
    };
    Platform.prototype.getHasHD = function () {
        return this.hasHD;
    };
    Platform.prototype.getHdSize = function () {
        return this.hdSize;
    };
    Platform.prototype.getHasInternetConnection = function () {
        return this.hasInternetConnection;
    };
    Platform.prototype.getStorageDevice = function () {
        return this.storageDevice;
    };
    Platform.prototype.getColor = function () {
        return this.color;
    };
    Platform.prototype.setName = function (name) {
        this.name = name;
    };
    Platform.prototype.setReleaseYear = function (releaseYear) {
        this.releaseYear = releaseYear;
    };
    Platform.prototype.setCompany = function (company) {
        this.company = company;
    };
    Platform.prototype.setNBits = function (nBits) {
        this.nBits = nBits;
    };
    Platform.prototype.setGeneration = function (generation) {
        this.generation = generation;
    };
    Platform.prototype.setHasHD = function (hasHD) {
        this.hasHD = hasHD;
    };
    Platform.prototype.setHdSize = function (hdSize) {
        this.hdSize = hdSize;
    };
    Platform.prototype.setHasInternetConnection = function (hasInternetConnection) {
        this.hasInternetConnection = hasInternetConnection;
    };
    Platform.prototype.setStorageDevice = function (storageDevice) {
        this.storageDevice = storageDevice;
    };
    Platform.prototype.setColor = function (color) {
        this.color = color;
    };
    Platform.prototype.isSame = function (platform) {
        var isSame = false;
        var sameCount = 0;
        for (var i = 0; i < this.iterate().length; i++) {
            if (this[this.iterate()[i]] == platform[platform.iterate()[i]]) {
                sameCount++;
            }
        }
        if (sameCount == this.iterate().length) {
            isSame = true;
        }
        return isSame;
    };
    Platform.prototype.print = function () {
        console.log(this.toString());
    };
    Platform.prototype.toString = function () {
        var attributes = '';
        for (var i = 0; i < this.iterate().length; i++) {
            attributes += this[this.iterate()[i]] + "\n";
        }
        return attributes;
    };
    Platform.prototype.iterate = function () {
        return Object.keys(this);
    };
    return Platform;
}());
exports.Platform = Platform;
