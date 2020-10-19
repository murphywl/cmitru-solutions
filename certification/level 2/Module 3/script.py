inp = input()
l = len(inp)
m = 0
ind = 0
count = 0
for i in range(l):
    if inp[i] != ' ':
        count += 1
    else:
        if count > m:
            m = count
            ind = i - count
        count = 0
 
if count > m:
    m = count
    ind = i - count + 1
 
print(inp[ind:ind+m])
