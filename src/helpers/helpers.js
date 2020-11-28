/**
 *
 * @param word
 * @returns {string}
 */
export const barzonator = (word) => {
    let wordInSyllables = splitIntoSyllables(word);
    try {
        let barzoned = (wordInSyllables[wordInSyllables.length-1].charAt(0)
            + [...wordInSyllables.map((w, key) => {
                if (key === 0) return w.slice(1)
                if (key === wordInSyllables.length -1) return wordInSyllables[0].charAt(0) + w.slice(1)
                return w;
            })]).toLowerCase();
        return barzoned.replaceAll(',','')
    } catch (e) {
        return '';
    }
};

/**
 *
 * @param word
 * @returns {string[] | boolean | SnapshotReturnOptions | void | RegExpMatchArray | Promise<Response | undefined> | *}
 */
export const splitIntoSyllables = (word) => {
    const syllableRegex = /[^aeiouy]*[aeiouy]+(?:[^aeiouy]*$|[^aeiouy](?=[^aeiouy]))?/gi;
    return word?.match(syllableRegex);
};