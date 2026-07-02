function isMax(arr) {
    let max =arr[0]

    for (let i=0; i<arr.length ;i++){
       if(arr[i]>max){
        max=arr[i]
       }
    }
    return max
}

console.log(isMax([23, 65, 87, 53, 80, 42]));
