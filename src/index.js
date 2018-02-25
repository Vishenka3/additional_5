module.exports = function check(str, bracketsConfig) {
    // your solution
    let arr = str.split('');

    for(let j=1;j<arr.length;j++){
        for(let k=0;k<bracketsConfig.length;k++){
            if(arr.length > 0) {
                if ((arr[j].localeCompare(bracketsConfig[k][1]) === 0) && (j !== 0) && (arr[j - 1].localeCompare(bracketsConfig[k][0]) === 0)) {
                    arr.splice(j - 1, 2);
                    j>1 ? j-=2 : j--;
                }
            }
        }
    }

    return arr.length === 0;
};