import { imagesArray } from "./imagesData.js";


const galleryRoot = document.getElementById("gallery-root")


imagesArray.forEach(img => {
    console.log(img.imgSource)
    const imgTag = document.createElement("img")
    imgTag.src = img.imgSource
    imgTag.alt = img.alt
    imgTag.className = "gallery-image"
    
    
    galleryRoot.append(imgTag)
})
