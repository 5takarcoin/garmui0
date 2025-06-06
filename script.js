const IMAGE_URL = "https://ik.imagekit.io/5takarcoin/garmui/"

// const getImages  = ["about_left", ]


const hero = document.querySelector("main")
const crazy = document.querySelector(".crazy")
const trust = document.querySelector(".trusted-img")
const gallery = document.querySelector(".gallery-bg")

hero.style.backgroundImage = `url(${IMAGE_URL}hero.jpg)`
crazy.style.backgroundImage = `url(${IMAGE_URL}about-left.png)`
trust.style.backgroundImage = `url(${IMAGE_URL}about-vid.jpg)`
gallery.style.backgroundImage = `url(${IMAGE_URL}gallery.png)`


const about_vid = document.querySelector(".about-vid")
about_vid.src = `${IMAGE_URL}about-vid.jpg`
const footer_map = document.querySelector(".footer-map")
footer_map.src = `${IMAGE_URL}footer-map.png`
// about_vid.style.objectFit = "contain"

const services = [
  {
    imgSrc: "knitting.jpg",
    title: "Knitting",
    description: "Soft and Sustainable Fabrics"
  },
  {
    imgSrc: "cutting.jpg",
    title: "Cutting",
    description: "Precision That Shapes Perfection"
  },
  {
    imgSrc: "dyeing.jpg",
    title: "Dyeing",
    description: "Eco-Friendly, Vibrant Colors"
  },
  {
    imgSrc: "sewing.jpg",
    title: "Sewing",
    description: "Skilled Hands, Seamless Results"
  },
  {
    imgSrc: "printing.jpg",
    title: "Printing",
    description: "Creative, Durable Prints"
  },
  {
    imgSrc: "embroidery.jpg",
    title: "Embroidery",
    description: "Elegant Detailing, Every Stitch"
  }
];

const galleryImages = [
  "gallery/gallery1.jpg",
  "gallery/gallery2.jpg",
  "about-left.png",
  "gallery/gallery4.png",
  "hero.jpg",
  "gallery/gallery6.jpg",
  
];

const container = document.querySelector(".service-cards-container");
const galleryContainer = document.querySelector(".gallery-image-container");

container.innerHTML = services.map(service => `
  <div class="service-card">
    <img class="service-card-img" src="${IMAGE_URL}services/${service.imgSrc}" alt="${service.title}">
    <h3>${service.title}</h3>
    <p>${service.description}</p>
    <button class="service-card-button">
      <span>Read More</span>
      <span><img src="public/arrow_circle_right.svg" alt="Arrow Icon"></span>
    </button>
  </div>
`).join('');

galleryContainer.innerHTML = galleryImages.map(image => `
  <img class="gallery-image-container" src="${IMAGE_URL}${image}" alt="">
`).join('');