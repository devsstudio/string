import { AliasHelper } from "./alias.helper";

export function generateAlias(text: string) {
  return AliasHelper.generateAlias(text);
};

// exports.capture = (regex, text) => {
//   var matches = text.match(regex);

//   if (Array.isArray(matches) && matches.length > 1 && matches[1].length > 0) {
//     return matches[1][0];
//   } else {
//     return false;
//   }
// };

// exports.endsWith = (haystack, needle) => {
//   return (
//     needle === "" ||
//     ((temp = haystack.length - needle.length) >= 0 &&
//       strpos(haystack, needle, temp) !== FALSE)
//   );
// };

export class StringHelper {
  public static split(str: string, delimiter: string, limit: number = 0) {
    if (limit <= 0) {
      return [str];
    }

    const parts = str.split(delimiter);

    if (parts.length <= limit) {
      return parts;
    }

    const result = parts.slice(0, limit - 1);
    result.push(parts.slice(limit - 1).join(delimiter));

    return result;
  }
}