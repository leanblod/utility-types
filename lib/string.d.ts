/** Extracts first character of a stirng literal type */
export type FirstChar<S extends string | number> = `${S}` extends `${infer C extends string}${string}` ? C : '';

/** Extracts leftover characters of a string literal type */
export type SkipFirst<S extends string | number> = `${S}` extends `${string}${infer R extends string}` ? R : '';
