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
