import { ICustomModal, ICustomModalComponent } from '../models/ICustomModal';
import { ModalDialogInstance } from '../models/ModalDialogInstance';
/**
 * @deprecated
 */
export declare class OKOnlyContent {
    title: string;
    body: string;
    okText: string;
    constructor(title?: string, body?: string, okText?: string);
}
/**
 * @deprecated
 */
export declare class OKOnlyModal implements ICustomModalComponent {
    dialog: ModalDialogInstance;
    context: OKOnlyContent;
    constructor(dialog: ModalDialogInstance, modelContentData: ICustomModal);
    ok(): void;
}
