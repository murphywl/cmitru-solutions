#print('Hello') 
#print(5 + 10)
#print(3*7, (17-2) * 8)
#print(2**16) #Возведение в степень **
#print(37 / 3) 
#print(37 // 3) #Целое число
#print(37 % 3) #Остаток

#print('Hello, What is your name?')
#name = input()
#print('Nice to meet you, ' + name +' !')

#n = int(input())
#n = n % (60*24)
#hour = n//60
#minute = n%60
#print(str(hour) + ':' + str(minute))

#x = int(input())
#y = int(input())
#if x > 0 and y > 0:
#	print('1 part')
#elif x > 0 and y < 0:
#	print('4 part')
#else:
#	print('all')

#year = int(input())
#if year%4 == 0 and year%100 != 0 or year%400 == 0:
#	print('YES')
#else:
#	print('NO')

#A = int(input())
#B = int(input())
#
#for i in range(A, B+1):
#	print(i)
#
#for i in range(0, 100, 5):
#	print(i)

n = int(input())
out = ''
for i in range(1, n+1):
	for k in range (1,  i+1):
		out+=str(k)
	print(out)
	out=''

