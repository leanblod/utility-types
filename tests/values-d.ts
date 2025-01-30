import { Expect, Values } from '../lib';

type TestValuesTuple = Expect.Satisfies<
    [string, boolean, string],
    Values.ToTuple<{
        key1: string,
        key2: boolean,
        key3: string,
    }, ['key1', 'key2', 'key3']>
>;

Expect.Accepts<TestValuesTuple>(["value1", true, "value2"]);
Expect.Accepts<Values.ToTuple<{}, []>>([]);
