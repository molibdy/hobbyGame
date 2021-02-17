"use strict";
exports.__esModule = true;
exports.Person = exports.ProfessionOptions = void 0;
var ProfessionOptions;
(function (ProfessionOptions) {
    ProfessionOptions["DEVELOPER"] = "developer";
    ProfessionOptions["TESTER"] = "tester";
    ProfessionOptions["MANAGER"] = "manager";
    ProfessionOptions["DIRECTOR"] = "director";
})(ProfessionOptions = exports.ProfessionOptions || (exports.ProfessionOptions = {}));
var Person = /** @class */ (function () {
    function Person(name, nationality, profession, experienceYears) {
        this.name = name;
        this.nationality = nationality;
        this.profession = profession;
        this.experienceYears = experienceYears;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getNationality = function () {
        return this.nationality;
    };
    Person.prototype.getProfession = function () {
        return this.profession;
    };
    Person.prototype.getExperienceYears = function () {
        return this.experienceYears;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    Person.prototype.setNationality = function (nationality) {
        this.nationality = nationality;
    };
    Person.prototype.setProfession = function (profession) {
        this.profession = profession;
    };
    Person.prototype.setExperienceYears = function (experienceYears) {
        this.experienceYears = experienceYears;
    };
    Person.prototype.isSame = function (person) {
        var isSame = false;
        var sameCount = 0;
        for (var i = 0; i < this.iterate().length; i++) {
            if (this[this.iterate()[i]] == person[person.iterate()[i]]) {
                sameCount++;
            }
        }
        if (sameCount == this.iterate().length) {
            isSame = true;
        }
        return isSame;
    };
    Person.prototype.print = function () {
        console.log(this.toString());
    };
    Person.prototype.toString = function () {
        var attributes = '';
        for (var i = 0; i < this.iterate().length; i++) {
            attributes += this[this.iterate()[i]] + "\n";
        }
        return attributes;
    };
    Person.prototype.iterate = function () {
        return Object.keys(this);
    };
    return Person;
}());
exports.Person = Person;
