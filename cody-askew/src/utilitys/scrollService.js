import { TOTAL_SCREENS } from "./commonUtils";
import { Subject } from "rxjs";

export default class ScrollService {
  static scrollHandler = new ScrollService();

  static currentScreenBroadCaster = new Subject();
  static currentScreenFadeIn = new Subject();

  constructor() {
    window.addEventListener("scroll", this.checkCurrentScreenUnderViewport);
  }
  scrollToHireMe = () => {
    let ccontactMeScreen = document.getElementById("Contact Me");
    if (!ccontactMeScreen) return;
    ccontactMeScreen.scrollIntoView({ behavior: "smooth" });
  };
  scrollToHome = () => {
    let homeScreen = document.getElementById("Contact Me");
    if (!homeScreen) return;
    homeScreen.scrollIntoView({ behavior: "smooth" });
  };
  isElementInView = (elem, type) => {
    let rec = elem.getBoundingClientRect();
    let elementTop = rec.top;
    let elementBottom = rec.bottom;

    let partiallyVisible =
      elementTop < window.innerHeight && elementBottom >= 0;
    let completelyVisible =
      elementTop >= 0 && elementBottom <= window.innerHeight;

    switch (type) {
      case "partial":
        return partiallyVisible;

      case "complete":
        return completelyVisible;
      default:
        return false;
    }
  };
  checkCurrentScreenUnderViewport = (event) => {
    // eslint-disable-next-line no-undef if (!event || object.keys(event).length < 1) return;
    for (let screen of TOTAL_SCREENS) {
      let screenFromDom = document.getElementById(screen.screen_name);
      if (!screenFromDom) continue;

      let fullyVisable = this.isElementInView(screenFromDom, "complete");
      let partiallyVisible = this.isElementInView(screenFromDom, "partial");

      if (fullyVisable || partiallyVisible) {
        if (partiallyVisible && !screen.alreadyRendered) {
          ScrollService.currentScreenFadeIn.next({
            fadeInScreen: screen.screen_name,
          });
          screen["alreadyRendered"] = true;
          break;
        }
        if (fullyVisable) {
          ScrollService.currentScreenBroadCaster.next({
            screenInView: screen.screen_name,
          });
        }
      }
    }
  };
}
