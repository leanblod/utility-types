import { expectAccepts } from ".";
import { Curry } from "../lib";

declare function curry<
    const Fn extends (...params: any[]) => unknown,
>(fn: Fn): Curry<Parameters<Fn>, ReturnType<Fn>>;

function test(p1: string, p2: number, p3: string, p4Def: number = 5, p5Opt?: string[], ...p6Rest: number[]) {
    return 1234 as const;
}

const curryTest = curry(test);

// Call with less arguments
const lastParamCall = curryTest("", 123);

expectAccepts<
    (p3: string, p4Def?: number, p5Opt?: string[], ...p6Rest: number[]) => 1234
>(lastParamCall);

// Call with all required arguments
expectAccepts<1234>(curryTest('', 1234, ''));
expectAccepts<1234>(curryTest('', 1234, '', undefined, [''], 1, 2, 3, 4, 5));
expectAccepts<1234>(lastParamCall(''));
expectAccepts<1234>(lastParamCall('', 1234));
