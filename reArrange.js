let tempArr = []
const scarmple = (str, arr) =>{
    const strArr = str.split("")
     tempArr = str.split("")
    for(let i=0; i<strArr.length; i++){
        strArr[arr[i]] = tempArr[i]
    }
    return strArr.join("")

}

console.log(scarmple("abcd", [0,3,1,2]));