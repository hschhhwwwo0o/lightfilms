import os 

FILMS_DIR = os.path.abspath("public/data/films")
FILMS_IMAGES = os.listdir(FILMS_DIR)


for image in FILMS_IMAGES:


    if image.split(".")[1] == "jpg" or image.split(".")[1] == "jpeg" or image.split(".")[1] == "png":
        pathi = os.path.abspath("public/data/films") + '\\' + image
        os.remove(pathi)


print("Succesful remove")