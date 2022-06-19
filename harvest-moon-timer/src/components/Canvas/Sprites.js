// Images

const JackMovingImg = new Image();
JackMovingImg.src = require('./img/JackMoving.png');

const JackSpriteIdleImg = new Image();
JackSpriteIdleImg.src = require('./img/JackIdle.png');

const JackSpriteRunningImg = new Image();
JackSpriteRunningImg.src = require('./img/JackRunning.png');

const AnnMovingImg = new Image();
AnnMovingImg.src = require('./img/AnnMoving.png');

// --------------
const CarpenterMovingImg = new Image();
CarpenterMovingImg.src = require('./img/CarpenterMoving.png');

const ChickenMovingImg = new Image();
ChickenMovingImg.src = require('./img/ChickenMoving.png');

const CowMovingImg = new Image();
CowMovingImg.src = require('./img/CowMoving.png');

const DogMovingImg = new Image();
DogMovingImg.src = require('./img/DogMoving.png');

const ElfMovingImg = new Image();
ElfMovingImg.src = require('./img/ElfMoving.png');

const EllenMovingImg = new Image();
EllenMovingImg.src = require('./img/EllenMoving.png');

const EveMovingImg = new Image();
EveMovingImg.src = require('./img/EveMoving.png');

const FortuneTellerMovingImg = new Image();
FortuneTellerMovingImg.src = require('./img/FortnuetellerMoving.png');

const HorseMovingImg = new Image();
HorseMovingImg.src = require('./img/HorseMoving.png');

const HunterMovingImg = new Image();
HunterMovingImg.src = require('./img/HuntermanMoving.png');

const KidMovingImg = new Image();
KidMovingImg.src = require('./img/KidMoving.png');

const MariaMovingImg = new Image();
MariaMovingImg.src = require('./img/MariaMoving.png');

const NinaMovingImg = new Image();
NinaMovingImg.src = require('./img/NinaMoving.png');

const RobberMovingImg = new Image();
RobberMovingImg.src = require('./img/RobberMoving.png');

const WolfMovingImg = new Image();
WolfMovingImg.src = require('./img/WolfMoving.png');

//Sprites

