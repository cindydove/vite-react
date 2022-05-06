// 问题
// 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
// 示例:
//   输入: n = 4, k = 2
// 输出:
//   [
//     [2,4],
//     [3,4],
//     [2,3],
//     [1,2],
//     [1,3],
//     [1,4],
//   ]

// function myCombine(n, k) {
//     const res = [];
//
//     const helper = (start, prev) => {
//         if (prev.length === k) {
//             res.push(prev);
//             return;
//         }
//         if (n - start + 1 >= k - prev.length) {
//             for (var i = start; i <= n; i++) {
//                 helper(i + 1, prev.concat(i));
//             }
//         }
//     };
//     helper(1, []);
//     return res;
// }
// console.log('dx---myCombine', myCombine(4, 2));

// 获取数组的交集
//
// function jiaoji(arr1, arr2) {
//     const map = new Map();
//     const newArr = [];
//     arr1.forEach((item) => map.set(item, 0));
//     arr2.forEach((item) => {
//         if (map.has(item)) {
//             if (map.get(item) === 0) {
//                 newArr.push(item);
//             }
//             map.set(item, map.get(item) + 1);
//         }
//     });
//     return newArr;
// }
//
// console.log('dx---jiaoji', jiaoji([1, 2, 3, 4, 5, 6], [4, 5, 7, 4, 5, 8]));

//获取最长不重复字符串
// function lengthOfLongestSubstring(str) {
//     if (str === '') return 0;
//     let start = 0,
//         maxLen = 0;
//     const map = new Map();
//     const len = str.length;
//     for (let i = 0; i < len; i++) {
//         const c = str[i];
//         if (map.has(c)) {
//             start = Math.max(map.get(c) + 1, start);
//         }
//         map.set(c, i);
//         maxLen = Math.max(i - start + 1, maxLen);
//     }
//     return maxLen;
// }
//
// console.log('dx---abcabcdabcdef', lengthOfLongestSubstring('abcabcdabcdef'));

// todo    获取二叉树最深子节点并返回

// 假设你是一位很棒的家长，想要给你的孩子们一些小饼干。
// 但是，每个孩子最多只能给一块饼干。对每个孩子 i ，都有一个胃口值  gi ，
// 这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j ，都有一个尺寸 sj 。如果 sj >= gi
// ，我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。你的目标是尽可能满足越多数量的孩子，
// 并输出这个最大数值。
// 输入: [1,2,3], [1,1]
//
// 输出: 1
//
// 解释:
// 你有三个孩子和两块小饼干，3个孩子的胃口值分别是：1,2,3。
// 虽然你有两块小饼干，由于他们的尺寸都是1，你只能让胃口值是1的孩子满足。
// 所以你应该输出1。
// 示例 2:
//
// 输入: [1,2], [1,2,3]
//
// 输出: 2
//
// 解释:
// 你有两个孩子和三块小饼干，2个孩子的胃口值分别是1,2。
// 你拥有的饼干数量和尺寸都足以让所有孩子满足。
// 所以你应该输出2.
//

// function findContentChildren(child, cookie) {
//     const newChild = child.sort((a, b) => a - b);
//     const newCookie = cookie.sort((a, b) => a - b);
//
//     const childLen = child.length;
//     const cookieLen = cookie.length;
//
//     console.log('dx---newChild,newCookie', newChild, newCookie);
//     let childIndex = 0;
//     let cookieIndex = 0;
//     let count = 0;
//
//     // for (let i = 0; i < newChild.length; i++) {
//     //     console.log('dx-i，cookieIndex', i, cookieIndex);
//     //     if (newCookie[cookieIndex] >= newChild[i]) {
//     //         count++;
//     //         cookieIndex++;
//     //         continue;
//     //     } else {
//     //         i--;
//     //         cookieIndex++;
//     //     }
//     // }
//
//     while (childIndex < childLen && cookieIndex < cookieLen) {
//         if (newChild[childIndex] <= newCookie[cookieIndex]) {
//             cookieIndex++;
//             childIndex++;
//             count++;
//         } else {
//             cookieIndex++;
//         }
//     }
//     return count;
// }
//
// console.log('dx---findContentChildren', findContentChildren([1, 2, 4], [1, 2, 3, 4]));


// 真题描述： 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
// 给定 nums = [2, 7, 11, 15], target = 9

// 真题描述：给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

