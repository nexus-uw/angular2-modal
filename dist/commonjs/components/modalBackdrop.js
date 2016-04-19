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
var ModalDialogInstance_1 = require('../models/ModalDialogInstance');
/**
 * Represents the modal backdrop.
 */
var ModalBackdrop = (function () {
    function ModalBackdrop(dialog) {
        if (!dialog.inElement) {
            this.position = this.width = this.height = null;
            this.top = this.left = this.right = this.bottom = null;
        }
        else {
            this.position = 'absolute';
            this.height = '100%';
            this.width = '100%';
            this.top = this.left = this.right = this.bottom = '0';
        }
    }
    ModalBackdrop = __decorate([
        core_1.Component({
            selector: 'modal-backdrop',
            host: {
                '[style.position]': 'position',
                '[style.height]': 'height',
                '[style.width]': 'width',
                '[style.top]': 'top',
                '[style.left]': 'left',
                '[style.right]': 'right',
                '[style.bottom]': 'bottom'
            },
            template: '<div [style.position]="position" class="in modal-backdrop" #modalBackdrop></div>'
        }), 
        __metadata('design:paramtypes', [ModalDialogInstance_1.ModalDialogInstance])
    ], ModalBackdrop);
    return ModalBackdrop;
}());
exports.ModalBackdrop = ModalBackdrop;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWxCYWNrZHJvcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FuZ3VsYXIyLW1vZGFsL2NvbXBvbmVudHMvbW9kYWxCYWNrZHJvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLG9DQUFrQywrQkFBK0IsQ0FBQyxDQUFBO0FBR2xFOztHQUVHO0FBZUg7SUFVSSx1QkFBWSxNQUEyQjtRQUNuQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNoRCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUMzRCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztZQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztZQUNwQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUMxRCxDQUFDO0lBQ0wsQ0FBQztJQWxDTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLElBQUksRUFBRTtnQkFDRixrQkFBa0IsRUFBRSxVQUFVO2dCQUM5QixnQkFBZ0IsRUFBRSxRQUFRO2dCQUMxQixlQUFlLEVBQUUsT0FBTztnQkFDeEIsYUFBYSxFQUFFLEtBQUs7Z0JBQ3BCLGNBQWMsRUFBRSxNQUFNO2dCQUN0QixlQUFlLEVBQUUsT0FBTztnQkFDeEIsZ0JBQWdCLEVBQUUsUUFBUTthQUU3QjtZQUNELFFBQVEsRUFBRSxrRkFBa0Y7U0FDL0YsQ0FBQzs7cUJBQUE7SUFzQkYsb0JBQUM7QUFBRCxDQUFDLEFBckJELElBcUJDO0FBckJZLHFCQUFhLGdCQXFCekIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtNb2RhbERpYWxvZ0luc3RhbmNlfSBmcm9tICcuLi9tb2RlbHMvTW9kYWxEaWFsb2dJbnN0YW5jZSc7XG5cblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBtb2RhbCBiYWNrZHJvcC5cbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdtb2RhbC1iYWNrZHJvcCcsXG4gICAgaG9zdDoge1xuICAgICAgICAnW3N0eWxlLnBvc2l0aW9uXSc6ICdwb3NpdGlvbicsXG4gICAgICAgICdbc3R5bGUuaGVpZ2h0XSc6ICdoZWlnaHQnLFxuICAgICAgICAnW3N0eWxlLndpZHRoXSc6ICd3aWR0aCcsXG4gICAgICAgICdbc3R5bGUudG9wXSc6ICd0b3AnLFxuICAgICAgICAnW3N0eWxlLmxlZnRdJzogJ2xlZnQnLFxuICAgICAgICAnW3N0eWxlLnJpZ2h0XSc6ICdyaWdodCcsXG4gICAgICAgICdbc3R5bGUuYm90dG9tXSc6ICdib3R0b20nXG5cbiAgICB9LFxuICAgIHRlbXBsYXRlOiAnPGRpdiBbc3R5bGUucG9zaXRpb25dPVwicG9zaXRpb25cIiBjbGFzcz1cImluIG1vZGFsLWJhY2tkcm9wXCIgI21vZGFsQmFja2Ryb3A+PC9kaXY+J1xufSlcbmV4cG9ydCBjbGFzcyBNb2RhbEJhY2tkcm9wIHtcbiAgICBwdWJsaWMgcG9zaXRpb246IHN0cmluZztcbiAgICBwdWJsaWMgaGVpZ2h0OiBzdHJpbmc7XG4gICAgcHVibGljIHdpZHRoOiBzdHJpbmc7XG4gICAgcHVibGljIHRvcDogc3RyaW5nO1xuICAgIHB1YmxpYyBsZWZ0OiBzdHJpbmc7XG4gICAgcHVibGljIHJpZ2h0OiBzdHJpbmc7XG4gICAgcHVibGljIGJvdHRvbTogc3RyaW5nO1xuXG5cbiAgICBjb25zdHJ1Y3RvcihkaWFsb2c6IE1vZGFsRGlhbG9nSW5zdGFuY2UpIHtcbiAgICAgICAgaWYgKCFkaWFsb2cuaW5FbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy53aWR0aCA9IHRoaXMuaGVpZ2h0ID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMudG9wID0gdGhpcy5sZWZ0ID0gdGhpcy5yaWdodCA9IHRoaXMuYm90dG9tID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSAnMTAwJSc7XG4gICAgICAgICAgICB0aGlzLndpZHRoID0gJzEwMCUnO1xuICAgICAgICAgICAgdGhpcy50b3AgPSB0aGlzLmxlZnQgPSB0aGlzLnJpZ2h0ID0gdGhpcy5ib3R0b20gPSAnMCc7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=