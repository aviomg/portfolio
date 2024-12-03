A = [-1,0,1,2] #[0,1,1,4]
B = [-8,-3,3,6,7] #[5,3,3,6,8]
#ansa = [0,1,1,4]
#ansb=[9,9,36,49,64]
C=[-8,-6,-5,-4,0,2,5,9]
#ansc = 0, 4, 16, 25, 25, 36, 64, 81



def return_sorted_squares(A):
    i = 0
    j = len(A)-1
    ans = [1000] * len(A)
    end = len(A)-1
    while i<=j:
        print(f"i is now {i} and j is now {j}")
        if i == j:
            #add that element to end, which should actually be start at this point
            ans[end] = A[i] * A[i]
            print(f"added {A[i] * A[i]}")
            print(ans)
            break
        if (A[i] * A[i]) > (A[j] * A[j]):
            ans[end] = A[i] * A[i]
            print(f"added {A[i] * A[i]} bc i was greater than j")
            end-=1
            i+=1
            print(ans)
        elif (A[j] * A[j]) >= (A[i] * A[i]):
            ans[end] = A[j] * A[j]
            print(f"added {A[j] * A[j]} bc j was greather than i ")
            end-=1
            j-=1
            print(ans)
    print("done!")
    return ans
            





print(return_sorted_squares(C))