import messages_fr_cm_cs from "./translations/cs_cm.json";
//import messages_fr from "./translations/fr.json";

const DEFAULT_CONFIG = {
  "translations": [{ key: 'fr_cs', messages: messages_fr_cm_cs }],
}

export const LanguageFrCmrCSModule = (cfg) => {
  return { ...DEFAULT_CONFIG, ...cfg };
}