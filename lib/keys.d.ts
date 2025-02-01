import { IfNeverElse } from '.';
export type { KeysToTuple as ToTuple };

type KeysToTuple<T, Keys extends keyof T = keyof T> = IfNeverElse<{
    [K in Keys]: Exclude<Keys, K> extends never ?
    [K] : [K, ...KeysToTuple<Pick<T, Exclude<Keys, K>>>];
}[Keys], []>;