export const Sprites = [
  {
    initialPosition: -500,
    stopPoint: 400,
    position: {
      x: -500,
      y: window.innerHeight / 2 - 50,
    },
    speed: {
      x: 2,
      y: 0,
    },
    image: JackMovingImg,
    framesMax: 3,
    scale: 4,
    offset: {
      x: 0,
      y: 0,
    },
  },
  {
    initialPosition: -500,
    stopPoint: 400,
    position: {
      x: -500,
      y: window.innerHeight / 2 - 150,
    },
    speed: {
      x: 2,
      y: 0,
    },
    image: AnnMovingImg,
    framesMax: 3,
    scale: 4,
    offset: {
      x: 0,
      y: 0,
    },
  },
  {
    initialPosition: -500,
    stopPoint: 400,
    position: {
      x: -500,
      y: window.innerHeight / 2 - 100,
    },
    speed: {
      x: 2,
      y: 0,
    },
    image: CarpenterMovingImg,
    framesMax: 3,
    scale: 4,
    offset: {
      x: 0,
      y: 0,
    },
  },
  {
    initialPosition: -500,
    stopPoint: 400,
    position: {
      x: -500,
      y: window.innerHeight / 2 - 100,
    },
    speed: {
      x: 2,
      y: 0,
    },
    image: ChickenMovingImg,
    framesMax: 2,
    scale: 4,
    offset: {
      x: 0,
      y: 0,
    },
  },
  {
    initialPosition: -500,
    stopPoint: 400,
    position: {
      x: -500,
      y: window.innerHeight / 2 - 100,
    },
    speed: {
      x: 2,
      y: 0,
    },
    image: CowMovingImg,
    framesMax: 5,
    scale: 4,
    offset: {
      x: 0,
      y: 0,
    },
  },
  {
    initialPosition: -500,
    stopPoint: 400,
    position: {
      x: -500,
      y: window.innerHeight / 2 - 100,
    },
    speed: {
      x: 2,
      y: 0,
    },
    image: DogMovingImg,
    framesMax: 3,
    scale: 4,
    offset: {
      x: 0,
      y: 0,
    },
  },
  {
    initialPosition: -500,
    stopPoint: 400,
    position: {
      x: -500,
      y: window.innerHeight / 2 - 100,
    },
    speed: {
      x: 2,
      y: 0,
    },
    image: ElfMovingImg,
    framesMax: 3,
    scale: 4,
    offset: {
      x: 0,
      y: 0,
    },
  },
  {
    initialPosition: -500,
    stopPoint: 400,
    position: {
      x: -500,
      y: window.innerHeight / 2 - 100,
    },
    speed: {
      x: 2,
      y: 0,
    },
    image: EllenMovingImg,
    framesMax: 3,
    scale: 4,
    offset: {
      x: 0,
      y: 0,
    },
  },
  {
    initialPosition: -500,
    stopPoint: 400,
    position: {
      x: -500,
      y: window.innerHeight / 2 - 100,
    },
    speed: {
      x: 2,
      y: 0,
    },
    image: EveMovingImg,
    framesMax: 3,
    scale: 4,
    offset: {
      x: 0,
      y: 0,
    },
  },
  {
    initialPosition: -500,
    stopPoint: 400,
    position: {
      x: -500,
      y: window.innerHeight / 2 - 100,
    },
    speed: {
      x: 2,
      y: 0,
    },
    image: FortuneTellerMovingImg,
    framesMax: 3,
    scale: 4,
    offset: {
      x: 0,
      y: 0,
    },
  },
  {
    initialPosition: -500,
    stopPoint: 400,
    position: {
      x: -500,
      y: window.innerHeight / 2 - 100,
    },
    speed: {
      x: 2,
      y: 0,
    },
    image: HorseMovingImg,
    framesMax: 5,
    scale: 4,
    offset: {
      x: 0,
      y: 0,
    },
  },
  {
    initialPosition: -500,
    stopPoint: 400,
    position: {
      x: -500,
      y: window.innerHeight / 2 - 100,
    },
    speed: {
      x: 2,
      y: 0,
    },
    image: HunterMovingImg,
    framesMax: 3,
    scale: 4,
    offset: {
      x: 0,
      y: 0,
    },
  },
  {
    initialPosition: -500,
    stopPoint: 400,
    position: {
      x: -500,
      y: window.innerHeight / 2 - 100,
    },
    speed: {
      x: 2,
      y: 0,
    },
    image: KidMovingImg,
    framesMax: 3,
    scale: 4,
    offset: {
      x: 0,
      y: 0,
    },
  },
  {
    initialPosition: -500,
    stopPoint: 400,
    position: {
      x: -500,
      y: window.innerHeight / 2 - 100,
    },
    speed: {
      x: 2,
      y: 0,
    },
    image: MariaMovingImg,
    framesMax: 3,
    scale: 4,
    offset: {
      x: 0,
      y: 0,
    },
  },
  {
    initialPosition: -500,
    stopPoint: 400,
    position: {
      x: -500,
      y: window.innerHeight / 2 - 100,
    },
    speed: {
      x: 2,
      y: 0,
    },
    image: NinaMovingImg,
    framesMax: 3,
    scale: 4,
    offset: {
      x: 0,
      y: 0,
    },
  },
  {
    initialPosition: -500,
    stopPoint: 400,
    position: {
      x: -500,
      y: window.innerHeight / 2 - 100,
    },
    speed: {
      x: 2,
      y: 0,
    },
    image: RobberMovingImg,
    framesMax: 3,
    scale: 4,
    offset: {
      x: 0,
      y: 0,
    },
  },
  {
    initialPosition: -500,
    stopPoint: 400,
    position: {
      x: -500,
      y: window.innerHeight / 2 - 100,
    },
    speed: {
      x: 2,
      y: 0,
    },
    image: WolfMovingImg,
    framesMax: 3,
    scale: 4,
    offset: {
      x: 0,
      y: 0,
    },
  },
];
