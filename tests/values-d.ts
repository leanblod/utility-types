import { Satisfies, Values } from '../lib';
import { expectAccepts } from '.';

type TestObject = {
    key1: string,
    key2: boolean,
    key3: string,
}

type TestValuesTuple = Satisfies<
    [string, boolean, string],
    Values.ToTuple<
        TestObject,
        ['key1', 'key2', 'key3']
    >
>;

expectAccepts<TestValuesTuple>(["value1", true, "value2"]);
expectAccepts<Values.ToTuple<{}, []>>([]);
