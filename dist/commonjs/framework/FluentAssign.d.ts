/**
 * Create a function for setting a value for a property on a given object.
 * @param obj The object to apply the key & setter on.
 * @param propertyName The name of the property on the object
 * @param writeOnce If true will allow writing once (default: false)
 */
export declare function setAssignMethod<T>(obj: T, propertyName: string, writeOnce?: boolean): void;
/**
 * Describes a fluent assign method.
 * A function that gets a value and returns the instance it works on.
 */
export interface FluentAssignMethod<T, Z> {
    (value: T): Z;
}
export interface IFluentAssignFactory<Z> {
    fluentAssign: Z;
    setMethod(name: string, defaultValue?: any): IFluentAssignFactory<Z>;
}
/**
 * Represent a fluent API factory wrapper for defining FluentAssign instances.
 */
export declare class FluentAssignFactory<T> {
    private _fluentAssign;
    constructor(fluentAssign?: FluentAssign<T>);
    /**
     * Create a setter method on the FluentAssign instance.
     * @param name The name of the setter function.
     * @param defaultValue If set (not undefined) set's the value on the instance immediately.
     * @returns {FluentAssignFactory}
     */
    setMethod(name: string, defaultValue?: any): FluentAssignFactory<T>;
    /**
     * The FluentAssign instance.
     * @returns {FluentAssign<T>}
     */
    fluentAssign: FluentAssign<T>;
}
/**
 * Represent an object where every property is a function representing an assignment function.
 * Calling each function with a value will assign the value to the object and return the object.
 * Calling 'toJSON' returns an object with the same properties but this time representing the
 * assigned values.
 *
 * This allows setting an object in a fluent API manner.
 * Example:
 let fluent = new FluentAssign<any>(undefined, ['some', 'went']);
 fluent.some('thing').went('wrong').toJSON();
 // { some: 'thing', went: 'wrong' }
 */
export declare class FluentAssign<T> {
    /**
     *
     * @param defaultValues An object representing default values for the underlying object.
     * @param initialSetters A list of initial setters for this FluentAssign.
     */
    constructor(defaultValues?: T, initialSetters?: string[]);
    /**
     * Returns a FluentAssignFactory<FluentAssign<T>> ready to define a FluentAssign type.
     * @param defaultValues An object representing default values for the instance.
     * @param initialSetters A list of initial setters for the instance.
     * @returns {FluentAssignFactory<T>}
     */
    static compose<T>(defaultValues?: T, initialSetters?: string[]): FluentAssignFactory<T>;
    /**
     * Returns a FluentAssignFactory<Z> where Z is an instance of FluentAssign<?> or a derived
     * class of it.
     * @param fluentAssign An instance of FluentAssign<?> or a derived class of FluentAssign<?>.
     * @returns {any}
     */
    static composeWith<Z>(fluentAssign: Z): IFluentAssignFactory<Z>;
    toJSON(): T;
}
