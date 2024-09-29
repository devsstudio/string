import { AliasHelper } from "./functions/alias.helper";
import UrlHelper from "./functions/url.helper";
import * as urlClass from "./legacy/url";

export function generateAlias(text: string) {
  return AliasHelper.generateAlias(text);
};

export function getJsonQuery(url: string) {
  return urlClass.getJsonQuery(url);
};

export function generateQueryString(params: any, skipobjects: any, prefix: any) {
  return UrlHelper.generateQueryString(params, skipobjects, prefix);
};
