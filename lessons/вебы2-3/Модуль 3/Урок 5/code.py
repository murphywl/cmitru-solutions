#Возведенеие в степень
#a = float(input('Введите число?: '))
#n = int(input('Введите степень?: '))
#
#def power(num, pw):
#    if pw == 0:
#        return 1
#    else:
#        return num*power(num,pw-1)
#
#print(power(a, n))

#Функции
#def myFunction(fullName):
#    print("Привет, " + fullName)
#myFunction("Борислав")
#myFunction("Николай")
#myFunction("Анастасия")
#myFunction("Константин")
#myFunction("Марк")
#myFunction("Максим")
#myFunction("Илья")
#myFunction("Данис")
#myFunction("Юлия")
#myFunction("Андрей")

#def myFunction(a,b,c):
#    print(a*b/c)

#myFunction(2,3,2)

#Ball
#class Ball:
#    color = "Красный"
#    size = 15
#
#    def __init__(self, color, size):
#        self.color = color
#        self.size = size
#
#    def Jump(self):
#        print(self.color + " мячик размера " + str(self.size) + " сделал прыг!")
#
#Myach = Ball("Синий", 12)
#Myach.color = "Зеленый"
#Myach.size = 32
#Myach.Jump()

##Наследование
#class Bird:
#    def Fly(self):
#        print("Умеет летать!")
#
#class Duck(Bird):
#    def Swim(self):
#        print("Умеет плавать!")
#
#class Penguin(Bird):
#    def Fly(self):
#        print("Отпустите! Я не умею летать!")
#
#bird1 = Duck()
#bird1.Fly()
#
#bird2 = Penguin()
#bird2.Fly()

class Car:
    def Drive(self):
        print("Еду")
    def Collect(self):
        print("Погрузил")
    def Fill(self):
        print("Заправился")

class Passenger(Car):
    def Collect(self):
        print("Погрузил")
    def Fill(self):
        print("Заправился на 100 рублей")

class Truck(Car):
    def Drive(self):
        print("Не заводиться")
    def Fill(self):
        print("Заправился на 500 рублей")

class Belazar(Car):
    def Collect(self):
        print("Погрузил все, что было")
    def Fill(self):
        print("Заправился на 1000 рублей")


