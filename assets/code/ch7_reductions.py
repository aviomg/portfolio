"""Various functions to help understand the logic behind poly-time reductions described in chapter 7"""

A= [[9, 37, -49], [-31, 42, 25], [-25, 28, 39], [-47, -15, 38], [2, -42, -35], [-28, -47, -2], [36, 15, 23], [-19, -2, -27], [-12, 41, 47], [-47, 46, -33], [43, -13, 20], [-33, 26, -38], [26, -27, -43], [44, -48, 24], [11, -34, 26], [-20, 46, 40], [-33, -15, -1], [15, -26, 33], [-18, -43, 36], [-48, -33, 9], [-4, 31, -24], [32, -23, -27], [-40, -22, -30], [-36, -38, -12], [17, -3, 44], [49, -18, 16], [19, -5, 11], [18, -42, 46], [8, 2, 20], [-7, 17, -47], [2, -15, 26], [46, -33, -44], [41, -45, 34], [-44, 37, -21], [9, -14, 4], [20, 48, 11], [-3, -38, 14], [46, 40, 33], [-37, 44, -28], [25, 19, -33]]

G = [[2, 4, 13, 20, 21, 25], [1, 3, 12, 16, 17, 22, 24, 28, 29], [2, 4, 24, 29], [3, 5, 1, 7, 10, 15, 18, 19, 21, 26], [4, 6, 17, 20, 22], [5, 7, 23, 27], [6, 8, 4, 15, 26, 27, 29], [7, 9, 10, 15, 17, 18, 21, 22], [8, 10, 16, 17, 21, 26, 27, 29], [9, 11, 4, 8, 13, 18, 22, 26, 28, 29], [10, 12, 17, 19, 28, 30], [11, 13, 2, 17, 22, 25], [12, 14, 1, 10, 16, 18, 19, 27], [13, 15, 18, 19, 20, 24], [14, 16, 4, 7, 8, 20, 24, 29, 30], [15, 17, 2, 9, 13], [16, 18, 2, 5, 8, 9, 11, 12, 22, 27, 30], [17, 19, 4, 8, 10, 13, 14, 20, 24, 26, 28], [18, 20, 4, 11, 13, 14, 21, 22, 23, 24], [19, 21, 1, 5, 14, 15, 18, 25, 26, 29], [20, 22, 1, 4, 8, 9, 19], [21, 23, 2, 5, 8, 10, 12, 17, 19, 28], [22, 24, 6, 19], [23, 25, 2, 3, 14, 15, 18, 19], [24, 26, 1, 12, 20], [25, 27, 4, 7, 9, 10, 18, 20, 28, 29], [26, 28, 6, 7, 9, 13, 17], [27, 29, 2, 10, 11, 18, 22, 26], [28, 30, 2, 3, 7, 9, 10, 15, 20, 26], [29, 11, 15, 17]]

def decrement_matrix(arr):
    ans = arr
    for i in range(0,len(arr)):
        for n in range(0,len(arr[i])):
            ans[i][n] = (arr[i][n]) - 1
    return ans

def num__edges_3sat_is(A):
    num = 0
    for i in range(0,len(A)):
        for n in range(0,len(A[i])):
            curr = A[i][n]
        # print(f"{curr} at clause {i}")
            for j in range(i+1,len(A)):
                for k in range(0,len(A[j])):
                    comp = A[j][k] * -1
                    if comp == curr:
                        num+=1
    total_norm_edges = len(A) * 3
    return (num + total_norm_edges)
  
def num_nodes(G):
    return len(G)
def num_edges_undir(G1):
    num = 0
    for i in range(0,len(G1)):
        for n in range(0,len(G1[i])):
            if G1[i][n] > i:
                num+=1
    return num