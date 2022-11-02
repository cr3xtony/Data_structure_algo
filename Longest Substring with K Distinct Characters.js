
const longest_substring_with_k_distint_characters = (s, k) =>{
    let startPos = 0;
    let substring_length = 0;
    const obj ={};
    let distinctCharacterLength = 0;
    for(let i=0; i < s.length; i++){
        if(!obj.hasOwnProperty(s[i])){
            obj[s[i]] = true;
            distinctCharacterLength++;
        }

        if(distinctCharacterLength === k+1){
            substring_length = Math.max(substring_length, (i -startPos))
            delete obj[s[startPos]];
            distinctCharacterLength--;
            startPos++;
        }

    }
    if(distinctCharacterLength === 0) return s.length;
    return substring_length;
}

console.log(longest_substring_with_k_distint_characters('cbbebi', 3))