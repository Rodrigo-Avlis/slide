import Debounce from "./modules/debounce.js";
import Slide from "./modules/slide.js";

const slide = new Slide(".slide", ".wrapper");
slide.init();

const debounce = new Debounce();
debounce.init();
