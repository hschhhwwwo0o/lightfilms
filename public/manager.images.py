from __defs import __convert, __remove


print("Hi. This is manager for images")
print("Enter what actions to perform.")
print(" ")
print("c - convert images to .webp")
print("r - remove .jpg .png")
print(" ")


MODE = input("Enter action: ")


if MODE == "c":
    __convert()

elif MODE == "r":
    __remove()