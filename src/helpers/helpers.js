/**
 *
 */
export class syllable {
    /**
     *
     * @param word
     * @returns {string}
     */
    static barzonator = (word) => {
        let wordInSyllables = this.splitIntoSyllables(word);
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
    }
    /**
     *
     * @param word
     * @returns {string}
     */
    static swapFirstAndLast = (word) => {
        if (!word.length || typeof word === 'string'){
            word = this.splitIntoSyllables(word)
        }
        if (word?.length > 0 && typeof word !== 'string'){
            let first = word.shift();
            let last = word.pop();
            let swapped = (last + [...word] + first);
            return swapped.replaceAll(',', '');
        }
    }
    /**
     *
     * @param word
     * @returns {*|null}
     */
    static countSyllables = (word) => {
        word = this.splitIntoSyllables(word)
        return word.length ?? null
    }
    /**
     *
     * @param word
     * @returns {*}
     */
    static splitIntoSyllables = (word) => {
        const syllableRegex = /[^aeiouy]*[aeiouy]+(?:[^aeiouy]*$|[^aeiouy](?=[^aeiouy]))?/gi;
        return word?.match(syllableRegex);
    };
}
