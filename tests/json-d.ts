import { Expect, Json } from '../lib';

Expect.Accepts<Json.Stringify<[
    1, 2, 3, 4, "testString", boolean, {
        testKey: null,
        anotherKey: ["testValue", {
            maaas: '123',
            "1": [
                "PAPU",
                "MAAAAAAAAS",
                null,
                "basta",
                123,
            ],
            "2": "asd",
        }],
    }
]>>('[1,2,3,4,"testString",false,{"anotherKey":["testValue",{"1":["PAPU","MAAAAAAAAS",null,"basta",123],"2":"asd","maaas":"123"}],"testKey":null}]');

Expect.Accepts<Json.Stringify<{}>>('{}');
Expect.Accepts<Json.Stringify<[]>>('[]');

// Post's example ------------------------------------------------------------------------------
// Assuming this is the function signature
declare function useGPT<Output extends Json.Value>(prompt: string): Json.Stringify<Output>;

// Calling with an exact type
Expect.Accepts<`{"countries":["${string}","${string}","${string}","${string}","${string}"]}`>(
    useGPT<{
        countries: [string, string, string, string, string];
    }>('Give me a list of 5 countries')
);
