import os 
from PIL import Image

FILMS_DIR = os.path.abspath('public/data/films')
FILMS_IMAGES = os.listdir(FILMS_DIR)

PERSONS_DIR = os.path.abspath('public/data/persons')
PERSONS_IMAGES = os.listdir(PERSONS_DIR)


def __remove():

    for image in FILMS_IMAGES:

        if image.split(".")[1] == "jpg" or image.split(".")[1] == "jpeg" or image.split(".")[1] == "png":
            pathi = os.path.abspath("public/data/films") + '\\' + image
            os.remove(pathi)


    for image in PERSONS_IMAGES:

        if image.split(".")[1] == "jpg" or image.split(".")[1] == "jpeg" or image.split(".")[1] == "png":
            pathi = os.path.abspath("public/data/persons") + '\\' + image
            os.remove(pathi)


    print("Succesful remove")


def __convert():

    for image in FILMS_IMAGES:

        if image.split(".")[1] == "jpg" or image.split(".")[1] == "jpeg" or image.split(".")[1] == "png":

            im = Image.open( os.path.abspath("public/data/films") + '\\' + image ).convert("RGB")
            name = "public/data/films/" + image.split(".")[0] + ".webp"
            im.save(name, "webp")


    for image in PERSONS_IMAGES:

            if image.split(".")[1] == "jpg" or image.split(".")[1] == "jpeg" or image.split(".")[1] == "png":

                im = Image.open( os.path.abspath("public/data/persons") + '\\' + image ).convert("RGB")
                name = "public/data/persons/" + image.split(".")[0] + ".webp"
                im.save(name, "webp")


    print("Succesful convert")

