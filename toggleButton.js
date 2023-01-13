let image = document.getElementById("img")
let containerRender = document.getElementById("render-product")
let icon = document.getElementById("icon")

function changeElement() {
  if (containerRender.style.display === "none") {
    containerRender.style.display = "block"
    image.style.display = "none"
    icon.src = "assets/Stroke.svg"
    icon.style.width = "20px"
    
  }
  else {
      containerRender.style.display = "none"
      image.style.display = "block"
      icon.src = "assets/Vector.png"
      icon.style.width = "33px"
    }
  }

