function lengthOfLongestSubstring(str) {
    if (str === '') return 0;
    let start = 0,
        maxLen = 0;
    const map = new Map();
    const len = str.length;
    for (let i = 0; i < len; i++) {
        const c = str[i];
        if (map.has(c)) {
            start = Math.max(map.get(c) + 1, start);
        }
        map.set(c, i);
        maxLen = Math.max(i - start + 1, maxLen);
    }
    return maxLen;
}

console.log('dx---abcabcdabcdef', lengthOfLongestSubstring('abcabcdabcdef'));

function maxLength(str) {
    if (!str) return 0;
    let startIndex = 0;
    let maxLen = 0;
    let maxStr = '';
    const map = new Map();
    for (let i = 0; i < str.length; i++) {
        const current = str[i];
        if (map.has(current)) {
            startIndex = Math.max(map.get(current) + 1, startIndex);
        }
        map.set(current, i);
        if (i - startIndex + 1 > maxLen) {
            maxStr = str.slice(startIndex, i + 1);
        }
        maxLen = Math.max(i - startIndex + 1, maxLen);
    }
    return {
        maxLen,
        maxStr
    };
}
console.log('dx---abcabcdabcdef', maxLength('abcabcdabcdef'));
