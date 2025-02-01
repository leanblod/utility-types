import { Expect, Keys } from '../lib';

type TestObject = {
    key1: string,
    key2: boolean,
    key3: string,
}

type TestKeysTuple = Expect.Satisfies<
    Keys.ToTuple<TestObject>,
    ["key2", "key1", "key3"] | ["key3", "key1", "key2"]
>;

Expect.Accepts<
    Keys.ToTuple<TestObject>
>(["key1", "key2", "key3"]);

Expect.Accepts<
    Keys.ToTuple<TestObject, 'key1'>
>(['key1']);

Expect.Accepts<
    Keys.ToTuple<TestObject, 'key1' | 'key2'>
>(['key2', 'key1']);

Expect.Accepts<
    Keys.ToTuple<TestObject, never>
>([]);

Expect.Accepts<
    Keys.ToTuple<{}, never>
>([]);

Expect.Accepts<
    Keys.ToTuple<{}>
>([]);
