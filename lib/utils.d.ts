export type IfNeverElse<SomeType, Else> = [SomeType] extends [never] ? Else : SomeType;
