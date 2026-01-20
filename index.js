import { imagesArray } from "./imagesData.js";


const galleryRoot = document.getElementById("gallery-root")


const img = document.createElement("img")
img.src = imagesArray[0].imgSource
img.className = "gallery-image"

galleryRoot.append(img)