import os

files = "/Volumes/APPLE SSD - dados/Coding/andre/teste/src/pages/QMSiTech/images/2"

for filename in os.listdir(files):

    with open(os.path.join(files, filename), 'r', encoding='latin1') as i:
            content = i.read()
            print(os.path.join(files, filename))

            old_colour = '#E86A24'
            new_colour = '#005fff'

            content = content.replace(old_colour, new_colour)    
            i.close()     

    with open(os.path.join(files, filename), 'w', encoding='latin1') as o:
            content = o.write(content)
            o.close()

            #<defs><style>.cls-1{fill:#ffa600;}</style></defs>