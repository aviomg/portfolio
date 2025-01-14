"""Chapter 8.2"""
def load_balancing_2approx(l,m):
    n = len(l)
    machines = [0] * m
    for i in range(0,n):
        load = l[i] #the job #i being considered
        curr = 1000
        index = 0
        for j in range(0,m):
            if machines[j] < curr:
                curr = machines[j]
                index = j
        print(f"adding load {load} to machine #{index}")
        machines[index] += load
    makespan = 0
    ind = 0
    for j in range(0,m):
        if machines[j] > makespan:
            makespan = machines[j]
            ind = j
    return makespan
