module.exports = function check(str, bracketsConfig) {
    // your solution

    let arr = str.split('');

    if(arr.length%2===0) {
        for (let i = 0; i < bracketsConfig.length; i++) {
            if(bracketsConfig[i][0].localeCompare(bracketsConfig[i][1])===0) {
                while(((arr.lastIndexOf(bracketsConfig[i][0]) - arr.indexOf(bracketsConfig[i][0])) % 2 !== 0)){
                    arr.splice(arr.indexOf(bracketsConfig[i][0]), 1);
                    arr.splice(arr.lastIndexOf(bracketsConfig[i][0]), 1);
                }
            }else{
                while ( (((arr.lastIndexOf(bracketsConfig[i][1]) - arr.lastIndexOf(bracketsConfig[i][0])) % 2 !== 0)) &&
                ((arr.lastIndexOf(bracketsConfig[i][1]) - arr.lastIndexOf(bracketsConfig[i][0])) > 0)) {
                    arr.splice(arr.lastIndexOf(bracketsConfig[i][0]), 1);
                    arr.splice(arr.lastIndexOf(bracketsConfig[i][1]), 1);
                }
            }
            let flag = true;
                while ((flag) && (arr.length!==0)) {
                    if ((arr[0].localeCompare(bracketsConfig[i][0]) === 0) && (arr[arr.length - 1].localeCompare(bracketsConfig[i][1]) === 0)) {
                        arr.pop();
                        arr.shift();
                        console.log('cut ends');
                        console.log(arr.length);
                    } else {
                        flag = false
                    }
                }
        }
    }

    return arr.length === 0;

};
//else if((arr.indexOf(bracketsConfig[i][0])!== -1) || (arr.indexOf(bracketsConfig[i][1])!== -1)){