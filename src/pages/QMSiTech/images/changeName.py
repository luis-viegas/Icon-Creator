import os

files = "/Volumes/APPLE SSD - dados/Coding/andre/teste/src/pages/software1/images/3"


for filename in os.listdir(files):

    with open(os.path.join(files, filename), 'r', encoding='utf-8') as i:
            path = os.path.join(files, filename)
            path = path[0:75]
            new_name = filename.replace("-","_")
            new_name = new_name[0:-4] + new_name[-4:]

            os.rename(path+filename, path+new_name)

            old_name = '005fff'
            new_colour = 'ffa600'  
            i.close()