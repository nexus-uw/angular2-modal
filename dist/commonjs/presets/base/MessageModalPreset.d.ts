import { FluentAssignMethod } from '../../framework/FluentAssign';
import { ModalAwarePreset, ModalAwarePresetData } from './ModalAwarePreset';
import { MessageModalContext } from '../../modals/MessageModal';
export interface MessageModalPresetData extends MessageModalContext, ModalAwarePresetData {
}
/**
 * A Preset representing the configuration needed to open MessageModal.
 * This is an abstract implementation with no concrete behaviour.
 * Use derived implementation.
 */
export declare abstract class MessageModalPreset<T extends MessageModalPresetData> extends ModalAwarePreset<T> {
    constructor(defaultValues?: T, initialSetters?: string[]);
    /**
     * A Class for the header (title) container.
     * Default: modal-header
     */
    headerClass: FluentAssignMethod<string, this>;
    /**
     * Caption for the title, enclosed in a H3 container.
     */
    title: FluentAssignMethod<string, this>;
    /**
     * HTML for the title, if set overrides title property.
     * The HTML is wrapped in a DIV element, inside the header container.
     * Example:
     <div class="modal-header">
     <div> HTML CONTENT INSERTED HERE </div>
     </div>
     * Note: HTML is not compiled.
     */
    titleHtml: FluentAssignMethod<string, this>;
    /**
     * The body of the message.
     * Can be either text or HTML.
     * Note: HTML is not compiled.
     */
    body: FluentAssignMethod<string, this>;
    /**
     * A Class for the body container.
     * Default: modal-body
     */
    bodyClass: FluentAssignMethod<string, this>;
    /**
     * A Class for the footer container.
     * Default: modal-footer
     */
    footerClass: FluentAssignMethod<string, this>;
}
