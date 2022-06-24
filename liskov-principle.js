/*
* Sub classes should be substitutable for their super classes.
* Child classes should never break the parent class’ type definitions.
* */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PostalAddress = /** @class */ (function () {
    function PostalAddress() {
    }
    return PostalAddress;
}());
var ItalyPostalAddress = /** @class */ (function (_super) {
    __extends(ItalyPostalAddress, _super);
    function ItalyPostalAddress() {
        return _super.call(this) || this;
    }
    ItalyPostalAddress.prototype.WriteAddress = function () {
        return "Formatted Address Italy" + this.City;
    };
    return ItalyPostalAddress;
}(PostalAddress));
var UKPostalAddress = /** @class */ (function (_super) {
    __extends(UKPostalAddress, _super);
    function UKPostalAddress() {
        return _super.call(this) || this;
    }
    UKPostalAddress.prototype.WriteAddress = function () {
        return "Formatted Address UK" + this.City;
    };
    return UKPostalAddress;
}(PostalAddress));
var USAPostalAddress = /** @class */ (function (_super) {
    __extends(USAPostalAddress, _super);
    function USAPostalAddress() {
        return _super.call(this) || this;
    }
    USAPostalAddress.prototype.WriteAddress = function () {
        return "Formatted Address USA" + this.City;
    };
    return USAPostalAddress;
}(PostalAddress));
var AddressWriter = /** @class */ (function () {
    function AddressWriter() {
    }
    AddressWriter.prototype.PrintPostalAddress = function (writer) {
        return writer.WriteAddress();
    };
    return AddressWriter;
}());
