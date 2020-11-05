import random
from collections import defaultdict
file = open("quotebackend\src\main\java\com\intelliquote\quotebackend\databases\quotes.txt", 'r')
d = {0 : 'C', 1 : 'N', 2 : 'A', 3 : 'E', 4 : 'O'}
c = defaultdict(int)

output = open("quotebackend\src\main\java\com\intelliquote\quotebackend\databases\quotes_labeled.txt", 'w')
for line in file:
    rnd = random.randint(0,4)
    write_line = line[0:len(line)-2] + " | " + d[rnd]
    c[d[rnd]] += 1
    ret = output.write(str(write_line) + '\n')
    print(ret)

output.close
print(c)