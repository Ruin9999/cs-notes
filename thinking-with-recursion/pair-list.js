/* is_list, is_pair, is_null, is_number */
/* function repeatPair(list, n) {
    if(n <= 1) return list;
    return list , repeatPair(list, n - 1);
}

const repeated = repeatPair([1,2,3], 5);

console.log(repeated); */


/* function repeatPair(list, n, res) {

    if(n < 1) return res;
    return(repeatPair(list, n-1, res + "," + list));
}


const repeated = repeatPair([1,2,2], 5, "");

console.log(repeated); */