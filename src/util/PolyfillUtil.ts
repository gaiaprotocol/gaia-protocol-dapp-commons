import BrowserInfo from "../BrowserInfo.js";
import DomNode from "../dom/DomNode.js";

const CONTEXT_MENU_TOUCH_DELAY = 500;

class PolyfillUtil {
  public addContextmenuListener(
    dom: DomNode,
    listener: (e: MouseEvent) => void,
  ) {
    if (BrowserInfo.isIOS) {
      let timer: any;
      dom.style({ "-webkit-user-select": "none", "user-select": "none" });
      dom.onDom("touchstart", (e: any) => {
        if (!e.clientX) e.clientX = e.touches[0]?.clientX;
        if (!e.clientY) e.clientY = e.touches[0]?.clientY;
        timer = setTimeout(() => listener(e), CONTEXT_MENU_TOUCH_DELAY);
      });
      dom.onDom("touchend", () => clearTimeout(timer));
      dom.onDom("touchmove", () => clearTimeout(timer));
    } else {
      dom.onDom("contextmenu", (e: MouseEvent) => listener(e));
    }
  }
}

export default new PolyfillUtil();
