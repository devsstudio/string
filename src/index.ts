import { AliasHelper } from "./functions/alias.helper";
import { AmountToLettersHelper } from "./functions/amount-to-letters.helper";
import * as urlClass from "./functions/url";

export function generateAlias(text: string) {
  return AliasHelper.generateAlias(text);
};

export function getJsonQuery(url: string) {
  return urlClass.getJsonQuery(url);
};

export function generateQueryString(params: any, skipobjects: any, prefix: any) {
  return urlClass.generateQueryString(params, skipobjects, prefix);
};
