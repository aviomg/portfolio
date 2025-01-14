import numpy as np

"""Chapter 5.2: Bellman-Ford"""
def reverse_graph(G):
    # Initialize an empty graph with the same number of nodes as G
    reversed_graph = [[] for _ in range(len(G))]
    # Iterate over each node v and its edges
    for v in range(len(G)):
        for u, length in G[v]:
            # For each edge v -> u, add an edge u -> v in the reversed graph
            reversed_graph[u].append([v, length])
    return reversed_graph

def bellman_ford(G,s):
    n = len(G) 
    d = (np.ones((n,n)) * np.inf)
    rev = reverse_graph(G)
    d[s][0] = 0
    for j in range(1,n):
        for v in range(1,n):
            d[v][j] = d[v][j-1]
            for i in range(len(rev[v])):
                u = rev[v][i][0]
                length_uv = rev[v][i][1]
                d[v][j] = min(d[v][j], (d[u][j-1] + length_uv))
    for i in range(0,len(d)):
        print(d[i][n-1])

"""Chapter 5.3: Dijkstra's Algorithm"""
def dijkstras(G,s):
    n = len(G)
    d = [1000] * (n) 
    d[s] = 0 
    S = []
    while(len(S) < (n-1)):
        curr = 10000
        u = 10000
        for i in range(1,len(d)):
            if i not in S:
                if d[i] < curr:
                    curr = d[i]
                    u = i
        S.append(u)
        for i in range(len(G[u])):
            v = G[u][i][0]
            length = G[u][i][1]
            d[v] = min(d[v],d[u] + length)
    return d

"""Helper Function for transforming indices"""
def transform_matrix(Graph):
    ans = [x[:] for x in Graph]
    for i in range(len(ans)):
        for j in range(len(ans[i])):
            ans[i][j]-=1
    return ans