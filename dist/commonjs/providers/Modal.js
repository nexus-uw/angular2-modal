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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('angular2/core');
var ModalInstanceStack_1 = require('../framework/ModalInstanceStack');
var ModalConfig_1 = require('../models/ModalConfig');
var ModalDialogInstance_1 = require('../models/ModalDialogInstance');
var modalBackdrop_1 = require('../components/modalBackdrop');
var bootstrapModalContainer_1 = require('../components/bootstrapModalContainer');
var presets_1 = require('../presets');
var _stack = new ModalInstanceStack_1.ModalInstanceStack();
var Modal = (function () {
    function Modal(componentLoader, appRef, defaultConfig) {
        // The Modal class should be an application wide service (i.e: singleton).
        // This will run once in most applications...
        // If the user provides a ModalConfig instance to the DI,
        // the custom config will be the default one.
        this.componentLoader = componentLoader;
        this.appRef = appRef;
        Object.defineProperty(this, 'config', {
            configurable: false,
            enumerable: true,
            value: (defaultConfig) ? ModalConfig_1.ModalConfig.makeValid(defaultConfig) : new ModalConfig_1.ModalConfig(),
            writable: false
        });
    }
    Modal.prototype.alert = function () {
        return new presets_1.OneButtonPreset(this, { isBlocking: false });
    };
    Modal.prototype.prompt = function () {
        return new presets_1.OneButtonPreset(this, { isBlocking: true, keyboard: null });
    };
    Modal.prototype.confirm = function () {
        return new presets_1.TwoButtonPreset(this, { isBlocking: true, keyboard: null });
    };
    /**
     * Opens a modal window blocking the whole screen.
     * @param componentType The angular Component to render as modal.
     * @param bindings Resolved providers that will inject into the component provided.
     * @param config A Modal Configuration object.
     * @returns {Promise<ModalDialogInstance>}
     */
    Modal.prototype.open = function (componentType, bindings, config) {
        // TODO: appRef.injector.get(APP_COMPONENT) Doesn't work.
        // When it does replace with the hack below.
        //let myElementRef = this.appRef.injector.get(APP_COMPONENT).location;
        var elementRef = this.appRef._rootComponents[0].location;
        return this.openInside(componentType, elementRef, null, bindings, config);
    };
    /**
     * Opens a modal window inside an existing component.
     * @param componentType The angular Component to render as modal.
     * @param elementRef The element to block using the modal.
     * @param anchorName A template variable within the component.
     * @param bindings Resolved providers that will inject into the component provided.
     * @param config A Modal Configuration object.
     * @returns {Promise<ModalDialogInstance>}
     */
    Modal.prototype.openInside = function (componentType, elementRef, anchorName, bindings, config) {
        var _this = this;
        config = (config) ? ModalConfig_1.ModalConfig.makeValid(config, this.config) : this.config;
        var dialog = new ModalDialogInstance_1.ModalDialogInstance(config);
        dialog.inElement = !!anchorName;
        var dialogBindings = core_1.Injector.resolve([core_1.provide(ModalDialogInstance_1.ModalDialogInstance, { useValue: dialog })]);
        return this.createBackdrop(elementRef, dialogBindings, anchorName)
            .then(function (backdropRef) {
            dialog.backdropRef = backdropRef;
            var modalDataBindings = core_1.Injector.resolve([core_1.provide(ModalDialogInstance_1.ModalDialogInstance, { useValue: dialog })]).concat(bindings);
            return _this.componentLoader.loadIntoLocation(bootstrapModalContainer_1.BootstrapModalContainer, backdropRef.location, 'modalBackdrop', dialogBindings)
                .then(function (bootstrapRef) {
                dialog.bootstrapRef = bootstrapRef;
                return _this.componentLoader.loadIntoLocation(componentType, bootstrapRef.location, 'modalDialog', modalDataBindings)
                    .then(function (contentRef) {
                    dialog.contentRef = contentRef;
                    _stack.pushManaged(dialog);
                    return dialog;
                });
            });
        });
    };
    Modal.prototype.stackPosition = function (mInstande) {
        return _stack.indexOf(mInstande);
    };
    Object.defineProperty(Modal.prototype, "stackLength", {
        get: function () {
            return _stack.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates backdrop element.
     * @param {ElementRef} The element to block using the modal.
     * @param {ResolvedProvider[]} Resolved providers,
     *     must contain the ModalDialogInstance instance for this backdrop.
     * @param {string} An anchor name, optional.
     *     if not supplied backdrop gets applied next to elementRef, otherwise into it.
     * @returns {Promise<ComponentRef>}
     */
    Modal.prototype.createBackdrop = function (elementRef, bindings, anchorName) {
        return (!anchorName) ?
            this.componentLoader.loadNextToLocation(modalBackdrop_1.ModalBackdrop, elementRef, bindings) :
            this.componentLoader.loadIntoLocation(modalBackdrop_1.ModalBackdrop, elementRef, anchorName, bindings);
    };
    Modal = __decorate([
        core_1.Injectable(),
        __param(2, core_1.Optional()), 
        __metadata('design:paramtypes', [core_1.DynamicComponentLoader, core_1.ApplicationRef, ModalConfig_1.ModalConfig])
    ], Modal);
    return Modal;
}());
exports.Modal = Modal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9hbmd1bGFyMi1tb2RhbC9wcm92aWRlcnMvTW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHFCQVVPLGVBQWUsQ0FBQyxDQUFBO0FBRXZCLG1DQUFpQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQ25FLDRCQUEwQix1QkFBdUIsQ0FBQyxDQUFBO0FBQ2xELG9DQUFrQywrQkFBK0IsQ0FBQyxDQUFBO0FBQ2xFLDhCQUE0Qiw2QkFBNkIsQ0FBQyxDQUFBO0FBQzFELHdDQUFzQyx1Q0FBdUMsQ0FBQyxDQUFBO0FBQzlFLHdCQUErQyxZQUFZLENBQUMsQ0FBQTtBQUU1RCxJQUFNLE1BQU0sR0FBRyxJQUFJLHVDQUFrQixFQUFFLENBQUM7QUFJeEM7SUFHSSxlQUFvQixlQUF1QyxFQUFVLE1BQXNCLEVBQ25FLGFBQTBCO1FBQzlDLDBFQUEwRTtRQUMxRSw2Q0FBNkM7UUFDN0MseURBQXlEO1FBQ3pELDZDQUE2QztRQUw3QixvQkFBZSxHQUFmLGVBQWUsQ0FBd0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQU92RixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQU87WUFDdkMsWUFBWSxFQUFFLEtBQUs7WUFDbkIsVUFBVSxFQUFFLElBQUk7WUFDaEIsS0FBSyxFQUFFLENBQUMsYUFBYSxDQUFDLEdBQUcseUJBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEdBQUcsSUFBSSx5QkFBVyxFQUFFO1lBQ2pGLFFBQVEsRUFBRSxLQUFLO1NBQ2xCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxxQkFBSyxHQUFMO1FBQ0ksTUFBTSxDQUFDLElBQUkseUJBQWUsQ0FBQyxJQUFJLEVBQU8sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsc0JBQU0sR0FBTjtRQUNJ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QUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7SUFFRDs7Ozs7Ozs7T0FRRztJQUNLLDhCQUFjLEdBQXRCLFVBQXVCLFVBQXNCLEVBQUUsUUFBNEIsRUFDcEQsVUFBbUI7UUFDdEMsTUFBTSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7WUFDaEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyw2QkFBYSxFQUFFLFVBQVUsRUFBRSxRQUFRLENBQUM7WUFDNUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyw2QkFBYSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDL0YsQ0FBQztJQS9HTDtRQUFDLGlCQUFVLEVBQUU7bUJBS0ksZUFBUSxFQUFFOzthQUxkO0lBZ0hiLFlBQUM7QUFBRCxDQUFDLEFBL0dELElBK0dDO0FBL0dZLGFBQUssUUErR2pCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEluamVjdGFibGUsXG4gICAgRHluYW1pY0NvbXBvbmVudExvYWRlcixcbiAgICBDb21wb25lbnRSZWYsXG4gICAgRWxlbWVudFJlZixcbiAgICBJbmplY3RvcixcbiAgICBwcm92aWRlLFxuICAgIFJlc29sdmVkUHJvdmlkZXIsXG4gICAgT3B0aW9uYWwsXG4gICAgQXBwbGljYXRpb25SZWZcbn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbmltcG9ydCB7TW9kYWxJbnN0YW5jZVN0YWNrfSBmcm9tICcuLi9mcmFtZXdvcmsvTW9kYWxJbnN0YW5jZVN0YWNrJztcbmltcG9ydCB7TW9kYWxDb25maWd9IGZyb20gJy4uL21vZGVscy9Nb2RhbENvbmZpZyc7XG5pbXBvcnQge01vZGFsRGlhbG9nSW5zdGFuY2V9IGZyb20gJy4uL21vZGVscy9Nb2RhbERpYWxvZ0luc3RhbmNlJztcbmltcG9ydCB7TW9kYWxCYWNrZHJvcH0gZnJvbSAnLi4vY29tcG9uZW50cy9tb2RhbEJhY2tkcm9wJztcbmltcG9ydCB7Qm9vdHN0cmFwTW9kYWxDb250YWluZXJ9IGZyb20gJy4uL2NvbXBvbmVudHMvYm9vdHN0cmFwTW9kYWxDb250YWluZXInO1xuaW1wb3J0IHtPbmVCdXR0b25QcmVzZXQsIFR3b0J1dHRvblByZXNldH0gZnJvbSAnLi4vcHJlc2V0cyc7XG5cbmNvbnN0IF9zdGFjayA9IG5ldyBNb2RhbEluc3RhbmNlU3RhY2soKTtcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTW9kYWwge1xuICAgIHByaXZhdGUgY29uZmlnOiBNb2RhbENvbmZpZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcG9uZW50TG9hZGVyOiBEeW5hbWljQ29tcG9uZW50TG9hZGVyLCBwcml2YXRlIGFwcFJlZjogQXBwbGljYXRpb25SZWYsXG4gICAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgZGVmYXVsdENvbmZpZzogTW9kYWxDb25maWcpIHtcbiAgICAgICAgLy8gVGhlIE1vZGFsIGNsYXNzIHNob3VsZCBiZSBhbiBhcHBsaWNhdGlvbiB3aWRlIHNlcnZpY2UgKGkuZTogc2luZ2xldG9uKS5cbiAgICAgICAgLy8gVGhpcyB3aWxsIHJ1biBvbmNlIGluIG1vc3QgYXBwbGljYXRpb25zLi4uXG4gICAgICAgIC8vIElmIHRoZSB1c2VyIHByb3ZpZGVzIGEgTW9kYWxDb25maWcgaW5zdGFuY2UgdG8gdGhlIERJLFxuICAgICAgICAvLyB0aGUgY3VzdG9tIGNvbmZpZyB3aWxsIGJlIHRoZSBkZWZhdWx0IG9uZS5cblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2NvbmZpZycsIDxhbnk+e1xuICAgICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogKGRlZmF1bHRDb25maWcpID8gTW9kYWxDb25maWcubWFrZVZhbGlkKGRlZmF1bHRDb25maWcpIDogbmV3IE1vZGFsQ29uZmlnKCksXG4gICAgICAgICAgICB3cml0YWJsZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWxlcnQoKTogT25lQnV0dG9uUHJlc2V0IHtcbiAgICAgICAgcmV0dXJuIG5ldyBPbmVCdXR0b25QcmVzZXQodGhpcywgPGFueT57IGlzQmxvY2tpbmc6IGZhbHNlIH0pO1xuICAgIH1cblxuICAgIHByb21wdCgpOiBPbmVCdXR0b25QcmVzZXQge1xuICAgICAgICByZXR1cm4gbmV3IE9uZUJ1dHRvblByZXNldCh0aGlzLCA8YW55PnsgaXNCbG9ja2luZzogdHJ1ZSwga2V5Ym9hcmQ6IG51bGwgfSk7XG4gICAgfVxuXG4gICAgY29uZmlybSgpOiBUd29CdXR0b25QcmVzZXQge1xuICAgICAgICByZXR1cm4gbmV3IFR3b0J1dHRvblByZXNldCh0aGlzLCA8YW55PnsgaXNCbG9ja2luZzogdHJ1ZSwga2V5Ym9hcmQ6IG51bGwgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3BlbnMgYSBtb2RhbCB3aW5kb3cgYmxvY2tpbmcgdGhlIHdob2xlIHNjcmVlbi5cbiAgICAgKiBAcGFyYW0gY29tcG9uZW50VHlwZSBUaGUgYW5ndWxhciBDb21wb25lbnQgdG8gcmVuZGVyIGFzIG1vZGFsLlxuICAgICAqIEBwYXJhbSBiaW5kaW5ncyBSZXNvbHZlZCBwcm92aWRlcnMgdGhhdCB3aWxsIGluamVjdCBpbnRvIHRoZSBjb21wb25lbnQgcHJvdmlkZWQuXG4gICAgICogQHBhcmFtIGNvbmZpZyBBIE1vZGFsIENvbmZpZ3VyYXRpb24gb2JqZWN0LlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPE1vZGFsRGlhbG9nSW5zdGFuY2U+fVxuICAgICAqL1xuICAgIHB1YmxpYyBvcGVuKGNvbXBvbmVudFR5cGU6IEZ1bmN0aW9uQ29uc3RydWN0b3IsIGJpbmRpbmdzOiBSZXNvbHZlZFByb3ZpZGVyW10sXG4gICAgICAgICAgICAgICAgY29uZmlnPzogTW9kYWxDb25maWcpOiBQcm9taXNlPE1vZGFsRGlhbG9nSW5zdGFuY2U+IHtcbiAgICAgICAgLy8gVE9ETzogYXBwUmVmLmluamVjdG9yLmdldChBUFBfQ09NUE9ORU5UKSBEb2Vzbid0IHdvcmsuXG4gICAgICAgIC8vIFdoZW4gaXQgZG9lcyByZXBsYWNlIHdpdGggdGhlIGhhY2sgYmVsb3cuXG4gICAgICAgIC8vbGV0IG15RWxlbWVudFJlZiA9IHRoaXMuYXBwUmVmLmluamVjdG9yLmdldChBUFBfQ09NUE9ORU5UKS5sb2NhdGlvbjtcbiAgICAgICAgbGV0IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYgPSAoPGFueT50aGlzLmFwcFJlZikuX3Jvb3RDb21wb25lbnRzWzBdLmxvY2F0aW9uO1xuXG4gICAgICAgIHJldHVybiB0aGlzLm9wZW5JbnNpZGUoY29tcG9uZW50VHlwZSwgZWxlbWVudFJlZiwgbnVsbCwgYmluZGluZ3MsIGNvbmZpZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3BlbnMgYSBtb2RhbCB3aW5kb3cgaW5zaWRlIGFuIGV4aXN0aW5nIGNvbXBvbmVudC5cbiAgICAgKiBAcGFyYW0gY29tcG9uZW50VHlwZSBUaGUgYW5ndWxhciBDb21wb25lbnQgdG8gcmVuZGVyIGFzIG1vZGFsLlxuICAgICAqIEBwYXJhbSBlbGVtZW50UmVmIFRoZSBlbGVtZW50IHRvIGJsb2NrIHVzaW5nIHRoZSBtb2RhbC5cbiAgICAgKiBAcGFyYW0gYW5jaG9yTmFtZSBBIHRlbXBsYXRlIHZhcmlhYmxlIHdpdGhpbiB0aGUgY29tcG9uZW50LlxuICAgICAqIEBwYXJhbSBiaW5kaW5ncyBSZXNvbHZlZCBwcm92aWRlcnMgdGhhdCB3aWxsIGluamVjdCBpbnRvIHRoZSBjb21wb25lbnQgcHJvdmlkZWQuXG4gICAgICogQHBhcmFtIGNvbmZpZyBBIE1vZGFsIENvbmZpZ3VyYXRpb24gb2JqZWN0LlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPE1vZGFsRGlhbG9nSW5zdGFuY2U+fVxuICAgICAqL1xuICAgIHB1YmxpYyBvcGVuSW5zaWRlKGNvbXBvbmVudFR5cGU6IEZ1bmN0aW9uQ29uc3RydWN0b3IsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgICAgICAgICAgYW5jaG9yTmFtZTogc3RyaW5nLCBiaW5kaW5nczogUmVzb2x2ZWRQcm92aWRlcltdLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZz86IE1vZGFsQ29uZmlnKTogUHJvbWlzZTxNb2RhbERpYWxvZ0luc3RhbmNlPiB7XG5cbiAgICAgICAgY29uZmlnID0gKGNvbmZpZykgPyBNb2RhbENvbmZpZy5tYWtlVmFsaWQoY29uZmlnLCB0aGlzLmNvbmZpZykgOiB0aGlzLmNvbmZpZztcblxuICAgICAgICBsZXQgZGlhbG9nID0gbmV3IE1vZGFsRGlhbG9nSW5zdGFuY2UoY29uZmlnKTtcbiAgICAgICAgZGlhbG9nLmluRWxlbWVudCA9ICEhYW5jaG9yTmFtZTtcblxuICAgICAgICBsZXQgZGlhbG9nQmluZGluZ3MgPSBJbmplY3Rvci5yZXNvbHZlKFsgcHJvdmlkZShNb2RhbERpYWxvZ0luc3RhbmNlLCB7dXNlVmFsdWU6IGRpYWxvZ30pIF0pO1xuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVCYWNrZHJvcChlbGVtZW50UmVmLCBkaWFsb2dCaW5kaW5ncywgYW5jaG9yTmFtZSlcbiAgICAgICAgICAgIC50aGVuKCAoYmFja2Ryb3BSZWY6IENvbXBvbmVudFJlZikgPT4ge1xuICAgICAgICAgICAgICAgIGRpYWxvZy5iYWNrZHJvcFJlZiA9IGJhY2tkcm9wUmVmO1xuXG4gICAgICAgICAgICAgICAgbGV0IG1vZGFsRGF0YUJpbmRpbmdzID0gSW5qZWN0b3IucmVzb2x2ZShcbiAgICAgICAgICAgICAgICAgICAgW3Byb3ZpZGUoTW9kYWxEaWFsb2dJbnN0YW5jZSwge3VzZVZhbHVlOiBkaWFsb2d9KV0pLmNvbmNhdChiaW5kaW5ncyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50TG9hZGVyLmxvYWRJbnRvTG9jYXRpb24oXG4gICAgICAgICAgICAgICAgICAgIEJvb3RzdHJhcE1vZGFsQ29udGFpbmVyLCBiYWNrZHJvcFJlZi5sb2NhdGlvbiwgJ21vZGFsQmFja2Ryb3AnLCBkaWFsb2dCaW5kaW5ncylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oYm9vdHN0cmFwUmVmID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZy5ib290c3RyYXBSZWYgPSBib290c3RyYXBSZWY7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRMb2FkZXIubG9hZEludG9Mb2NhdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRUeXBlLCBib290c3RyYXBSZWYubG9jYXRpb24sICdtb2RhbERpYWxvZycsIG1vZGFsRGF0YUJpbmRpbmdzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGNvbnRlbnRSZWYgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2cuY29udGVudFJlZiA9IGNvbnRlbnRSZWY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zdGFjay5wdXNoTWFuYWdlZChkaWFsb2cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlhbG9nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhY2tQb3NpdGlvbihtSW5zdGFuZGU6IE1vZGFsRGlhbG9nSW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIF9zdGFjay5pbmRleE9mKG1JbnN0YW5kZSk7XG4gICAgfVxuXG4gICAgZ2V0IHN0YWNrTGVuZ3RoKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBfc3RhY2subGVuZ3RoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYmFja2Ryb3AgZWxlbWVudC5cbiAgICAgKiBAcGFyYW0ge0VsZW1lbnRSZWZ9IFRoZSBlbGVtZW50IHRvIGJsb2NrIHVzaW5nIHRoZSBtb2RhbC5cbiAgICAgKiBAcGFyYW0ge1Jlc29sdmVkUHJvdmlkZXJbXX0gUmVzb2x2ZWQgcHJvdmlkZXJzLFxuICAgICAqICAgICBtdXN0IGNvbnRhaW4gdGhlIE1vZGFsRGlhbG9nSW5zdGFuY2UgaW5zdGFuY2UgZm9yIHRoaXMgYmFja2Ryb3AuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IEFuIGFuY2hvciBuYW1lLCBvcHRpb25hbC5cbiAgICAgKiAgICAgaWYgbm90IHN1cHBsaWVkIGJhY2tkcm9wIGdldHMgYXBwbGllZCBuZXh0IHRvIGVsZW1lbnRSZWYsIG90aGVyd2lzZSBpbnRvIGl0LlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENvbXBvbmVudFJlZj59XG4gICAgICovXG4gICAgcHJpdmF0ZSBjcmVhdGVCYWNrZHJvcChlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBiaW5kaW5nczogUmVzb2x2ZWRQcm92aWRlcltdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5jaG9yTmFtZT86IHN0cmluZykgOiBQcm9taXNlPENvbXBvbmVudFJlZj4ge1xuICAgICAgICByZXR1cm4gKCFhbmNob3JOYW1lKSA/XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudExvYWRlci5sb2FkTmV4dFRvTG9jYXRpb24oTW9kYWxCYWNrZHJvcCwgZWxlbWVudFJlZiwgYmluZGluZ3MpIDpcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50TG9hZGVyLmxvYWRJbnRvTG9jYXRpb24oTW9kYWxCYWNrZHJvcCwgZWxlbWVudFJlZiwgYW5jaG9yTmFtZSwgYmluZGluZ3MpO1xuICAgIH1cbn1cbiJdfQ==