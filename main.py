with open('dev.txt', 'r') as fobj:
    data = fobj.read()

with open('devansh.txt', 'w') as fobj:
    newData = data.replace('java', 'python')
    fobj.write(newData)