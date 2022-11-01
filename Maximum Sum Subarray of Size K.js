
// brute force method
// function max_sum_subarray_size_k(arr,k){
//     let finalArray = [];
//     for(let i=0; i< arr.length -k+1 ; i++){
//         let sum = 0;
//         for(let j=i; j< k+i; j++){
//             sum = sum+arr[j];
//         }
//         sum= sum/k;
//         finalArray.push(sum)
//     }
//     return finalArray;
// }

//sliding window method
function max_sum_subarray_size_k(arr,k){
    let finalArray = [];
    let sum = 0;
    let start = 0;
    for(let i=0; i<arr.length; i++){
        sum +=  arr[i];
        if(i >= k-1){
            finalArray.push((sum/k));
            sum -= arr[start];
            start++;
        }
    }
    return finalArray;
}


console.log(max_sum_subarray_size_k([1, 3, 2, 6, -1, 4, 1, 8, 2], 5));