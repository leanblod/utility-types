import { Keys, Satisfies } from '../lib';
import { expectAccepts } from '.';

type TestObject = {
    key1: string,
    key2: boolean,
    key3: string,
}

type TestKeysTuple = Satisfies<
    Keys.ToTuple<TestObject>,
    ["key2", "key1", "key3"] | ["key3", "key1", "key2"]
>;

expectAccepts<
    Keys.ToTuple<TestObject>
>(["key1", "key2", "key3"]);

expectAccepts<
    Keys.ToTuple<TestObject, 'key1'>
>(['key1']);

expectAccepts<
    Keys.ToTuple<TestObject, 'key1' | 'key2'>
>(['key2', 'key1']);

expectAccepts<
    Keys.ToTuple<TestObject, never>
>([]);

expectAccepts<
    Keys.ToTuple<{}, never>
>([]);

expectAccepts<
    Keys.ToTuple<{}>
>([]);
