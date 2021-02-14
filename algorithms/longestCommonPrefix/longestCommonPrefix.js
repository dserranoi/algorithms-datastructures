/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var strsLen = strs.length;
    if(strsLen === 0){
        return '';
    }
    if(strsLen === 1){
        return strs[0];
    }
    strs.sort();
    var minLen = Math.min(strs[0].length,strs[strsLen - 1].length);
    var i = 0;
    while(i < minLen && strs[0].charAt(i) === strs[strsLen - 1].charAt(i)){
        i ++;
    }
    var commonPrefix = strs[0].substring(0,i);
    return commonPrefix ;
};
