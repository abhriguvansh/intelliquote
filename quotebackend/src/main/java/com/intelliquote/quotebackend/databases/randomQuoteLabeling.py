import random
file = open("quotebackend\src\main\java\com\intelliquote\quotebackend\databases\quotes.txt", 'r')
d = {0 : 'C', 1 : 'N', 2 : 'A', 3 : 'E', 4 : 'O'}
for line in file:
    rnd = random.randint(0,4)
    write_line = line[0:len(line)-2] + " | " + d[rnd]
    print(str(write_line))
    