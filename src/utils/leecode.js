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
