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
var Modal_1 = require('../providers/Modal');
/**
 * A component that acts as a top level container for an open modal window.
 */
var BootstrapModalContainer = (function () {
    function BootstrapModalContainer(dialogInstance, modal) {
        this.modal = modal;
        this.dialogInstance = dialogInstance;
        if (!dialogInstance.inElement) {
            this.position = null;
        }
        else {
            this.position = 'absolute';
        }
    }
    BootstrapModalContainer.prototype.onContainerClick = function ($event) {
        $event.stopPropagation();
    };
    BootstrapModalContainer.prototype.onClick = function () {
        return !this.dialogInstance.config.isBlocking && this.dialogInstance.dismiss();
    };
    BootstrapModalContainer.prototype.documentKeypress = function (event) {
        // check that this modal is the last in the stack.
        if (this.modal.stackPosition(this.dialogInstance) !== this.modal.stackLength - 1)
            return;
        if (this.dialogInstance.config.supportsKey(event.keyCode)) {
            this.dialogInstance.dismiss();
        }
    };
    BootstrapModalContainer = __decorate([
        core_1.Component({
            selector: 'bootstrap-modal',
            providers: [Modal_1.Modal],
            host: {
                'tabindex': '0',
                'role': 'dialog',
                'class': 'in modal',
                'style': 'display: block',
                '[style.position]': 'position',
                '(body:keydown)': 'documentKeypress($event)',
                '(click)': 'onClick()'
            },
            /* tslint:disable */
            template: "<div [ngClass]=\"dialogInstance.config.dialogClass\"\n          [class.modal-lg]=\"dialogInstance.config.size == 'lg'\"\n          [class.modal-sm]=\"dialogInstance.config.size == 'sm'\">\n         <div class=\"modal-content\" (click)=\"onContainerClick($event)\" style=\"display: block\">\n            <div style=\"display: none\" #modalDialog></div>\n         </div>\n    </div>"
        }), 
        __metadata('design:paramtypes', [ModalDialogInstance_1.ModalDialogInstance, Modal_1.Modal])
    ], BootstrapModalContainer);
    return BootstrapModalContainer;
}());
exports.BootstrapModalContainer = BootstrapModalContainer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwTW9kYWxDb250YWluZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9hbmd1bGFyMi1tb2RhbC9jb21wb25lbnRzL2Jvb3RzdHJhcE1vZGFsQ29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsb0NBQWtDLCtCQUErQixDQUFDLENBQUE7QUFDbEUsc0JBQW9CLG9CQUFvQixDQUFDLENBQUE7QUFFekM7O0dBRUc7QUEyQkg7SUFJSSxpQ0FBWSxjQUFtQyxFQUFVLEtBQVk7UUFBWixVQUFLLEdBQUwsS0FBSyxDQUFPO1FBQ2pFLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3JDLEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDekIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDL0IsQ0FBQztJQUNMLENBQUM7SUFFRCxrREFBZ0IsR0FBaEIsVUFBaUIsTUFBVztRQUN4QixNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELHlDQUFPLEdBQVA7UUFDSSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuRixDQUFDO0lBRUQsa0RBQWdCLEdBQWhCLFVBQWlCLEtBQW9CO1FBQ2pDLGtEQUFrRDtRQUNsRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1lBQUMsTUFBTSxDQUFDO1FBRXpGLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hELElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbEMsQ0FBQztJQUNMLENBQUM7SUF0REw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixTQUFTLEVBQUUsQ0FBQyxhQUFLLENBQUM7WUFDbEIsSUFBSSxFQUFFO2dCQUNGLFVBQVUsRUFBRSxHQUFHO2dCQUNmLE1BQU0sRUFBRSxRQUFRO2dCQUNoQixPQUFPLEVBQUUsVUFBVTtnQkFDbkIsT0FBTyxFQUFFLGdCQUFnQjtnQkFDekIsa0JBQWtCLEVBQUUsVUFBVTtnQkFDOUIsZ0JBQWdCLEVBQUUsMEJBQTBCO2dCQUM1QyxTQUFTLEVBQUUsV0FBVzthQUN6QjtZQUNELG9CQUFvQjtZQUNwQixRQUFRLEVBQ1IsOFhBTU87U0FLVixDQUFDOzsrQkFBQTtJQThCRiw4QkFBQztBQUFELENBQUMsQUE3QkQsSUE2QkM7QUE3QlksK0JBQXVCLDBCQTZCbkMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtNb2RhbERpYWxvZ0luc3RhbmNlfSBmcm9tICcuLi9tb2RlbHMvTW9kYWxEaWFsb2dJbnN0YW5jZSc7XG5pbXBvcnQge01vZGFsfSBmcm9tICcuLi9wcm92aWRlcnMvTW9kYWwnO1xuXG4vKipcbiAqIEEgY29tcG9uZW50IHRoYXQgYWN0cyBhcyBhIHRvcCBsZXZlbCBjb250YWluZXIgZm9yIGFuIG9wZW4gbW9kYWwgd2luZG93LlxuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2Jvb3RzdHJhcC1tb2RhbCcsXG4gICAgcHJvdmlkZXJzOiBbTW9kYWxdLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ3RhYmluZGV4JzogJzAnLFxuICAgICAgICAncm9sZSc6ICdkaWFsb2cnLFxuICAgICAgICAnY2xhc3MnOiAnaW4gbW9kYWwnLFxuICAgICAgICAnc3R5bGUnOiAnZGlzcGxheTogYmxvY2snLFxuICAgICAgICAnW3N0eWxlLnBvc2l0aW9uXSc6ICdwb3NpdGlvbicsXG4gICAgICAgICcoYm9keTprZXlkb3duKSc6ICdkb2N1bWVudEtleXByZXNzKCRldmVudCknLFxuICAgICAgICAnKGNsaWNrKSc6ICdvbkNsaWNrKCknXG4gICAgfSxcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuICAgIHRlbXBsYXRlOlxuICAgIGA8ZGl2IFtuZ0NsYXNzXT1cImRpYWxvZ0luc3RhbmNlLmNvbmZpZy5kaWFsb2dDbGFzc1wiXG4gICAgICAgICAgW2NsYXNzLm1vZGFsLWxnXT1cImRpYWxvZ0luc3RhbmNlLmNvbmZpZy5zaXplID09IFxcJ2xnXFwnXCJcbiAgICAgICAgICBbY2xhc3MubW9kYWwtc21dPVwiZGlhbG9nSW5zdGFuY2UuY29uZmlnLnNpemUgPT0gXFwnc21cXCdcIj5cbiAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCIgKGNsaWNrKT1cIm9uQ29udGFpbmVyQ2xpY2soJGV2ZW50KVwiIHN0eWxlPVwiZGlzcGxheTogYmxvY2tcIj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBub25lXCIgI21vZGFsRGlhbG9nPjwvZGl2PlxuICAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+YFxuICAgIC8vVE9ETzogI21vZGFsRGlhbG9nIGVsZW1lbnQgaXMgbm90IG5lZWRlZCBidXQgZHluYW1pY0NvbXBvbmVudExvYWRlciBkb2Vzbid0IHNlZW0gdG8gaGF2ZSBiZWhhdmlvciB0byBpbmplY3QgYSBjb21wb25lbnQgdGhlIHdheSB3ZSB3YW50LlxuICAgIC8vICAgICAgV2UgbmVlZCB0byByZXBsYWNlIHRoZSAjbW9kYWxEaWFsb2cgZWxlbWVudCBidXQgdGhlIGN1cnJlbnQgaW1wbGVtZW50YXRpb24gb25seSBhZGRzIGl0IGFzIGEgc2libGluZy5cbiAgICAvLyAgICAgIHNlZSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy82MDcxXG4gICAgLyogdHNsaW50OmVuYWJsZSAqL1xufSlcbmV4cG9ydCBjbGFzcyBCb290c3RyYXBNb2RhbENvbnRhaW5lciB7XG4gICAgZGlhbG9nSW5zdGFuY2U6IE1vZGFsRGlhbG9nSW5zdGFuY2U7XG4gICAgcHVibGljIHBvc2l0aW9uOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkaWFsb2dJbnN0YW5jZTogTW9kYWxEaWFsb2dJbnN0YW5jZSwgcHJpdmF0ZSBtb2RhbDogTW9kYWwpIHtcbiAgICAgICAgdGhpcy5kaWFsb2dJbnN0YW5jZSA9IGRpYWxvZ0luc3RhbmNlO1xuICAgICAgICBpZiAoIWRpYWxvZ0luc3RhbmNlLmluRWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ29udGFpbmVyQ2xpY2soJGV2ZW50OiBhbnkpIHtcbiAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIG9uQ2xpY2soKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5kaWFsb2dJbnN0YW5jZS5jb25maWcuaXNCbG9ja2luZyAmJiB0aGlzLmRpYWxvZ0luc3RhbmNlLmRpc21pc3MoKTtcbiAgICB9XG5cbiAgICBkb2N1bWVudEtleXByZXNzKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIC8vIGNoZWNrIHRoYXQgdGhpcyBtb2RhbCBpcyB0aGUgbGFzdCBpbiB0aGUgc3RhY2suXG4gICAgICAgIGlmICh0aGlzLm1vZGFsLnN0YWNrUG9zaXRpb24odGhpcy5kaWFsb2dJbnN0YW5jZSkgIT09IHRoaXMubW9kYWwuc3RhY2tMZW5ndGggLSAxKSByZXR1cm47XG5cbiAgICAgICAgaWYgKHRoaXMuZGlhbG9nSW5zdGFuY2UuY29uZmlnLnN1cHBvcnRzS2V5KGV2ZW50LmtleUNvZGUpKSB7XG4gICAgICAgICAgICB0aGlzLmRpYWxvZ0luc3RhbmNlLmRpc21pc3MoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==