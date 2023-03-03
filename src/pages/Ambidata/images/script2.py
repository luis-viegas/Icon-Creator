import os

files = "/Volumes/APPLE SSD - dados/Coding/andre/teste/src/pages/software1/images/3"

f = open("result.txt", "w")
f2 = open("result2.txt", "w")



for filename in os.listdir(files):
    #print(os.path.join(files, filename))
    file_name = filename[0:-4]
    file_path = "." + files[-2:] + "/" + filename

    #print("import " + file_name + " from '" + file_path + "'" )
    f.write("import " + file_name + " from '" + file_path + "';" + "\n")
    f2.write(file_name + "," + "\n")