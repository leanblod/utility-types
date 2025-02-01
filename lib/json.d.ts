import type { Keys } from '../lib';
export type { JsonStringify as Stringify, JsonParsable as Value };

type JsonStringify<JS extends JsonParsable> =
    JS extends JsonArray ? ParsedJsonArray<JS>
    : JS extends JsonObject ? ParsedJsonObject<JS>
    : JS extends JsonLiterals ? `${JS}`
    : JS extends JsonString ? `"${JS}"` : never;

// Allowed JS types for JSON parsing
type JsonParsable = JsonArray | JsonObject | JsonLiterals | JsonString;
type JsonArray = JsonParsable[];
type JsonObject = { [key: string]: JsonParsable; };
type JsonLiterals = boolean | null | number;
type JsonString = string;

//@ts-ignore
type ParsedJsonObject<JS extends JsonObject> = `{${
    //@ts-ignore
    ParsedJsonObjectRecursive<JS, Keys.ToTuple<JS>>
    }}`;

type ParsedJsonObjectRecursive<
    O extends { [key: string]: JsonParsable },
    Keys extends `${string | number & keyof O}`[],
> = Keys extends [
    infer NextKey extends `${string | number & keyof O}`,
    ...infer RestKeys extends Keys[number][]
] ? `"${NextKey}":${JsonStringify<O[NextKey]>}${RestKeys extends [] ?
'' : `,${ParsedJsonObjectRecursive<O, RestKeys>}`
}` : '';

type ParsedJsonArray<A extends JsonArray> = `[${ParsedJsonArrayRecursive<A>}]`;
type ParsedJsonArrayRecursive<A extends JsonArray> = A extends [
    infer NextItem extends JsonParsable,
    ...infer RestItems extends JsonArray,
] ? `${JsonStringify<NextItem>}${RestItems extends [] ?
'' : `,${ParsedJsonArrayRecursive<RestItems>}`
}` : '';
