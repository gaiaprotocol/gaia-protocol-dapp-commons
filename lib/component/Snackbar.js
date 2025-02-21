import BodyNode from "../dom/BodyNode.js";
import el from "../dom/el.js";
import Component from "./Component.js";
import MaterialIcon from "./MaterialIcon.js";
import Button from "./button/Button.js";
import ButtonType from "./button/ButtonType.js";
export default class Snackbar extends Component {
    timeoutId;
    constructor(options) {
        super(".snackbar");
        this.append(el("main", el("p", options.message), options.action
            ? new Button({
                tag: ".action",
                title: options.action.title,
                onClick: () => {
                    options.action?.click();
                    this.delete();
                },
            })
            : undefined, new Button({
            type: ButtonType.Circle,
            tag: ".close",
            icon: new MaterialIcon("close"),
            onClick: () => this.delete(),
        })));
        BodyNode.append(this);
        this.timeoutId = setTimeout(() => this.delete(), 5000);
    }
    delete() {
        clearTimeout(this.timeoutId);
        super.delete();
    }
}
//# sourceMappingURL=Snackbar.js.map