from numpy.random import seed
from numpy.random import randint

a = [8,5,1,7,3,9]
a1 = [1,3,5,7,8,9]
seed(1)
values = randint(1,100,30)
values1 = randint(1,100,80)
values2 = randint(1,100,50)
A = [-1,0,1,2] #ansa = [0,1,1,4]
B = [-8,-3,3,6,7] #ansb=[9,9,36,49,64]
C=[-8,-6,-5,-4,0,2,5,9] #ansc = 0, 4, 16, 25, 25, 36, 64, 81


#Q2:
def maximized_indices(arr):
    i = 0
    j = len(arr)-1
    num=0
    ansi=0
    ansj=0
    while i<j:
        temp = (j-i)*(min(arr[i],arr[j]))
        if temp>num:
            num = temp
            ansi = i
            ansj=j
        if arr[i] < arr[j]:
            i+=1
        elif arr[j] < arr[i]:
            j-=1
    return ansi,ansj

#Q3:
def return_sorted_squares(A):
    i = 0
    j = len(A)-1
    ans = [1000] * len(A)
    end = len(A)-1
    while i<=j:
        if i == j:
            #add that element to end, which should actually be start at this point
            ans[end] = A[i] * A[i]
            print(ans)
            break
        if (A[i] * A[i]) > (A[j] * A[j]):
            ans[end] = A[i] * A[i]
            end-=1
            i+=1
            print(ans)
        elif (A[j] * A[j]) >= (A[i] * A[i]):
            ans[end] = A[j] * A[j]
            end-=1
            j-=1
    return ans

arr = [[4,2,1],[2,3,1]]
n=4

#Q6:
def dish_ranking(A,n):
    graph = [] * n
    graph = [[0] * n for i in range(n)]
    print(graph)
    l = len(A[1]) #dishes per judge
    k = len(A) #number of judges
    #create dir graph for first judge:
    for i in range(2, l+1): #change to 2, l+1 for hw.. i=[1,2]
        graph[A[1][i-1]].append(A[1][i]) #APPENDED 2 to graph 4 ind 4
        #graph at [a[0][1] -1] = graph at 1
        i+=1
  

  #  for i in range(1,len(A[0])): #for every judge
   #     print(f"i is {i} and a at i is {A[0][i]}")
    #    print(f"appending {A[0][i]} to graph at i-1={i-1}")
     #   graph[i-1].append(A[0][i])
      #  print(graph)
    return graph

dish_ranking(arr,n)











    
        

    
