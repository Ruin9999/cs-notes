/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

let nums1 = [];
let m = 0;
let nums2 = [1];
let n = 1;

const merge = function(nums1, m, nums2, n) {
    let len = m + n - 1;
    let mIndex = m - 1, nIndex = n - 1;
    while(mIndex >= 0 && nIndex >= 0) {
        if(nums1[mIndex] > nums2[nIndex]) {
            nums1[len] = nums1[mIndex];
            mIndex--;
        } else {
            nums1[len] = nums2[nIndex];
            nIndex--;
        }
        len--;
    }
    while(nIndex >= 0) {
        nums1[len] = nums2[nIndex];
        len--;
        nIndex--;
    }
};

merge(nums1, m, nums2, n);
console.log(nums1);