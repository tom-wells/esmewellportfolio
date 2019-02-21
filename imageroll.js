
   let number = 0
const images = [
    "images/Sunrise Herd of the Hospice Campaign 2.png",
    "images/Baphoment Jester Mask and Costume.png",
    "images/Goodnight Mr Tom Set.png",
    "images/Interstellar Steed Herd of the Hospice Campaign.png",
    "images/Space Medusa 3.png",
    "images/Krampus Roaming Costume 4.png",
      
]   
      
const imageTag = document.querySelector('div.images')

const addImage = function(x, y) {
  const img = document.createElement('img')

  img.setAttribute('src', images[number])
  //remove half the window with so it is centered
  img.style.left = (x - window.innerWidth / 2 ) + 'px'
  img.style.top = y + 'px'

  imageTag.appendChild(img)

  
  number = number + 1
  
  if (number > images.length - 1 ) {
    
    number = 0
    
      }
  
  console.log(x, y)
}

document.addEventListener('click', function(event) {
  addImage(event.pageX, event.pageY)
})
