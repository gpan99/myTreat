"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
/** Error when invalid control is dirty, touched, or submitted. */
var MyErrorStateMatcher = (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());
exports.MyErrorStateMatcher = MyErrorStateMatcher;
/** @title Input with a custom ErrorStateMatcher */
var InputErrorStateMatcherExample = (function () {
    function InputErrorStateMatcherExample() {
        this.emailFormControl = new forms_1.FormControl('', [
            forms_1.Validators.required,
            forms_1.Validators.email,
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
    InputErrorStateMatcherExample = __decorate([
        core_1.Component({
            selector: 'input-error-state-matcher-example',
            templateUrl: './input-error-state-matcher-example.html',
            styleUrls: ['./input-error-state-matcher-example.css'],
        })
    ], InputErrorStateMatcherExample);
    return InputErrorStateMatcherExample;
}());
exports.InputErrorStateMatcherExample = InputErrorStateMatcherExample;
//# sourceMappingURL=inputerror.component.js.map