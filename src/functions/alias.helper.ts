export class AliasHelper {
  static generateAlias(text: string) {
    text = AliasHelper.normalizeChars(text);

    // remove any '-' from the string they will be used as concatonater
    text = text.replace(/-/g, " ");
    text = text.replace(/_/g, " ");

    // $lang =& JFactory::getLanguage();
    // $str = $lang->transliterate($str);
    // remove any duplicate whitespace, and ensure all characters are alphanumeric
    text = text.replace(/\s+/g, "-");
    text = text.replace(/[^A-Za-z0-9-]/g, "");

    // lowercase and trim
    text = text.toLowerCase().trim();
    return text;
  };

  private static normalizeChars(text: string) {
    var replace: { [key: string]: string } = {
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "Ae",
      Å: "A",
      Æ: "A",
      Ă: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "ae",
      å: "a",
      ă: "a",
      æ: "ae",
      þ: "b",
      Þ: "B",
      Ç: "C",
      ç: "c",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ğ: "G",
      ğ: "g",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      İ: "I",
      ı: "i",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "Oe",
      Ø: "O",
      ö: "oe",
      ø: "o",
      ð: "o",
      ñ: "n",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      Š: "S",
      š: "s",
      Ş: "S",
      ș: "s",
      Ș: "S",
      ş: "s",
      ß: "ss",
      ț: "t",
      Ț: "T",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "Ue",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "ue",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Ž: "Z",
      ž: "z",
    };

    var normalized = "";
    for (var i = 0; i < text.length; i++) {
      const current = text.charAt(i);
      normalized += replace[current] ? replace[current] : current;
    }

    return normalized;
  };
}