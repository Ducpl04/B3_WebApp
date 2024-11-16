function findMax(array){
    let ans = 0 ;
    for (let i = 0; i < 5; i++){
        if(array[i]>ans){
            ans = array[i];
        }
    }
    return ans;
}

array = [ 2.4, 654, 322, 534, 1]

console.log(`max of the array is:` + findMax(array));