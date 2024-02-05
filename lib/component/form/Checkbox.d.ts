import Component from "../Component.js";
export default class Checkbox extends Component {
    private input;
    constructor(options?: {
        label?: string;
    });
    get checked(): boolean;
    check(): void;
    uncheck(): void;
    toggle(): void;
}
//# sourceMappingURL=Checkbox.d.ts.map