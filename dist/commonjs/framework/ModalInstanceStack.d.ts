import { ModalDialogInstance } from '../models/ModalDialogInstance';
/**
 * A dumb stack implementation over an array.
 */
export declare class ModalInstanceStack {
    private _stack;
    push(mInstance: ModalDialogInstance): void;
    /**
     * Push a ModalDialogInstance into the stack and manage it so when it's done
     * it will automatically kick itself out of the stack.
     * @param mInstance
     */
    pushManaged(mInstance: ModalDialogInstance): void;
    pop(): void;
    /**
     * Remove a ModalDialogInstance from the stack.
     * @param mInstance
     */
    remove(mInstance: ModalDialogInstance): void;
    index(index: number): ModalDialogInstance;
    indexOf(mInstance: ModalDialogInstance): number;
    length: number;
}
