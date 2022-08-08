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
