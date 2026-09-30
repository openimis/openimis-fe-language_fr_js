import { describe, expect, it } from "vitest";
import { createIntl } from "react-intl";

import { LanguageFrModule } from "./index";

const [{ messages }] = LanguageFrModule().translations;
const { formatters } = createIntl({ locale: "fr", messages });

const malformed = Object.entries(messages).filter(([, message]) => {
  try {
    formatters.getMessageFormat(message, "fr");
    return false;
  } catch {
    return true;
  }
}).map(([id]) => id);

const KNOWN_MALFORMED = [
  "policyHolder.deletePolicyHolder.confirm.message",
  "policyHolder.CreatePolicyHolderInsuree.mutationLabel",
  "policyHolder.UpdatePolicyHolderInsuree.mutationLabel",
  "policyHolder.DeletePolicyHolderInsuree.mutationLabel",
  "policyHolder.ReplacePolicyHolderInsuree.mutationLabel",
  "individual.enrollment.confirmMessageDialog",
  "individual.enrollment.confirmGroupMessageDialog",
  "admin.password.lowerCase",
  "admin.password.upperCase",
  "admin.password.numbers",
  "admin.password.specialCharacters",
  "ClaimSampling.samplingSummaryTemplate.deductibles",
];

describe("French translations", () => {
  // Currently fails: a dozen messages had their ICU placeholders or plural keywords
  // machine-translated ("{nom du commerce}", "{compte, pluriel, un ...}"), which no longer
  // parse, so react-intl reports an error and shows the raw string instead.
  it.fails("contains only messages that parse as ICU MessageFormat", () => {
    expect(malformed).toEqual([]);
  });

  it("has no malformed messages beyond the known ones", () => {
    expect(malformed.filter((id) => !KNOWN_MALFORMED.includes(id))).toEqual([]);
  });
});
