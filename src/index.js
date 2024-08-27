import messages_km from "./translations/km.json";
//import messages_fr from "./translations/fr.json";

const DEFAULT_CONFIG = {
  "translations": [{ key: 'km', messages: messages_km}],
}

export const LanguagekmModule = (cfg) => {
  return { ...DEFAULT_CONFIG, ...cfg };
}