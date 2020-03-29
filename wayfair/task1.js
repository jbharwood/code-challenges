function solution(A) {
    let ans = 0;
    for (let i = 0; i < A.length; i++) {
      if (ans > A[i]) {
          ans = A[i];
      }
    }
    return ans;
}

console.log(solution([-5, 1, -2, 2, 0]));
