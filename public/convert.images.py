import os 
from PIL import Image

FILMS_DIR = os.path.abspath('public/data/films')
FILMS_IMAGES = os.listdir(FILMS_DIR)

for image in FILMS_IMAGES:


    if image.split(".")[1] == "jpg" or image.split(".")[1] == "jpeg" or image.split(".")[1] == "png":

        im = Image.open( os.path.abspath("public/data/films") + '\\' + image ).convert("RGB")
        name = "public/data/films/" + image.split(".")[0] + ".webp"
        print(name)
        im.save(name, "webp")


print("Succesful convert")