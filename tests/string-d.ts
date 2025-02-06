import { Satisfies, String } from "../lib";
import { expectAccepts } from ".";

type TestType = Satisfies<string, String.FirstChar<string>>;

// FistChar
expectAccepts<String.FirstChar<'asd'>>('a');
expectAccepts<String.FirstChar<'Asd'>>('A');
expectAccepts<String.FirstChar<1234>>('1');
expectAccepts<String.FirstChar<''>>('');

// SkipFirst
expectAccepts<String.SkipFirst<'asd'>>('sd');
expectAccepts<String.SkipFirst<'asD$-'>>('sD$-');
expectAccepts<String.SkipFirst<'asd dsa'>>('sd dsa');
expectAccepts<String.SkipFirst<'asd dsa'>>('sd dsa');
expectAccepts<String.SkipFirst<1234>>('234');
expectAccepts<String.SkipFirst<`${number}${number}`>>('123');
expectAccepts<String.SkipFirst<'a'>>('');
expectAccepts<String.SkipFirst<''>>('');
