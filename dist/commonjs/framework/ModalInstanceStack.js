"use strict";
var dom_adapter_1 = require('angular2/src/platform/dom/dom_adapter');
/**
 * A dumb stack implementation over an array.
 */
var ModalInstanceStack = (function () {
    function ModalInstanceStack() {
        this._stack = [];
    }
    ModalInstanceStack.prototype.push = function (mInstance) {
        var idx = this._stack.indexOf(mInstance);
        if (idx === -1)
            this._stack.push(mInstance);
        /* TODO: this is wrong for several reasons:
         1) This is a direct DOM access we need to find another way or to separate it.
         2) It not the place for it.
         3) It doesn't care if its a modal inside an element or a wide open one.
         If its inside an element we need to add the 'modal-open' to that element.
         If its wide open we add to the body, we need to traverse the stack every time
         know what's going on and do it.
         */
        if (dom_adapter_1.DOM && this._stack.length === 1) {
            dom_adapter_1.DOM.addClass(dom_adapter_1.DOM.query('body'), 'modal-open');
        }
    };
    /**
     * Push a ModalDialogInstance into the stack and manage it so when it's done
     * it will automatically kick itself out of the stack.
     * @param mInstance
     */
    ModalInstanceStack.prototype.pushManaged = function (mInstance) {
        var _this = this;
        this.push(mInstance);
        mInstance.result
            .then(function () { return _this.remove(mInstance); })
            .catch(function () { return _this.remove(mInstance); });
        // we don't "pop" because we can't know for sure that our instance is the last.
        // In a user event world it will be the last, but since modals can close programmatically
        // we can't tell.
    };
    ModalInstanceStack.prototype.pop = function () {
        this._stack.pop();
    };
    /**
     * Remove a ModalDialogInstance from the stack.
     * @param mInstance
     */
    ModalInstanceStack.prototype.remove = function (mInstance) {
        var idx = this._stack.indexOf(mInstance);
        if (idx > -1)
            this._stack.splice(idx, 1);
        if (dom_adapter_1.DOM && this._stack.length === 0) {
            dom_adapter_1.DOM.removeClass(dom_adapter_1.DOM.query('body'), 'modal-open');
        }
    };
    ModalInstanceStack.prototype.index = function (index) {
        return this._stack[index];
    };
    ModalInstanceStack.prototype.indexOf = function (mInstance) {
        return this._stack.indexOf(mInstance);
    };
    Object.defineProperty(ModalInstanceStack.prototype, "length", {
        get: function () {
            return this._stack.length;
        },
        enumerable: true,
        configurable: true
    });
    return ModalInstanceStack;
}());
exports.ModalInstanceStack = ModalInstanceStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kYWxJbnN0YW5jZVN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvYW5ndWxhcjItbW9kYWwvZnJhbWV3b3JrL01vZGFsSW5zdGFuY2VTdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsNEJBQW9CLHVDQUF1QyxDQUFDLENBQUE7QUFFNUQ7O0dBRUc7QUFDSDtJQUFBO1FBQ1ksV0FBTSxHQUEwQixFQUFFLENBQUM7SUErRC9DLENBQUM7SUE1REcsaUNBQUksR0FBSixVQUFLLFNBQThCO1FBQy9CLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3pDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTVDOzs7Ozs7O1dBT0c7UUFDSCxFQUFFLENBQUMsQ0FBQyxpQkFBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEMsaUJBQUcsQ0FBQyxRQUFRLENBQUMsaUJBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDbEQsQ0FBQztJQUNMLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsd0NBQVcsR0FBWCxVQUFZLFNBQThCO1FBQTFDLGlCQVFDO1FBUEcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyQixTQUFTLENBQUMsTUFBTTthQUNYLElBQUksQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBdEIsQ0FBc0IsQ0FBQzthQUNsQyxLQUFLLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQXRCLENBQXNCLENBQUMsQ0FBQztRQUN6QywrRUFBK0U7UUFDL0UseUZBQXlGO1FBQ3pGLGlCQUFpQjtJQUNyQixDQUFDO0lBRUQsZ0NBQUcsR0FBSDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILG1DQUFNLEdBQU4sVUFBTyxTQUE4QjtRQUNqQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6QyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekMsRUFBRSxDQUFDLENBQUMsaUJBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLGlCQUFHLENBQUMsV0FBVyxDQUFDLGlCQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ3JELENBQUM7SUFDTCxDQUFDO0lBR0Qsa0NBQUssR0FBTCxVQUFNLEtBQWE7UUFDZixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsb0NBQU8sR0FBUCxVQUFRLFNBQThCO1FBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsc0JBQUksc0NBQU07YUFBVjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM5QixDQUFDOzs7T0FBQTtJQUNMLHlCQUFDO0FBQUQsQ0FBQyxBQWhFRCxJQWdFQztBQWhFWSwwQkFBa0IscUJBZ0U5QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNb2RhbERpYWxvZ0luc3RhbmNlfSBmcm9tICcuLi9tb2RlbHMvTW9kYWxEaWFsb2dJbnN0YW5jZSc7XG5pbXBvcnQgeyBET00gfSBmcm9tICdhbmd1bGFyMi9zcmMvcGxhdGZvcm0vZG9tL2RvbV9hZGFwdGVyJztcblxuLyoqXG4gKiBBIGR1bWIgc3RhY2sgaW1wbGVtZW50YXRpb24gb3ZlciBhbiBhcnJheS5cbiAqL1xuZXhwb3J0IGNsYXNzIE1vZGFsSW5zdGFuY2VTdGFjayB7XG4gICAgcHJpdmF0ZSBfc3RhY2s6IE1vZGFsRGlhbG9nSW5zdGFuY2VbXSA9IFtdO1xuXG5cbiAgICBwdXNoKG1JbnN0YW5jZTogTW9kYWxEaWFsb2dJbnN0YW5jZSk6IHZvaWQge1xuICAgICAgICBsZXQgaWR4ID0gdGhpcy5fc3RhY2suaW5kZXhPZihtSW5zdGFuY2UpO1xuICAgICAgICBpZiAoaWR4ID09PSAtMSkgdGhpcy5fc3RhY2sucHVzaChtSW5zdGFuY2UpO1xuXG4gICAgICAgIC8qIFRPRE86IHRoaXMgaXMgd3JvbmcgZm9yIHNldmVyYWwgcmVhc29uczpcbiAgICAgICAgIDEpIFRoaXMgaXMgYSBkaXJlY3QgRE9NIGFjY2VzcyB3ZSBuZWVkIHRvIGZpbmQgYW5vdGhlciB3YXkgb3IgdG8gc2VwYXJhdGUgaXQuXG4gICAgICAgICAyKSBJdCBub3QgdGhlIHBsYWNlIGZvciBpdC5cbiAgICAgICAgIDMpIEl0IGRvZXNuJ3QgY2FyZSBpZiBpdHMgYSBtb2RhbCBpbnNpZGUgYW4gZWxlbWVudCBvciBhIHdpZGUgb3BlbiBvbmUuXG4gICAgICAgICBJZiBpdHMgaW5zaWRlIGFuIGVsZW1lbnQgd2UgbmVlZCB0byBhZGQgdGhlICdtb2RhbC1vcGVuJyB0byB0aGF0IGVsZW1lbnQuXG4gICAgICAgICBJZiBpdHMgd2lkZSBvcGVuIHdlIGFkZCB0byB0aGUgYm9keSwgd2UgbmVlZCB0byB0cmF2ZXJzZSB0aGUgc3RhY2sgZXZlcnkgdGltZVxuICAgICAgICAga25vdyB3aGF0J3MgZ29pbmcgb24gYW5kIGRvIGl0LlxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKERPTSAmJiB0aGlzLl9zdGFjay5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIERPTS5hZGRDbGFzcyhET00ucXVlcnkoJ2JvZHknKSwgJ21vZGFsLW9wZW4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFB1c2ggYSBNb2RhbERpYWxvZ0luc3RhbmNlIGludG8gdGhlIHN0YWNrIGFuZCBtYW5hZ2UgaXQgc28gd2hlbiBpdCdzIGRvbmVcbiAgICAgKiBpdCB3aWxsIGF1dG9tYXRpY2FsbHkga2ljayBpdHNlbGYgb3V0IG9mIHRoZSBzdGFjay5cbiAgICAgKiBAcGFyYW0gbUluc3RhbmNlXG4gICAgICovXG4gICAgcHVzaE1hbmFnZWQobUluc3RhbmNlOiBNb2RhbERpYWxvZ0luc3RhbmNlKTogdm9pZCB7XG4gICAgICAgIHRoaXMucHVzaChtSW5zdGFuY2UpO1xuICAgICAgICBtSW5zdGFuY2UucmVzdWx0XG4gICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLnJlbW92ZShtSW5zdGFuY2UpKVxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHRoaXMucmVtb3ZlKG1JbnN0YW5jZSkpO1xuICAgICAgICAvLyB3ZSBkb24ndCBcInBvcFwiIGJlY2F1c2Ugd2UgY2FuJ3Qga25vdyBmb3Igc3VyZSB0aGF0IG91ciBpbnN0YW5jZSBpcyB0aGUgbGFzdC5cbiAgICAgICAgLy8gSW4gYSB1c2VyIGV2ZW50IHdvcmxkIGl0IHdpbGwgYmUgdGhlIGxhc3QsIGJ1dCBzaW5jZSBtb2RhbHMgY2FuIGNsb3NlIHByb2dyYW1tYXRpY2FsbHlcbiAgICAgICAgLy8gd2UgY2FuJ3QgdGVsbC5cbiAgICB9XG5cbiAgICBwb3AoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3N0YWNrLnBvcCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhIE1vZGFsRGlhbG9nSW5zdGFuY2UgZnJvbSB0aGUgc3RhY2suXG4gICAgICogQHBhcmFtIG1JbnN0YW5jZVxuICAgICAqL1xuICAgIHJlbW92ZShtSW5zdGFuY2U6IE1vZGFsRGlhbG9nSW5zdGFuY2UpOiB2b2lkIHtcbiAgICAgICAgbGV0IGlkeCA9IHRoaXMuX3N0YWNrLmluZGV4T2YobUluc3RhbmNlKTtcbiAgICAgICAgaWYgKGlkeCA+IC0xKSB0aGlzLl9zdGFjay5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgaWYgKERPTSAmJiB0aGlzLl9zdGFjay5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIERPTS5yZW1vdmVDbGFzcyhET00ucXVlcnkoJ2JvZHknKSwgJ21vZGFsLW9wZW4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgaW5kZXgoaW5kZXg6IG51bWJlcik6IE1vZGFsRGlhbG9nSW5zdGFuY2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhY2tbaW5kZXhdO1xuICAgIH1cblxuICAgIGluZGV4T2YobUluc3RhbmNlOiBNb2RhbERpYWxvZ0luc3RhbmNlKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YWNrLmluZGV4T2YobUluc3RhbmNlKTtcbiAgICB9XG5cbiAgICBnZXQgbGVuZ3RoKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGFjay5sZW5ndGg7XG4gICAgfVxufVxuIl19