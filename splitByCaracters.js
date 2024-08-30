exports.splitByCharacters = (str, characters) => {
   characters = characters.map((char) => (char === "\\" ? "\\\\" : char));
   const regex = new RegExp(`[${characters.join("")}]`);

   return str
        .split(regex)
        .map((str) => str.trim())
        .filter(Boolean);
};
