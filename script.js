

let currentDivUrl = null // To avoid loading the same page
function loadPage(page) 
{
  contentDiv = document.getElementById('content')

  if (currentDivUrl === page) return;

  const xhr = new XMLHttpRequest();
  xhr.open('GET', `${page}.html`, true);
  xhr.onreadystatechange = function() 
  {
    if (xhr.readyState === 4 && xhr.status === 200) 
      {
      contentDiv.innerHTML = xhr.responseText;
      currentDivUrl = page

      // Play animation
      contentDiv.classList.add('page-content')

      // Reset animation when finished
      contentDiv.addEventListener('animationend', () => 
      {
        contentDiv.classList.remove('page-content');
      }, { once: true });

      // Load sliding script elements
      if (page === 'home')
        onHomeLoad()
    }
  };

  xhr.send();


}


let slidesArr = null
let currentIndex = 0
let slideRunning = false
function onHomeLoad()
{
  const sliderElement = document.querySelector('.slider')
  const slidesElems = sliderElement.querySelectorAll('.slide')
  slidesArr = Array.from(slidesElems)

  // Call slideNext once
  if (slideRunning === false) 
    {
      setInterval(slideNext, 5000);
      slideRunning = true
    }
}


function showSlide(index) 
{
  slidesArr.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

function slideNext() {
    currentIndex = (currentIndex + 1) % slidesArr.length;
    showSlide(currentIndex);
}

window.addEventListener('load', function() {
  document.body.classList.add('page-loaded');
});