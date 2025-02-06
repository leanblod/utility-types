/**
 * It maps to the `Else` generic if the `SomeType` generic is `never`,
 * otherwise it maps to `SomeType`
 */
export type IfNeverElse<SomeType, Else> = [SomeType] extends [never] ? Else : SomeType;

/**
 * Maps to a union of objects, that each require a different property of `T`,
 * and admit the rest as optionals.
 * If passed `E`, also excludes those types from the required properties, it's
 * useful to remove nullish values form nullable properties.
 */
export type AtLeastOne<T, E extends T[keyof T] = never> = Partial<T> & OnlyOne<T, E>;

/**
 * Maps to a union of objects, that each require a different property of `T`
 * and only that one property.
 * If passed `E`, also excludes those types from the required properties, it's
 * useful to remove nullish values form nullable properties.
 */
export type OnlyOne<T, E extends T[keyof T] = never> = {
    [K in keyof T]-?: {
        [IK in K]-?: Exclude<T[IK], E>;
    };
}[keyof T];
