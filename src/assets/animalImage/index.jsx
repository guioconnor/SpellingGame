import bear from './img/bear.svg';
import butterfly from './img/butterfly.svg';
import cat from './img/cat.svg';
import chameleon from './img/chameleon.svg';
import chicken from './img/chicken.svg';
import chicken1 from './img/chicken1.svg';
import crab from './img/crab.svg';
import dog from './img/dog.svg';
import duck from './img/duck.svg';
import elephant from './img/elephant.svg';
import fish from './img/fish.svg';
import frog from './img/frog.svg';
import giraffe from './img/giraffe.svg';
import hippo from './img/hippo.svg';
import lion from './img/lion.svg';
import monkey from './img/monkey.svg';
import mosquito from './img/mosquito.svg';
import mouse from './img/mouse.svg';
import octopus from './img/octopus.svg';
import ostrich from './img/ostrich.svg';
import owl from './img/owl.svg';
import owl1 from './img/owl1.svg';
import penguin from './img/penguin.svg';
import pig from './img/pig.svg';
import rabbit from './img/rabbit.svg';
import rooster from './img/rooster.svg';
import shark from './img/shark.svg';
import sheep from './img/sheep.svg';
import sheep2 from './img/sheep2.svg';
import snail from './img/snail.svg';
import squid from './img/squid.svg';
import squirrel from './img/squirrel.svg';
import unknown01 from './img/unknown01.svg';
import unknown02 from './img/unknown02.svg';
import unknown03 from './img/unknown03.svg';
import unknown04 from './img/unknown04.svg';
import wolf from './img/wolf.svg';

const images = {
  bear,
  butterfly,
  cat,
  chameleon,
  chicken,
  chicken1,
  crab,
  dog,
  duck,
  elephant,
  fish,
  frog,
  giraffe,
  hippo,
  lion,
  monkey,
  mosquito,
  mouse,
  octopus,
  ostrich,
  owl,
  owl1,
  penguin,
  pig,
  rabbit,
  rooster,
  shark,
  sheep,
  sheep2,
  snail,
  squid,
  squirrel,
  unknown01,
  unknown02,
  unknown03,
  unknown04,
  wolf,
}

const animalImage = (animalId) => images[animalId];

export const animalImageMiddleware = (animal) => {
  return {
    ...animal,
    image: animalImage(animal.animalId),
  };
}

export default animalImage;