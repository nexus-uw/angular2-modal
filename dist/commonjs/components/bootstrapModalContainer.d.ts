import { ModalDialogInstance } from '../models/ModalDialogInstance';
import { Modal } from '../providers/Modal';
/**
 * A component that acts as a top level container for an open modal window.
 */
export declare class BootstrapModalContainer {
    private modal;
    dialogInstance: ModalDialogInstance;
    position: string;
    constructor(dialogInstance: ModalDialogInstance, modal: Modal);
    onContainerClick($event: any): void;
    onClick(): void;
    documentKeypress(event: KeyboardEvent): void;
}
