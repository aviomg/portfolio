import numpy as np

"""Chapter 4.1"""
def max_in_array(A):
    ans = 0
    for i in range(0,len(A)):
        if A[i] > ans:
            ans = A[i]
    return ans

"""Chapter 4.2"""
def longest_increasing_subsequence(A):
    n = len(A)
    d = [1] * n
    for i in range(1,n):
        for j in range(0,i):
            if A[j] < A[i] and d[i]<(1+d[j]):
                d[i] = 1+d[j]
    return d

"""Chapter 4.3"""
def longest_palindromic_sequence(A):
    n = len(A)
    d = np.zeros((n,n))
    for i in range(n-1, -1, -1):
        d[i][i] = 1
        for j in range(i+1,n):
            if A[i] == A[j]:
                d[i][j] = d[i+1][j-1] + 2
            else:
                d[i][j] = max(d[i+1][j],d[i][j-1])
    return d[1][n-1]

"""Chapter 4.4: 0/1 Knapsack"""
def knapsack(v,w,B):
    n = len(v)
    cols = B+1
    d = np.zeros((n,cols))
    for j in range(1,B+1):
        if j >= w[0]:
            d[0][j] = v[0]
            print(d)
    for i in range(1,n):
        for j in range(1,B+1):
            if (j < w[i]):
                d[i][j] = d[i-1][j]
            else:
                opt1 = d[i-1][j]
                opt2 = d[i-1][j-w[i]] + v[i]
                d[i][j] = max(opt1,opt2)
    return d[n-1][B]
