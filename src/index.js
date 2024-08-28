import messages_km from "./translations/km.json";
//import messages_fr from "./translations/fr.json";
import flatten from "flat";



const DEFAULT_CONFIG = {
  "translations": [{ key: 'km', messages: flatten(messages_km) }],
}
export const LanguagekmModule = (cfg) => {
  return { ...DEFAULT_CONFIG, ...cfg };
}