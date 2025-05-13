const gridContainer = document.getElementById('grid');
const rows = 2;
const cols = 6;
const totalSquares = rows * cols;
const imageSets = [];

// Define sets of 50 images for each grid square
for (let set = 1; set <= totalSquares; set++) {
  const images = [
    "images/supermodels.jpg",
    "images/tiger_woods_sad.jpg",
    "images/tonya_harding.jpg",
    "images/webcam_footage.jpg",
    "images/white_fridge.jpg",
    "images/white-men.jpg",
    "images/wrestler.jpg",
    "images/young_jay_z.jpg",
    "images/zendaya.jpg",
    "images/aaliyah_tommy.jpg",
    "images/apple-touch.png",
    "images/bjork_pink.jpg",
    "images/bl0nt_rihanna.jpg",
    "images/boomerang_ball.jpg",
    "images/bruce_willis.jpg",
    "images/busta_rhymes.jpg",
    "images/chappelle.jpg",
    "images/charlamagne.jpg",
    "images/cherrrrrr.jpg",
    "images/dannyasapkendrick.jpg",
    "images/dawson_creek.jpg",
    "images/degrassi rare.jpg",
    "images/diana_charles.jpg",
    "images/dorothy.jpg",
    "images/eazy_e.jpg",
    "images/gaga_btw.jpg",
    "images/gilbert_grape.jpg",
    "images/hefner_hugh.jpg",
    "images/hendrix.jpg",
    "images/hermoine.jpg",
    "images/hide_child.jpg",
    "images/iggy azaelea.jpg",
    "images/janet_yonce.jpg",
    "images/jlaw_oscar.jpg",
    "images/jordan_trophy.webp",
    "images/lindsay_lohan.jpg",
    "images/lisa_bonet.jpg",
    "images/manson.jpg",
    "images/nwa.jpg",
    "images/oth_brothers.jpg",
    "images/pamela_party.jpg",
    "images/paris_hilton.jpg",
    "images/pearl_rihanna.jpg",
    "images/reality_tv.jpg",
    "images/rick_ross.jpg",
    "images/robert.jpg",
    "images/rodman.jpg",
    "images/shakira_computer.jpg",
    "images/spice_girls.jpg",
    "images/steve_irwin.jpg"
  ];
  imageSets.push(images);
}

function getRandomImageFromSet(setIndex) {
  const set = imageSets[setIndex];
  return set[Math.floor(Math.random() * set.length)];
}

// Create grid and assign images
for (let i = 0; i < totalSquares; i++) {
  const div = document.createElement('div');
  div.classList.add('grid-item');
  
  // Initially set a random image from the set
  div.style.backgroundImage = `url('${getRandomImageFromSet(i)}')`;
  gridContainer.appendChild(div);

  // Start cycling images for each grid item
  setInterval(() => {
    div.style.backgroundImage = `url('${getRandomImageFromSet(i)}')`;
  }, 2500 + Math.random() * 2000);  // Random interval between 2–4 seconds
}
