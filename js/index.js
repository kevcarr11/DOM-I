const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


let navItem1 = document.querySelector('nav a')
navItem1.textContent = siteContent["nav"]["nav-item-1"]
navItem1.style.color = 'green'

let navItem2 = document.querySelector('nav a:nth-child(2)')
navItem2.textContent = siteContent["nav"]["nav-item-2"]
navItem2.style.color = 'green'

let navItem3 = document.querySelector('nav a:nth-child(3)')
navItem3.textContent = siteContent["nav"]["nav-item-3"]
navItem3.style.color = 'green'

let navItem4 = document.querySelector('nav a:nth-child(4)')
navItem4.textContent = siteContent["nav"]["nav-item-4"]
navItem4.style.color = 'green'

let navItem5 = document.querySelector('nav a:nth-child(5)')
navItem5.textContent = siteContent["nav"]["nav-item-5"]
navItem5.style.color = 'green'

let navItem6 = document.querySelector('nav a:nth-child(6)')
navItem6.textContent = siteContent["nav"]["nav-item-6"]
navItem6.style.color = 'green'

const newNavItem = document.createElement('a')
document.querySelector('header nav').appendChild(newNavItem)
newNavItem.textContent = "Blog"

const newNavItem2 = document.createElement('a')
document.querySelector('header nav').prepend(newNavItem2)
newNavItem2.textContent = "Learn More"

const title = document.querySelector('h1')
const h1br = document.createElement('br');
const h1br2 = document.createElement('br');
const h1text = siteContent['cta']['h1'].split(' ');
title.append(h1br)
title.prepend(h1text[0])
title.append(h1text[1])
title.append(h1br2)
title.append(h1text[2])




let btn = document.querySelector('button')
btn.textContent =  siteContent['cta']['button']
btn.style.background = 'green'

let topImg = document.getElementById("cta-img");
topImg.setAttribute('src', siteContent["cta"]["img-src"])

let features = document.querySelector('.top-content h4')
features.textContent = siteContent['main-content']['features-h4']
let featuresContent = document.querySelector('.top-content p')
featuresContent.textContent = siteContent['main-content']['features-content']

let h4Title = document.querySelectorAll('h4')
h4Title[1].textContent = siteContent['main-content']['about-h4']
h4Title[1].style.color = 'green'
h4Title[2].textContent = siteContent['main-content']['services-h4']
h4Title[0].style.color = 'green'
h4Title[3].textContent = siteContent['main-content']['product-h4']
h4Title[2].style.color = 'green'
h4Title[4].textContent = siteContent['main-content']['vision-h4']
h4Title[3].style.color = 'green'
h4Title[4].style.color = 'green'

let pText = document.querySelectorAll('.main-content p')
pText[1].textContent = siteContent['main-content']['about-content']
pText[2].textContent = siteContent['main-content']['services-content']
pText[3].textContent = siteContent['main-content']['product-content']
pText[4].textContent = siteContent['main-content']['vision-content']

let middleImg = document.getElementById('middle-img')
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let contact = document.querySelector('.contact h4')
contact.textContent = siteContent['contact']['contact-h4']
contact.style.color = 'green'
let contactContent = document.querySelectorAll('.contact p')
contactContent[0].textContent = siteContent['contact']['address']
contactContent[1].textContent = siteContent['contact']['phone']
contactContent[2].textContent = siteContent['contact']['email']

let footer = document.querySelector('footer p')
footer.textContent = siteContent['footer']['copyright']










