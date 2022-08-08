position = input()
ticket = input()
total_tickets = int(input())
trophy_picture = input()
price = 0

if position == "Quarter final":
    if ticket == "Standard":
        price = 55.5
    elif ticket == "Premium":
        price = 105.2
    elif ticket == "VIP":
        price = 118.9
elif position == "Semi final":
    if ticket == "Standard":
        price = 75.88
    elif ticket == "Premium":
        price = 125.22
    elif ticket == "VIP":
        price = 300.4
elif position == "Final":
    if ticket == "Standard":
        price = 110.1
    elif ticket == "Premium":
        price = 160.66
    elif ticket == "VIP":
        price = 400

total_sum = price * total_tickets
if total_sum > 4000:
    total_sum *= 0.75
elif total_sum > 2500:
    if trophy_picture == "Y":
        total_sum = total_sum * 0.9 + 40 * total_tickets
    elif trophy_picture == "N":
        total_sum *= 0.9
else:
    if trophy_picture == "Y":
        total_sum = total_sum + 40 * total_tickets
print(f"{total_sum:.2f}")

С наближаването на световното първенство по снукър в театъра Крусибъл в Шефилд, Англия, 
феновете нямат търпение да се сдобият с ценните билети. Заради големия наплив от хора, 
организаторите ви молят да напишете програма за продаване на билети, като се има предвид следния ценоразпис:
	Четвъртфинал	Полуфинал	Финал
Стандартен	55.50 £/бр.	75.88 £/бр.	110.10 £/бр.
Премиум	105.20 £/бр.	125.22 £/бр.	160.66 £/бр.
ВИП	118.90 £/бр.	300.40 £/бр.	400 £/бр.
При закупуване на билет, зрителят може да избере опция, снимка с трофея, на цена 40 лири.
При достигане на определена сума има отстъпки:
Над 4000 лири има 25% отстъпка и безплатни снимки с трофея (ако  опцията за снимки е избрана, 
таксата от 40 лири за билет не се включва)
Над 2500 лири има 10% отстъпка
При избрана опция за снимки с трофея, цената се начислява след изчисляването на отстъпките.
Вход
От конзолата се четат 3 реда:
Етап на първенството – текст - “Quarter final ”, “Semi final” или “Final”
Вид на билета – текст - “Standard”, “Premium” или “VIP”
Брой билети – цяло число в интервала [1 … 30]
Снимка с трофея – символ – 'Y' (да) или 'N' (не)
Изход
На конзолата се отпечатва 1 ред:
"Цената, която трябва да се заплати, форматирана до втората цифра след десетичния знак"
Вход                        Изход
Final                       3012.38
Premium
25
Y
