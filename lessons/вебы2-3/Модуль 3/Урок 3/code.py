#Выводит четные числа
#a = input().split()
#for i in a:
#    if int(i)%2==0:
#        print(i, end=" ")

#a = input().split()
#for i in range (0, len(a), 2):
#    print(a[i], end=' ')

#a = input().split()
#n = int(input())
#ita = 0
#for i in range(len(a)):
#    if int(a[i])>=n:
#        ita+=1
#print(ita+1)

#a = input().split()
#k = int(input())
#for i in range(k+1, len(a)):
#    a[i - 1] = a[i]
#a.pop()
#for i in a:
#    print(i, end=' ')

#Множества
#print(len(set(input().split())))
#print(len(set(input().split()) & set(input().split())))

#Проверка повторяющих чисел
#my_set = set()
#s = input().split()
#for i in s:
#    if int(i) in my_set:
#        print('YES')
#    else:
#        my_set.add(int(i))
#        print('NO')

#a = set(input().split())
#b = set(input().split())
#l = list(a & b)
#for i in range(len(l)):
#    l[i] = int(l[i])
#l.sort()
#for i in l:
#    print(i, end=' ')

#counter = {}
#for word in input().split():
#    counter[word] = counter.get(word, 0) + 1
#    print(counter[word] - 1, end=' ')

#n = int(input())
#votes = {}
#
#for i in range(n):
#    tmp = input().split()
#    votes[tmp[0]] = votes.get(tmp[0],0)+int(tmp[1])
#
#for elem in sorted(votes):
#    print(elem + ' ' + str(votes[elem]))

n = int(input())
words={}
mx = 0
for i in range(n):
    tmp = input().split()
    for elem in tmp:
        words[elem] = words.get(elem, 0)+1
        if mx < words[elem]:
            mx = words[elem]
for elem in sorted(words):
    if words[elem]==mx:
        print (elem)
        break

#for k in sorted(d.keys()):
#    if d[k]==m:
#        print(k)
#        break