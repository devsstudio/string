import { AliasHelper } from "./functions/alias.helper";
import UrlHelper from "./functions/url.helper";

export function generateAlias(text: string) {
  return AliasHelper.generateAlias(text);
};

export function getJsonQuery(url: string) {
  return UrlHelper.getJsonQuery(url);
};

export function generateQueryString(params: any, skipobjects: any, prefix: any) {
  return UrlHelper.generateQueryString(params, skipobjects, prefix);
};
