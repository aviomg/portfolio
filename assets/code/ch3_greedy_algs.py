
import math
import numpy as np
from ch1_array_algorithms import selection_sort

"""Chapter 3.1: Minimum Spanning Tree"""
def prims_algorithm(G1):
    G = transform_2D_matrix(G1)
    n = len(G)
    S = [0] * n
    S[0] = 1
    F = []
    for i in range(0,n-1): #start: i = 0
        lightest = 1000
        lnode = 1000
        rec_node = 1000
        for v in range (0,n-1):
            for u in G[v]:
                if S[u[0]] == 1 or S[v] == 1:
                    if S[v] == 0:
                        if u[1] < lightest:
                            lightest = u[1]
                            lnode = v
                            rec_node = u[0]
                    elif S[u[0]] == 0:
                        if u[1] < lightest:
                            lightest = u[1]
                            lnode = u[0]
                            rec_node = v
        S[lnode] = 1
        if lnode < rec_node:
            F.append((lnode+1,rec_node+1))
        elif lnode>rec_node:
            F.append((rec_node+1,lnode+1))
    return F
    

def transform_2D_matrix(Graph):
    ans = [x[:] for x in Graph]
    for i in range(len(ans)):
        for j in range(len(ans[i])):
            ans[i][j][0]-=1
    return ans

"""Chapter 3.2: Selecting Compatible Intervals """
def sci(A):
    sorted = selection_sort_for_sci(A)
    S = []
    for event in sorted:
        if len(S) == 0:
            S.append(event)
        else:
            start = event[0]
            end = event[1]
            if S[-1][1] < start:
                S.append(event)
    return S

def selection_sort_for_sci(arr):
    for i in range(0,len(arr)): 
        m = i 
        for j in range((i+1),len(arr)):
            if arr[j][1] < arr[m][1]: 
                m = j 
        temp = arr[i] 
        arr[i] = arr[m] 
        arr[m] = temp    
    return arr

"""Chapter 3.3: Fractional Knapsack"""
def frac_ks(v,w,b):
    unsorted = []
    curr = 0
    for i in range(0,len(v)):
        value = v[i]/w[i]
        unsorted.append([i, value])
    ratios = selection_sort_for_sci(unsorted)
    x = [0] * len(v)
    for i in range(len(v)-1,-1,-1):
        it_num = ratios[i][0]
        it_weight = w[it_num]
        it_val = v[it_num]
        if (curr + it_weight) <= b:
            x[it_num] = 1
            curr = curr + it_weight
        else:
            val = (b - curr)/it_weight 
            x[it_num] = val
            curr = curr + (val * it_weight)
    optimal = 0
    for i in range(0,len(v)):
        addon = x[i] * v[i]
        optimal = optimal + addon
    return x, optimal
