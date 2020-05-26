import messages_fr from "./translations/fr.json";

const DEFAULT_CONFIG = {
  "translations": [{ key: 'fr', messages: messages_fr }],
}

export const LanguageFrModule = (cfg) => {
  return { ...DEFAULT_CONFIG, ...cfg };
}