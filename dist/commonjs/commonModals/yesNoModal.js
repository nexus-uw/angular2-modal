"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var ICustomModal_1 = require('../models/ICustomModal');
var ModalDialogInstance_1 = require('../models/ModalDialogInstance');
/**
 * @deprecated
 */
var YesNoModalContent = (function () {
    function YesNoModalContent(title, body, hideNo, yesText, noText) {
        if (title === void 0) { title = 'Hello World Title'; }
        if (body === void 0) { body = 'Hello World Body!'; }
        if (hideNo === void 0) { hideNo = false; }
        if (yesText === void 0) { yesText = 'YES'; }
        if (noText === void 0) { noText = 'NO'; }
        this.title = title;
        this.body = body;
        this.hideNo = hideNo;
        this.yesText = yesText;
        this.noText = noText;
    }
    return YesNoModalContent;
}());
exports.YesNoModalContent = YesNoModalContent;
/**
 * @deprecated
 */
var YesNoModal = (function () {
    function YesNoModal(dialog, modelContentData) {
        this.dialog = dialog;
        this.context = modelContentData;
        console.warn('DEPRECATED: YesNoModal will not be available in next version of ' +
            'angular2-modal, please move to the preset API.');
    }
    YesNoModal.prototype.ok = function ($event) {
        $event.stopPropagation();
        this.dialog.close(true);
    };
    YesNoModal.prototype.cancel = function () {
        this.dialog.dismiss();
    };
    YesNoModal = __decorate([
        core_1.Component({
            selector: 'modal-content',
            directives: [common_1.NgIf],
            /* tslint:disable */ template: "<div class=\"modal-header\">\n        <h3 class=\"modal-title\">{{context.title}}</h3>\n        </div>\n        <div class=\"modal-body\">{{context.body}}</div>\n        <div class=\"modal-footer\">\n            <button class=\"btn btn-primary\" (click)=\"ok($event)\">{{context.yesText}}</button>\n            <button *ngIf=\"!context.hideNo\" class=\"btn btn-warning\" (click)=\"cancel()\">{{context.noText}}</button>\n        </div>"
        }), 
        __metadata('design:paramtypes', [ModalDialogInstance_1.ModalDialogInstance, ICustomModal_1.ICustomModal])
    ], YesNoModal);
    return YesNoModal;
}());
exports.YesNoModal = YesNoModal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVzTm9Nb2RhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FuZ3VsYXIyLW1vZGFsL2NvbW1vbk1vZGFscy95ZXNOb01vZGFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBdUQsZUFBZSxDQUFDLENBQUE7QUFDdkUsdUJBQW1CLGlCQUFpQixDQUFDLENBQUE7QUFHckMsNkJBQWtELHdCQUF3QixDQUFDLENBQUE7QUFDM0Usb0NBQWtDLCtCQUErQixDQUFDLENBQUE7QUFFbEU7O0dBRUc7QUFDSDtJQUNJLDJCQUNXLEtBQW1DLEVBQ25DLElBQWtDLEVBQ2xDLE1BQXVCLEVBQ3ZCLE9BQXVCLEVBQ3ZCLE1BQXFCO1FBSjVCLHFCQUEwQyxHQUExQywyQkFBMEM7UUFDMUMsb0JBQXlDLEdBQXpDLDBCQUF5QztRQUN6QyxzQkFBOEIsR0FBOUIsY0FBOEI7UUFDOUIsdUJBQThCLEdBQTlCLGVBQThCO1FBQzlCLHNCQUE0QixHQUE1QixhQUE0QjtRQUpyQixVQUFLLEdBQUwsS0FBSyxDQUE4QjtRQUNuQyxTQUFJLEdBQUosSUFBSSxDQUE4QjtRQUNsQyxXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQUN2QixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixXQUFNLEdBQU4sTUFBTSxDQUFlO0lBQzdCLENBQUM7SUFDUix3QkFBQztBQUFELENBQUMsQUFSRCxJQVFDO0FBUlkseUJBQWlCLG9CQVE3QixDQUFBO0FBRUQ7O0dBRUc7QUFjSDtJQUlJLG9CQUFZLE1BQTJCLEVBQUUsZ0JBQThCO1FBQ25FLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQXNCLGdCQUFnQixDQUFDO1FBQ25ELE9BQU8sQ0FBQyxJQUFJLENBQUMsa0VBQWtFO1lBQzNFLGdEQUFnRCxDQUFDLENBQUE7SUFFekQsQ0FBQztJQUVELHVCQUFFLEdBQUYsVUFBRyxNQUFXO1FBQ1YsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCwyQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBaENMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFVBQVUsRUFBRSxDQUFFLGFBQUksQ0FBRTtZQUNwQixvQkFBb0IsQ0FBQyxRQUFRLEVBQzdCLHFiQU9XO1NBQ2QsQ0FBQzs7a0JBQUE7SUFxQkYsaUJBQUM7QUFBRCxDQUFDLEFBcEJELElBb0JDO0FBcEJZLGtCQUFVLGFBb0J0QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIHByb3ZpZGUsIEVsZW1lbnRSZWYsIEluamVjdG9yfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7TmdJZn0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcblxuXG5pbXBvcnQge0lDdXN0b21Nb2RhbCwgSUN1c3RvbU1vZGFsQ29tcG9uZW50fSBmcm9tICcuLi9tb2RlbHMvSUN1c3RvbU1vZGFsJztcbmltcG9ydCB7TW9kYWxEaWFsb2dJbnN0YW5jZX0gZnJvbSAnLi4vbW9kZWxzL01vZGFsRGlhbG9nSW5zdGFuY2UnO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjbGFzcyBZZXNOb01vZGFsQ29udGVudCB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyB0aXRsZTogc3RyaW5nID0gJ0hlbGxvIFdvcmxkIFRpdGxlJyxcbiAgICAgICAgcHVibGljIGJvZHk6IHN0cmluZyA9ICdIZWxsbyBXb3JsZCBCb2R5IScsXG4gICAgICAgIHB1YmxpYyBoaWRlTm86IGJvb2xlYW4gPSBmYWxzZSxcbiAgICAgICAgcHVibGljIHllc1RleHQ6IHN0cmluZyA9ICdZRVMnLFxuICAgICAgICBwdWJsaWMgbm9UZXh0OiBzdHJpbmcgPSAnTk8nXG4gICAgKSB7fVxufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbW9kYWwtY29udGVudCcsXG4gICAgZGlyZWN0aXZlczogWyBOZ0lmIF0sXG4gICAgLyogdHNsaW50OmRpc2FibGUgKi8gdGVtcGxhdGU6XG4gICAgYDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgPGgzIGNsYXNzPVwibW9kYWwtdGl0bGVcIj57e2NvbnRleHQudGl0bGV9fTwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPnt7Y29udGV4dC5ib2R5fX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIChjbGljayk9XCJvaygkZXZlbnQpXCI+e3tjb250ZXh0Lnllc1RleHR9fTwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIiFjb250ZXh0LmhpZGVOb1wiIGNsYXNzPVwiYnRuIGJ0bi13YXJuaW5nXCIgKGNsaWNrKT1cImNhbmNlbCgpXCI+e3tjb250ZXh0Lm5vVGV4dH19PC9idXR0b24+XG4gICAgICAgIDwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgWWVzTm9Nb2RhbCBpbXBsZW1lbnRzIElDdXN0b21Nb2RhbENvbXBvbmVudCB7XG4gICAgZGlhbG9nOiBNb2RhbERpYWxvZ0luc3RhbmNlO1xuICAgIGNvbnRleHQ6IFllc05vTW9kYWxDb250ZW50O1xuXG4gICAgY29uc3RydWN0b3IoZGlhbG9nOiBNb2RhbERpYWxvZ0luc3RhbmNlLCBtb2RlbENvbnRlbnREYXRhOiBJQ3VzdG9tTW9kYWwpIHtcbiAgICAgICAgdGhpcy5kaWFsb2cgPSBkaWFsb2c7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IDxZZXNOb01vZGFsQ29udGVudD5tb2RlbENvbnRlbnREYXRhO1xuICAgICAgICBjb25zb2xlLndhcm4oJ0RFUFJFQ0FURUQ6IFllc05vTW9kYWwgd2lsbCBub3QgYmUgYXZhaWxhYmxlIGluIG5leHQgdmVyc2lvbiBvZiAnICtcbiAgICAgICAgICAgICdhbmd1bGFyMi1tb2RhbCwgcGxlYXNlIG1vdmUgdG8gdGhlIHByZXNldCBBUEkuJylcblxuICAgIH1cblxuICAgIG9rKCRldmVudDogYW55KSB7XG4gICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5kaWFsb2cuY2xvc2UodHJ1ZSk7XG4gICAgfVxuXG4gICAgY2FuY2VsKCkge1xuICAgICAgICB0aGlzLmRpYWxvZy5kaXNtaXNzKCk7XG4gICAgfVxufVxuIl19