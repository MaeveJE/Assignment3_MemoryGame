import flower1 from '../assets/red flower.png';
import flower2 from '../assets/purpleflower.png';
import flower3 from '../assets/blueflower.png';
import flower4 from '../assets/yellowflowers.png';
import flower5 from '../assets/pinkflower.png';
import bee from '../assets/bee.png';
import flower7 from '../assets/magenta.png';
import flower8 from '../assets/sunflower.png';

export const ALL_IMAGES = [
  flower1, flower2, flower3, flower4,
  flower5, bee, flower7, flower8,
];
  
  export const DIFFICULTIES = {
    easy:   { label: 'Easy',   pairs: 4,  timeLimit: 60,  cols: 4 },
    medium: { label: 'Medium', pairs: 8,  timeLimit: 90,  cols: 4 },
    hard:   { label: 'Hard',   pairs: 12, timeLimit: 120, cols: 6 },
  };