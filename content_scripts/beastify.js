console.log("Content script");
chrome.runtime.onMessage.addListener(function(a,b,c) {
  console.log(a);
  beasturl = getBeastUrl(a.message)
  console.log(beasturl)
  insertBeast(beasturl)
})

function getBeastUrl(message) {
  switch(message) {
    case "Snake":
      return chrome.runtime.getURL("beasts/snake.jpg")
    case "Frog":
      return chrome.runtime.getURL("beasts/frog.jpg")
    case "Turtle":
      return chrome.runtime.getURL("beasts/turtle.jpg")
  }
}

function insertBeast(beastURL) {
  removeExistingBeasts()
  if (beastURL) {
    let beastImage = document.createElement("img");
    beastImage.setAttribute("src", beastURL);
    beastImage.style.height = "100vh";
    beastImage.className = "beastify-image";
    document.body.appendChild(beastImage);
  }
}

function removeExistingBeasts() {
  let existingBeasts = document.querySelectorAll(".beastify-image");
  for (let beast of existingBeasts) {
    beast.remove();
  }
}