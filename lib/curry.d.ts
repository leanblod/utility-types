import type { Slice } from './array'

export type Curry<
    Params extends unknown[],
    Result,
> = {
    (...params: Params): Result;
    <
        P extends CurriedParams<Params> & unknown[],
    >(...params: P): Curry<Slice<Params, P['length']>, Result>;
};

type CurriedParams<
    Params extends unknown[],
    RequiredParams extends unknown[] = Params extends [...infer First extends [unknown], ...unknown[]] ? First : [],
> = Params extends [...RequiredParams, ...infer Next extends [unknown], ...unknown[]] ?
    RequiredParams | CurriedParams<Params, [...RequiredParams, ...Next]> : RequiredParams;
