const body = document.body;
const BIG_SCREEN = "bigScreen";
const MEDIUM_SCREEN = "mediumScreen";
const SMALL_SCREEN = "smallScreen";

function handleResize() {
  const width = window.innerWidth;
 
 if (width >= 1400) {
    body.classList.add(BIG_SCREEN);
    body.classList.remove(MEDIUM_SCREEN);
  } else if(width <= 1400 && width >= 700){
    body.classList.add(MEDIUM_SCREEN);
    body.classList.remove(BIG_SCREEN, SMALL_SCREEN);
  }else{
    body.classList.add(SMALL_SCREEN);
    body.classList.remove(MEDIUM_SCREEN)
  }
}
 
window.addEventListener("resize", handleResize);