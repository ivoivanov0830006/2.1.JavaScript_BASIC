exam_hours = int(input())
exam_minutes = int(input())
arrival_hours = int(input())
arrival_minutes = int(input())

total_time_exam = exam_hours * 60 + exam_minutes
total_time_arrival = arrival_hours * 60 + arrival_minutes

hours = 0
minutes = abs(total_time_arrival - total_time_exam)

if total_time_arrival > total_time_exam:
    print("Late")
elif total_time_arrival == total_time_exam:
    print("On time")
elif total_time_arrival < total_time_exam:
    if minutes <= 30:
        print("On time")
    else:
        print("Early")
if minutes < 60 and total_time_arrival < total_time_exam:
    print(f"{minutes} minutes before the start")
elif minutes < 60 and total_time_arrival > total_time_exam:
    print(f"{minutes} minutes after the start")
elif minutes >= 60 and total_time_arrival < total_time_exam:
    hours = minutes // 60
    minutes = minutes % 60
    if minutes < 10:
        print(f"{hours}:0{minutes} hours before the start")
    else:
        print(f"{hours}:{minutes} hours before the start")
elif minutes >= 60 and total_time_arrival > total_time_exam:
    hours = minutes // 60
    minutes = minutes % 60
    if minutes < 10:
        print(f"{hours}:0{minutes} hours after the start")
    else:
        print(f"{hours}:{minutes} hours after the start")

#Студент трябва да отиде на изпит в определен час (например в 9:30 часа). 
#Той идва в изпитната зала в даден час на пристигане (например 9:40). 
#Счита се, че студентът е дошъл навреме, ако е пристигнал в часа на изпита 
#или до половин час преди това. Ако е пристигнал по-рано повече от 30 минути, той е подранил. 
#Ако е дошъл след часа на изпита, той е закъснял. Напишете програма, която прочита време 
#на изпит и време на пристигане и отпечатва дали студентът е дошъл навреме, дали е 
#подранил или е закъснял и с колко часа или минути е подранил или закъснял.
#Вход
#От конзолата се четат 4 цели числа (по едно на ред), въведени от потребителя:
#⦁	Първият ред съдържа час на изпита - цяло число от 0 до 23;
#⦁	Вторият ред съдържа минута на изпита - цяло число от 0 до 59;
#⦁	Третият ред съдържа час на пристигане - цяло число от 0 до 23;
#⦁	Четвъртият ред съдържа минута на пристигане - цяло число от 0 до 59.
#Изход
#На първия ред отпечатайте:
#⦁	"Late", ако студентът пристига по-късно от часа на изпита;
#⦁	"On time", ако студентът пристига точно в часа на изпита или до 30 минути по-рано;
#⦁	"Early", ако студентът пристига повече от 30 минути преди часа на изпита.
#Ако студентът пристига с поне минута разлика от часа на изпита, отпечатайте на следващия ред:
#⦁	"mm minutes before the start" за идване по-рано с по-малко от час;
#⦁	"hh:mm hours before the start" за подраняване с 1 час или повече. Минутите винаги печатайте с 2 цифри, например "1:05”;
#⦁	 "mm minutes after the start" за закъснение под час;
#⦁	"hh:mm hours after the start" за закъснение от 1 час или повече. Минутите винаги печатайте с 2 цифри, например "1:03”.
#Вход               Изход
#9                  Late
#30                 20 minutes after the start
#9
#50
#----------------------------------------------------
#9                  On time
#00                 30 minutes before the start
#8
#30
#----------------------------------------------------
#16                 Early
#00                 1:00 hours before the start
#15
#00
#----------------------------------------------------
#10                 On time
#00
#10
#00
