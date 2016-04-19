"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('angular2/core');
var MessageModal_1 = require('../modals/MessageModal');
var MessageModalPreset_1 = require('./base/MessageModalPreset');
var Utils_1 = require('../framework/Utils');
function createBindings(config) {
    config.buttons = [
        {
            cssClass: config.okBtnClass,
            caption: config.okBtn,
            onClick: function (modalComponent, $event) {
                return modalComponent.dialog.close(true);
            }
        }
    ];
    return core_1.Injector.resolve([
        core_1.provide(MessageModal_1.MessageModalContext, { useValue: config })
    ]);
}
/**
 * A Preset for a classic 1 button modal window.
 */
var OneButtonPreset = (function (_super) {
    __extends(OneButtonPreset, _super);
    function OneButtonPreset(modal, defaultValues) {
        if (defaultValues === void 0) { defaultValues = undefined; }
        _super.call(this, Utils_1.extend({
            modal: modal,
            bindings: createBindings,
            okBtn: 'OK',
            okBtnClass: 'btn btn-primary'
        }, defaultValues || {}), [
            'okBtn',
            'okBtnClass'
        ]);
    }
    return OneButtonPreset;
}(MessageModalPreset_1.MessageModalPreset));
exports.OneButtonPreset = OneButtonPreset;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT25lQnV0dG9uUHJlc2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvYW5ndWxhcjItbW9kYWwvcHJlc2V0cy9PbmVCdXR0b25QcmVzZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEscUJBQW1ELGVBQWUsQ0FBQyxDQUFBO0FBR25FLDZCQUFnRCx3QkFBd0IsQ0FBQyxDQUFBO0FBQ3pFLG1DQUF5RCwyQkFBMkIsQ0FBQyxDQUFBO0FBQ3JGLHNCQUFxQixvQkFBb0IsQ0FBQyxDQUFBO0FBRzFDLHdCQUF3QixNQUEyQjtJQUMvQyxNQUFNLENBQUMsT0FBTyxHQUFHO1FBQ2I7WUFDSSxRQUFRLEVBQUUsTUFBTSxDQUFDLFVBQVU7WUFDM0IsT0FBTyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ3JCLE9BQU8sRUFBRSxVQUFDLGNBQTRCLEVBQUUsTUFBbUI7Z0JBQ3ZELE9BQUEsY0FBYyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQWpDLENBQWlDO1NBQ3hDO0tBQ0osQ0FBQztJQUVGLE1BQU0sQ0FBQyxlQUFRLENBQUMsT0FBTyxDQUFDO1FBQ3BCLGNBQU8sQ0FBQyxrQ0FBbUIsRUFBRSxFQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUMsQ0FBQztLQUNuRCxDQUFDLENBQUM7QUFDUCxDQUFDO0FBZ0JEOztHQUVHO0FBQ0g7SUFBcUMsbUNBQXVDO0lBQ3hFLHlCQUFZLEtBQVksRUFBRSxhQUE4QztRQUE5Qyw2QkFBOEMsR0FBOUMseUJBQThDO1FBQ3BFLGtCQUFNLGNBQU0sQ0FBTztZQUNmLEtBQUssRUFBRSxLQUFLO1lBQ1osUUFBUSxFQUFFLGNBQWM7WUFDeEIsS0FBSyxFQUFFLElBQUk7WUFDWCxVQUFVLEVBQUUsaUJBQWlCO1NBQ2hDLEVBQUUsYUFBYSxJQUFJLEVBQUUsQ0FBQyxFQUFFO1lBQ3JCLE9BQU87WUFDUCxZQUFZO1NBQ2YsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUlMLHNCQUFDO0FBQUQsQ0FBQyxBQWZELENBQXFDLHVDQUFrQixHQWV0RDtBQWZZLHVCQUFlLGtCQWUzQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0b3IsIHByb3ZpZGUgLCBSZXNvbHZlZEJpbmRpbmd9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtGbHVlbnRBc3NpZ25NZXRob2R9IGZyb20gJy4uL2ZyYW1ld29yay9GbHVlbnRBc3NpZ24nO1xuaW1wb3J0IHtNb2RhbH0gZnJvbSAnLi4vcHJvdmlkZXJzL01vZGFsJztcbmltcG9ydCB7TWVzc2FnZU1vZGFsQ29udGV4dCwgTWVzc2FnZU1vZGFsfSBmcm9tICcuLi9tb2RhbHMvTWVzc2FnZU1vZGFsJztcbmltcG9ydCB7TWVzc2FnZU1vZGFsUHJlc2V0LCBNZXNzYWdlTW9kYWxQcmVzZXREYXRhfSBmcm9tICcuL2Jhc2UvTWVzc2FnZU1vZGFsUHJlc2V0JztcbmltcG9ydCB7ZXh0ZW5kfSBmcm9tICcuLi9mcmFtZXdvcmsvVXRpbHMnO1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZUJpbmRpbmdzKGNvbmZpZzogT25lQnV0dG9uUHJlc2V0RGF0YSk6IFJlc29sdmVkQmluZGluZ1tdIHtcbiAgICBjb25maWcuYnV0dG9ucyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgY3NzQ2xhc3M6IGNvbmZpZy5va0J0bkNsYXNzLFxuICAgICAgICAgICAgY2FwdGlvbjogY29uZmlnLm9rQnRuLFxuICAgICAgICAgICAgb25DbGljazogKG1vZGFsQ29tcG9uZW50OiBNZXNzYWdlTW9kYWwsICRldmVudD86IE1vdXNlRXZlbnQpID0+XG4gICAgICAgICAgICAgICAgbW9kYWxDb21wb25lbnQuZGlhbG9nLmNsb3NlKHRydWUpXG4gICAgICAgIH1cbiAgICBdO1xuXG4gICAgcmV0dXJuIEluamVjdG9yLnJlc29sdmUoW1xuICAgICAgICBwcm92aWRlKE1lc3NhZ2VNb2RhbENvbnRleHQsIHt1c2VWYWx1ZTogY29uZmlnfSlcbiAgICBdKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPbmVCdXR0b25QcmVzZXREYXRhIGV4dGVuZHMgTWVzc2FnZU1vZGFsUHJlc2V0RGF0YSB7XG4gICAgLyoqIFxuICAgICAqIENhcHRpb24gZm9yIHRoZSBPSyBidXR0b24uXG4gICAgICogRGVmYXVsdDogT0tcbiAgICAgKi9cbiAgICBva0J0bjogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQSBDbGFzcyBmb3IgdGhlIE9LIGJ1dHRvbi5cbiAgICAgKiBEZWZhdWx0OiBidG4gYnRuLXByaW1hcnlcbiAgICAgKi9cbiAgICBva0J0bkNsYXNzOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQSBQcmVzZXQgZm9yIGEgY2xhc3NpYyAxIGJ1dHRvbiBtb2RhbCB3aW5kb3cuXG4gKi9cbmV4cG9ydCBjbGFzcyBPbmVCdXR0b25QcmVzZXQgZXh0ZW5kcyBNZXNzYWdlTW9kYWxQcmVzZXQ8T25lQnV0dG9uUHJlc2V0RGF0YT4ge1xuICAgIGNvbnN0cnVjdG9yKG1vZGFsOiBNb2RhbCwgZGVmYXVsdFZhbHVlczogT25lQnV0dG9uUHJlc2V0RGF0YSA9IHVuZGVmaW5lZCkge1xuICAgICAgICBzdXBlcihleHRlbmQ8YW55Pigge1xuICAgICAgICAgICAgbW9kYWw6IG1vZGFsLFxuICAgICAgICAgICAgYmluZGluZ3M6IGNyZWF0ZUJpbmRpbmdzLFxuICAgICAgICAgICAgb2tCdG46ICdPSycsXG4gICAgICAgICAgICBva0J0bkNsYXNzOiAnYnRuIGJ0bi1wcmltYXJ5J1xuICAgICAgICB9LCBkZWZhdWx0VmFsdWVzIHx8IHt9KSwgW1xuICAgICAgICAgICAgJ29rQnRuJyxcbiAgICAgICAgICAgICdva0J0bkNsYXNzJ1xuICAgICAgICBdKTtcbiAgICB9XG5cbiAgICBva0J0bjogRmx1ZW50QXNzaWduTWV0aG9kPHN0cmluZywgdGhpcz47XG4gICAgb2tCdG5DbGFzczogRmx1ZW50QXNzaWduTWV0aG9kPHN0cmluZywgdGhpcz47XG59XG5cbiJdfQ==