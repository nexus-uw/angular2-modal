import { FluentAssignMethod } from '../framework/FluentAssign';
import { Modal } from '../providers/Modal';
import { MessageModalPreset, MessageModalPresetData } from './base/MessageModalPreset';
export interface OneButtonPresetData extends MessageModalPresetData {
    /**
     * Caption for the OK button.
     * Default: OK
     */
    okBtn: string;
    /**
     * A Class for the OK button.
     * Default: btn btn-primary
     */
    okBtnClass: string;
}
/**
 * A Preset for a classic 1 button modal window.
 */
export declare class OneButtonPreset extends MessageModalPreset<OneButtonPresetData> {
    constructor(modal: Modal, defaultValues?: OneButtonPresetData);
    okBtn: FluentAssignMethod<string, this>;
    okBtnClass: FluentAssignMethod<string, this>;
}
