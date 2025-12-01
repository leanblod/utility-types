export type Slice<
    T extends unknown[],
    From extends number = 0,
    I extends unknown[] = [],
> = I['length'] extends From ?
    (
        T extends [...I, ...infer R extends unknown[]] ?
        R : never
    ) : (
        // Inference of next parameter as array spreading to keep index labels
        T extends [...I, ...infer N extends [unknown], ...unknown[]] ?
        Slice<T, From, [...I, ...N]> : T
    );
