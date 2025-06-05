const IMAGE_URL = "https://ik.imagekit.io/5takarcoin/garmui/"

// const getImages  = ["about_left", ]


const hero = document.querySelector("main")
const crazy = document.querySelector(".crazy")

hero.style.backgroundImage = `url(${IMAGE_URL}hero.jpg)`
crazy.style.backgroundImage = `url(${IMAGE_URL}about-left.png)`


const about_vid = document.querySelector(".about-vid")
about_vid.src = `${IMAGE_URL}about-vid.jpg`
// about_vid.style.objectFit = "contain"