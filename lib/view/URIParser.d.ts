import { ViewParams } from "./View.js";
declare class URIParser {
    private paramRegex;
    match(uriParts: string[], patternParts: string[], params?: ViewParams): boolean;
    parse(uri: string, pattern: string, params: ViewParams): boolean;
}
declare const _default: URIParser;
export default _default;
//# sourceMappingURL=URIParser.d.ts.map