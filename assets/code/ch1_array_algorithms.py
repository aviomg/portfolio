
import math
import numpy as np

"""Chapter 1.1:"""
def max_in_array(arr):
    max = float('-inf')
    ind = 0
    for i in range(0,len(arr)):
        if arr[i] > max:
            max = arr[i]
            ind = i
    return arr[ind]

"""Chapter 1.2"""
def twosum(arr,t):
    i = 1
    j = len(arr) - 1
    while i<j:
        if arr[i] + arr[j] == t:
            return (i,j)
        elif arr[i] + arr[j] > t:
            j -= 1
        elif arr[i] + arr[j] < t:
            i += 1

"""Chapter 1.3"""
def binary_search(arr, t):
    i = 0
    j = len(arr) -1 
    while i <= j:
        m = (i + j) // 2
        if arr[m] == t:
            return f"m is {m + 1} and value at m is {arr[m]}"
        elif arr[m] <t:
            i = m+1
            continue;
        elif arr[m] > t:
            j = m - 1
            continue;   
    return None

"""Chapter 1.4"""
def selection_sort(arr):
    for i in range(0,len(arr)):
        m = i
        for j in range((i+1),len(arr)):
            if arr[j] < arr[m]: 
                m = j 
        temp = arr[i] 
        arr[i] = arr[m] 
        arr[m] = temp 
    return arr

"""Chapter 1.5"""
def merge_sort(arr):
    if len(arr) == 1:
        return arr
    k = math.floor(len(arr)/2)
    arr_L = merge_sort(arr[0:k]) #18,73,98,9
    arr_R = merge_sort(arr[k:len(arr)]) #33, 16,64,58
    i,j,b = 1,1,[]
    while i<=(k) and j<=(len(arr) - k):
        if arr_L[i-1] <= arr_R[j]:
            b.append(arr_L[i])
            i += 1
        else:
            b.append(arr_R[j])
            j+=1
    if i > k:
        for num in arr_R[j:(len(arr)-k)]:
            b.append(num)
    else:
        for num in arr_L[i:k]:
            b.append(num)
    ans = np.array(b)
    return ans
