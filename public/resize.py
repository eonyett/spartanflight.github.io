from PIL import Image

for file in ["sponsors-collage.png", "sjsu_givenow.png", "sponsor_astral.png", "sponsor-alif.png"]:
    try:
        img = Image.open("images/" + file)
        img.save("images/" + file.replace('.png', '.webp'), format="webp", quality=85)
        print("images/" + file + " optimized to webp")
    except Exception as e:
        print("Failed on " + file + " : " + str(e))
