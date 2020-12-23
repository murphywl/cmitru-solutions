#import math

#x1 = float(input())
#y1 = float(input())
#x2 = float(input())
#y2 = float(input())

#def distance(x1, y1, x2, y2):
#    print(float(math.sqrt(abs(x1-x2)**2 + abs(y1-y2)**2)))

#distance(x1, y1, x2, y2)


inp = input().split()
con = ord('A') - ord('a')

def capitalize(word):
    tmpStr = chr(ord(word[0]) + con) + word[1:]
    return tmpStr

for s in inp:
    print(capitalize(s), end=' ')


