from __defs import __convert, __remove


print("Hi. This is manager for images")
print("Enter what actions to perform.")
print(" ")
print("c - convert images to .webp")
print("r - remove .jpg .png")
print(" ")


MODE = input("Enter action: ")


if MODE.replace(" ", "") == "c":
    __convert()

elif MODE.replace(" ", "") == "r":
    __remove()

else:
    print("The input is incorrect")
    print("c - convert images to .webp")
    print("r - remove .jpg .png")