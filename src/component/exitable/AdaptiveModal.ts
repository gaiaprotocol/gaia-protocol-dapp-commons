import DomNode, { DomChild } from "../../dom/DomNode.js";
import el from "../../dom/el.js";
import msg from "../../i18n/msg.js";
import Component from "../Component.js";
import MaterialIcon from "../MaterialIcon.js";
import Button from "../button/Button.js";
import ButtonType from "../button/ButtonType.js";
import Exitable, { ExitableOptions } from "./Exitable.js";

export default abstract class AdaptiveModal extends Exitable {
  protected container: Component;

  private titleDisplay: DomNode;
  protected main: DomNode;
  private footer: DomNode;

  constructor(tag: string, options: ExitableOptions) {
    super(".adaptive-modal-overlay", options);
    this.container = new Component(
      ".adaptive-modal" + tag,
      el(
        "header",
        new Button({
          tag: ".back",
          type: ButtonType.Circle,
          icon: new MaterialIcon("arrow_back"),
          onClick: () => this.delete(),
        }),
        this.titleDisplay = el("h1.title"),
        new Button({
          tag: ".close",
          type: ButtonType.Circle,
          icon: new MaterialIcon("close"),
          onClick: () => this.delete(),
        }),
      ),
      this.main = el("main"),
      this.footer = el(
        "footer",
        new Button({
          tag: ".cancel",
          title: msg("cancel-button"),
          onClick: () => this.delete(),
        }),
      ),
    ).appendTo(this);
  }

  protected set title(title: DomChild | DomChild[]) {
    this.titleDisplay.empty().append(
      ...(Array.isArray(title) ? title : [title]),
    );
  }

  protected set primaryButton(button: Button) {
    this.footer.append(button.addClass("primary"));
  }
}
