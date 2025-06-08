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

const testis = [
  {
    name: "Murali S..",
    para: "Quite an insightful training; tons of real time examples to co-relate with what we are learning and helps with real time projects. The training has opened doors to countless opportunities.",
    per: "per1",
    logo: "levis"
  },
  {
    name: "Mark G..",
    para: "The instructor was absolutely outstanding, very patient, knowledgeable, and consistently kept the class interesting. I would like to thank NetCom Learning for this educational opportunity.",
    per: "per2",
    logo: "boss"
  },
  {
    name: "Andrew Y..",
    para: "The team was very happy with the overall training. The content, reading material and training resources were very useful. The training instructor was knowledgeable, engaging and had a clear teaching style.",
    per: "per3",
    logo: "lacoste"
  }
]

const container = document.querySelector(".service-cards-container");
const galleryContainer = document.querySelector(".gallery-image-container");
const testi = document.querySelector(".testimonial-cards");

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

testi.innerHTML = testis.map((testi, i) => `
  <div class="testimonial-card ${i === 1 && "selected-testimonial-card"}">
                <div>
                    <img class="testi-per" src="https://ik.imagekit.io/5takarcoin/garmui/testi/${testi.per}" alt="">
                <p>${testi.para}</p>
                </div>
                <div class="testi-bottom">
                    <span class="testi-name">${testi.name}</span>
                    <img class="testi-logo" src="https://ik.imagekit.io/5takarcoin/garmui/testi/${testi.logo}" alt="levis">
                </div>
            </div>
`).join('');