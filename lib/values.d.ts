export type { ValuesToTuple as ToTuple };

type ValuesToTuple<T, TupleOfKeys extends (keyof T)[]> = {
    [Index in keyof TupleOfKeys]: T[TupleOfKeys[Index]];
};
