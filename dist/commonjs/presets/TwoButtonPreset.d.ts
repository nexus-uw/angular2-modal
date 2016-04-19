import { FluentAssignMethod } from '../framework/FluentAssign';
import { Modal } from '../providers/Modal';
import { MessageModalPreset } from './base/MessageModalPreset';
import { OneButtonPresetData } from './OneButtonPreset';
export interface TwoButtonPresetData extends OneButtonPresetData {
    /**
     * Caption for the Cancel button.
     * Default: Cancel
     */
    cancelBtn: string;
    /**
     * A Class for the Cancel button.
     * Default: btn btn-default
     */
    cancelBtnClass: string;
}
/**
 * A Preset for a classic 2 button modal window.
 */
export declare class TwoButtonPreset extends MessageModalPreset<TwoButtonPresetData> {
    constructor(modal: Modal, defaultValues?: TwoButtonPresetData);
    okBtn: FluentAssignMethod<string, this>;
    okBtnClass: FluentAssignMethod<string, this>;
    cancelBtn: FluentAssignMethod<string, this>;
    cancelBtnClass: FluentAssignMethod<string, this>;
}
