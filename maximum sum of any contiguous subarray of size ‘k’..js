function max_sub_array_of_size_k (nums,k){
    let maxSum = 0;
    let sum = 0;
    let startPos = 0;
    for(let i =0; i< nums.length; i++){
        sum += nums[i];
        if(i >= k-1){
            maxSum = Math.max(sum, maxSum);
            sum -= nums[startPos];
            startPos++;
        }

    }
    return maxSum;

}


console.log(max_sub_array_of_size_k([2, 3, 4, 1, 5],2))