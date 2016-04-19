"use strict";
var async_1 = require('angular2/src/facade/async');
/**
 * API to an open modal window.
 */
var ModalDialogInstance = (function () {
    function ModalDialogInstance(config) {
        this.config = config;
        this._resultDefered = async_1.PromiseWrapper.completer();
    }
    Object.defineProperty(ModalDialogInstance.prototype, "backdropRef", {
        set: function (value) {
            this._backdropRef = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalDialogInstance.prototype, "bootstrapRef", {
        set: function (value) {
            this._bootstrapRef = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalDialogInstance.prototype, "result", {
        /**
         * A Promise that is resolved on a close event and rejected on a dismiss event.
         * @returns {Promise<T>|any|*|Promise<any>}
         */
        get: function () {
            return this._resultDefered.promise;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *  Close the modal with a return value, i.e: result.
     */
    ModalDialogInstance.prototype.close = function (result) {
        if (result === void 0) { result = null; }
        if (this.contentRef.instance.beforeClose &&
            this.contentRef.instance.beforeClose() === true)
            return;
        this.dispose();
        this._resultDefered.resolve(result);
    };
    /**
     *  Close the modal without a return value, i.e: cancelled.
     *  This call is automatically invoked when a user either:
     *  - Presses an exit keyboard key (if configured).
     *  - Clicks outside of the modal window (if configured).
     *  Usually, dismiss represent a Cancel button or a X button.
     */
    ModalDialogInstance.prototype.dismiss = function () {
        if (this.contentRef.instance.beforeDismiss &&
            this.contentRef.instance.beforeDismiss() === true)
            return;
        this.dispose();
        this._resultDefered.reject();
    };
    ModalDialogInstance.prototype.dispose = function () {
        this._bootstrapRef.dispose();
        this._backdropRef.dispose();
        this.contentRef.dispose();
    };
    return ModalDialogInstance;
}());
exports.ModalDialogInstance = ModalDialogInstance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kYWxEaWFsb2dJbnN0YW5jZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FuZ3VsYXIyLW1vZGFsL21vZGVscy9Nb2RhbERpYWxvZ0luc3RhbmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxzQkFBNkIsMkJBQTJCLENBQUMsQ0FBQTtBQUl6RDs7R0FFRztBQUNIO0lBV0ksNkJBQW1CLE1BQW1CO1FBQW5CLFdBQU0sR0FBTixNQUFNLENBQWE7UUFDbEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxzQkFBYyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JELENBQUM7SUFFRCxzQkFBSSw0Q0FBVzthQUFmLFVBQWdCLEtBQW1CO1lBQy9CLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzlCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksNkNBQVk7YUFBaEIsVUFBaUIsS0FBbUI7WUFDaEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDL0IsQ0FBQzs7O09BQUE7SUFNRCxzQkFBSSx1Q0FBTTtRQUpWOzs7V0FHRzthQUNIO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO1FBQ3ZDLENBQUM7OztPQUFBO0lBRUQ7O09BRUc7SUFDSCxtQ0FBSyxHQUFMLFVBQU0sTUFBa0I7UUFBbEIsc0JBQWtCLEdBQWxCLGFBQWtCO1FBQ3BCLEVBQUUsQ0FBQyxDQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFdBQVc7WUFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLEtBQUssSUFBSyxDQUFDO1lBQUMsTUFBTSxDQUFDO1FBQ2pFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxxQ0FBTyxHQUFQO1FBQ0ksRUFBRSxDQUFDLENBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsYUFBYTtZQUN2QyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsS0FBSyxJQUFLLENBQUM7WUFBQyxNQUFNLENBQUM7UUFDL0QsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRU8scUNBQU8sR0FBZjtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFDTCwwQkFBQztBQUFELENBQUMsQUEzREQsSUEyREM7QUEzRFksMkJBQW1CLHNCQTJEL0IsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudFJlZiB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtQcm9taXNlV3JhcHBlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9hc3luYyc7XG5cbmltcG9ydCB7TW9kYWxDb25maWd9IGZyb20gJy4uL21vZGVscy9Nb2RhbENvbmZpZyc7XG5cbi8qKlxuICogQVBJIHRvIGFuIG9wZW4gbW9kYWwgd2luZG93LlxuICovXG5leHBvcnQgY2xhc3MgTW9kYWxEaWFsb2dJbnN0YW5jZSB7XG4gICAgY29udGVudFJlZjogQ29tcG9uZW50UmVmO1xuICAgIC8qKlxuICAgICAqIFN0YXRlcyBpZiB0aGUgbW9kYWwgaXMgaW5zaWRlIGEgc3BlY2lmaWMgZWxlbWVudC5cbiAgICAgKi9cbiAgICBwdWJsaWMgaW5FbGVtZW50OiBib29sZWFuO1xuXG4gICAgcHJpdmF0ZSBfYm9vdHN0cmFwUmVmOiBDb21wb25lbnRSZWY7XG4gICAgcHJpdmF0ZSBfYmFja2Ryb3BSZWY6IENvbXBvbmVudFJlZjtcbiAgICBwcml2YXRlIF9yZXN1bHREZWZlcmVkOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY29uZmlnOiBNb2RhbENvbmZpZykge1xuICAgICAgICB0aGlzLl9yZXN1bHREZWZlcmVkID0gUHJvbWlzZVdyYXBwZXIuY29tcGxldGVyKCk7XG4gICAgfVxuXG4gICAgc2V0IGJhY2tkcm9wUmVmKHZhbHVlOiBDb21wb25lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5fYmFja2Ryb3BSZWYgPSB2YWx1ZTtcbiAgICB9XG4gICAgc2V0IGJvb3RzdHJhcFJlZih2YWx1ZTogQ29tcG9uZW50UmVmKSB7XG4gICAgICAgIHRoaXMuX2Jvb3RzdHJhcFJlZiA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgUHJvbWlzZSB0aGF0IGlzIHJlc29sdmVkIG9uIGEgY2xvc2UgZXZlbnQgYW5kIHJlamVjdGVkIG9uIGEgZGlzbWlzcyBldmVudC5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxUPnxhbnl8KnxQcm9taXNlPGFueT59XG4gICAgICovXG4gICAgZ2V0IHJlc3VsdCgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVzdWx0RGVmZXJlZC5wcm9taXNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqICBDbG9zZSB0aGUgbW9kYWwgd2l0aCBhIHJldHVybiB2YWx1ZSwgaS5lOiByZXN1bHQuXG4gICAgICovXG4gICAgY2xvc2UocmVzdWx0OiBhbnkgPSBudWxsKSB7XG4gICAgICAgIGlmICggdGhpcy5jb250ZW50UmVmLmluc3RhbmNlLmJlZm9yZUNsb3NlICYmXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50UmVmLmluc3RhbmNlLmJlZm9yZUNsb3NlKCkgPT09IHRydWUgKSByZXR1cm47XG4gICAgICAgIHRoaXMuZGlzcG9zZSgpO1xuICAgICAgICB0aGlzLl9yZXN1bHREZWZlcmVkLnJlc29sdmUocmVzdWx0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAgQ2xvc2UgdGhlIG1vZGFsIHdpdGhvdXQgYSByZXR1cm4gdmFsdWUsIGkuZTogY2FuY2VsbGVkLlxuICAgICAqICBUaGlzIGNhbGwgaXMgYXV0b21hdGljYWxseSBpbnZva2VkIHdoZW4gYSB1c2VyIGVpdGhlcjpcbiAgICAgKiAgLSBQcmVzc2VzIGFuIGV4aXQga2V5Ym9hcmQga2V5IChpZiBjb25maWd1cmVkKS5cbiAgICAgKiAgLSBDbGlja3Mgb3V0c2lkZSBvZiB0aGUgbW9kYWwgd2luZG93IChpZiBjb25maWd1cmVkKS5cbiAgICAgKiAgVXN1YWxseSwgZGlzbWlzcyByZXByZXNlbnQgYSBDYW5jZWwgYnV0dG9uIG9yIGEgWCBidXR0b24uXG4gICAgICovXG4gICAgZGlzbWlzcygpIHtcbiAgICAgICAgaWYgKCB0aGlzLmNvbnRlbnRSZWYuaW5zdGFuY2UuYmVmb3JlRGlzbWlzcyAmJlxuICAgICAgICAgICAgdGhpcy5jb250ZW50UmVmLmluc3RhbmNlLmJlZm9yZURpc21pc3MoKSA9PT0gdHJ1ZSApIHJldHVybjtcbiAgICAgICAgdGhpcy5kaXNwb3NlKCk7XG4gICAgICAgIHRoaXMuX3Jlc3VsdERlZmVyZWQucmVqZWN0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkaXNwb3NlKCkge1xuICAgICAgICB0aGlzLl9ib290c3RyYXBSZWYuZGlzcG9zZSgpO1xuICAgICAgICB0aGlzLl9iYWNrZHJvcFJlZi5kaXNwb3NlKCk7XG4gICAgICAgIHRoaXMuY29udGVudFJlZi5kaXNwb3NlKCk7XG4gICAgfVxufVxuIl19