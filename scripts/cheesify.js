function cheesify() {
  // TODO: Add the image replacement script here
  document.querySelectorAll('img').forEach(picture => {
    picture.src = 
        `https://source.unsplash.com/collection/8884129/${picture.width}x${picture.height}?${Math.random()}`;
    picture.srcset = picture.src
  })
}


// TODO: Write a function to listen for messages on the content page using chrome.runtime.onMessage
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(request)
   if (request.action === 'cheesify') cheesify();
  }
);