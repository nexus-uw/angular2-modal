import { ICustomModal, ICustomModalComponent } from '../models/ICustomModal';
import { ModalDialogInstance } from '../models/ModalDialogInstance';
/**
 * @deprecated
 */
export declare class YesNoModalContent {
    title: string;
    body: string;
    hideNo: boolean;
    yesText: string;
    noText: string;
    constructor(title?: string, body?: string, hideNo?: boolean, yesText?: string, noText?: string);
}
/**
 * @deprecated
 */
export declare class YesNoModal implements ICustomModalComponent {
    dialog: ModalDialogInstance;
    context: YesNoModalContent;
    constructor(dialog: ModalDialogInstance, modelContentData: ICustomModal);
    ok($event: any): void;
    cancel(): void;
}
