graph = [1,3],[2,3], [4,5], [2,4] ,[1] ,[4]
pre = [1000] * len(graph)
post = [1000] * len(graph)
t=1


def Explore(graph,u):
    pre[u] = t #pre[0] = 1 #pre[2]
    print(f"pre is now {pre} for index {u}")
    t+=1 #t = 2
    for v in graph[u]: #v = 1
        print(f"now analtzing v={v}")
        if pre[v] == 1000:
            print(f"passing in t = {t}")
            Explore(graph,v,pre,post,t) #v=2, t=2
    post[u] = t
    t+=1
    print(f"pre after exploring node {u} is {pre}")
    print(f"post after exploring node {u} is {post}")
    print(f"at this point t is {t}")


for u in range(len(graph)): 
    if pre[u] == 1000:
        Explore(graph,u) #u=0, t=1

print(pre)
print(post)