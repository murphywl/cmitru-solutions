#s = input()
#print(len(s))

#s = input()
#out = ''
#for i in range(1, len(s)+1):
#    out += s[i*-1]
#print(out)

#s = 'Привет'
#print(s[0])
#print(s[4])
#print(s[-2])
#print(s[-6])

#Удаление крайних букв
#s = input()
#for i in range(0, len(s)//2):
#    print(s)
#    s=s[1:-1]

#s = input()
#if s.find('борщ') >= 0:
#    print('ДА!')
#else:
#    print('Нет борща!')

#s = input()
#if s.find('borscht') >= 0:
#    print('YES')
#else:
#    print('no borscht')

#Перестановка слов
s = input()
s1 = s[:s.find(' ')]
s2 = s[s.find(' ')+1:]
print(s2+ ' ' + s1)

