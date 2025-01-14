import collections

"""In theoretical computer science, arrays index from 1-n. This helper function transforms
input graphs (represented as adjacency lists) to index starting at 0"""
def transform_matrix(Graph):
    ans = [x[:] for x in Graph]
    for i in range(len(ans)):
        for j in range(len(ans[i])):
            ans[i][j]-=1
    return ans

"""Chapter 2.1: Breadth-first search"""
def bfs(graph, s):
    d = [1000] * len(graph)
    d[s] = 0
    Q = collections.deque([s])
    while len(Q) >= 1:
        u = Q.popleft()
        for v in graph[u]: 
            if d[v] == 1000:
                d[v] = d[u] + 1
                Q.append(v)
    return d

"""Chapter 2.2: Depth-first search"""
def Explore(graph, u, pre, post,t):
    pre[u] = t; t+=1 
    for v in graph[u]:
        if pre[v] == 1000:
            print(f"passing in t = {t}")
            t = Explore(graph,v,pre,post,t)
    post[u] = t; t+=1
    return t

def DFS(graph):
    pre = [1000] * len(graph)
    post = [1000] * len(graph)
    t=1
    for u in range(len(graph)): 
        if pre[u] == 1000:
            Explore(graph,u,pre,post,t) #u=0, t=1
    return pre,post
    