import { DynamicComponentLoader, ElementRef, ResolvedProvider, ApplicationRef } from 'angular2/core';
import { ModalConfig } from '../models/ModalConfig';
import { ModalDialogInstance } from '../models/ModalDialogInstance';
import { OneButtonPreset, TwoButtonPreset } from '../presets';
export declare class Modal {
    private componentLoader;
    private appRef;
    private config;
    constructor(componentLoader: DynamicComponentLoader, appRef: ApplicationRef, defaultConfig: ModalConfig);
    alert(): OneButtonPreset;
    prompt(): OneButtonPreset;
    confirm(): TwoButtonPreset;
    /**
     * Opens a modal window blocking the whole screen.
     * @param componentType The angular Component to render as modal.
     * @param bindings Resolved providers that will inject into the component provided.
     * @param config A Modal Configuration object.
     * @returns {Promise<ModalDialogInstance>}
     */
    open(componentType: FunctionConstructor, bindings: ResolvedProvider[], config?: ModalConfig): Promise<ModalDialogInstance>;
    /**
     * Opens a modal window inside an existing component.
     * @param componentType The angular Component to render as modal.
     * @param elementRef The element to block using the modal.
     * @param anchorName A template variable within the component.
     * @param bindings Resolved providers that will inject into the component provided.
     * @param config A Modal Configuration object.
     * @returns {Promise<ModalDialogInstance>}
     */
    openInside(componentType: FunctionConstructor, elementRef: ElementRef, anchorName: string, bindings: ResolvedProvider[], config?: ModalConfig): Promise<ModalDialogInstance>;
    stackPosition(mInstande: ModalDialogInstance): number;
    stackLength: number;
    /**
     * Creates backdrop element.
     * @param {ElementRef} The element to block using the modal.
     * @param {ResolvedProvider[]} Resolved providers,
     *     must contain the ModalDialogInstance instance for this backdrop.
     * @param {string} An anchor name, optional.
     *     if not supplied backdrop gets applied next to elementRef, otherwise into it.
     * @returns {Promise<ComponentRef>}
     */
    private createBackdrop(elementRef, bindings, anchorName?);
}
