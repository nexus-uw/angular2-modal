export declare type BootstrapModalSize = 'sm' | 'lg';
export interface IModalConfig {
    /**
     * Size of the modal.
     * 'lg' or 'sm' only.
     * NOTE: No validation.
     * Default to 'lg'
     */
    size: BootstrapModalSize;
    /**
     * Describes if the modal is blocking modal.
     * A Blocking modal is not closable by clicking outside of the modal window.
     * Defaults to false.
     */
    isBlocking: boolean;
    /**
     * Keyboard value/s that close the modal.
     * Accepts either a single numeric value or an array of numeric values.
     * A modal closed by a keyboard stroke will result in a 'reject' notification from the promise.
     * Defaults to 27, set `null` implicitly to disable.
     */
    keyboard: Array<number> | number;
    /**
     * A Class for the modal dialog container.
     * Default: modal-dialog
     */
    dialogClass: string;
}
/**
 * A configuration definition object.
 * Instruction for how to show a modal.
 */
export declare class ModalConfig implements IModalConfig {
    /**
     * Size of the modal.
     * 'lg' or 'sm' only.
     * NOTE: No validation.
     * Default to 'lg'
     */
    size: BootstrapModalSize;
    /**
     * A Class for the modal dialog container.
     * Default: modal-dialog
     */
    dialogClass: string;
    /**
     * Describes if the modal is blocking modal.
     * A Blocking modal is not closable by clicking outside of the modal window.
     * Defaults to false.
     */
    isBlocking: boolean;
    /**
     * Keyboard value/s that close the modal.
     * Accepts either a single numeric value or an array of numeric values.
     * A modal closed by a keyboard stroke will result in a 'reject' notification from the promise.
     * Defaults to 27, set `null` implicitly to disable.
     */
    keyboard: Array<number> | number;
    constructor(size?: BootstrapModalSize, isBlocking?: boolean, keyboard?: Array<number> | number, dialogClass?: string);
    /**
     * Makes a ModalConfig instance valdud.
     * @param config
     * @param defaultConfig A Default config to use as master, optional.
     * @returns {ModalConfig} The same config instance sent.
     */
    static makeValid(config: ModalConfig, defaultConfig?: ModalConfig): ModalConfig;
    /**
     * Returns true if the config instance supports a given key.
     * @param key
     * @returns {boolean}
     */
    supportsKey(keyCode: number): boolean;
}
