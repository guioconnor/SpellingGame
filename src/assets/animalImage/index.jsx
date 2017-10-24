import bear from './img/bear.svg';
import beaver from './img/beaver.svg';
import bird from './img/bird.svg';
import butterfly from './img/butterfly.svg';
import cat from './img/cat.svg';
import chameleon from './img/chameleon.svg';
import chick from './img/chick.svg';
import chicken from './img/chicken.svg';
import chicken1 from './img/chicken1.svg';
import cow from './img/cow.svg';
import crab from './img/crab.svg';
import deer from './img/deer.svg';
import dog from './img/dog.svg';
import donkey from './img/donkey.svg';
import duck from './img/duck.svg';
import elephant from './img/elephant.svg';
import fish from './img/fish.svg';
import fox from './img/fox.svg';
import frog from './img/frog.svg';
import giraffe from './img/giraffe.svg';
import hedgehog from './img/hedgehog.svg';
import hippo from './img/hippo.svg';
import lion from './img/lion.svg';
import ladybird from './img/ladybird.svg';
import monkey from './img/monkey.svg';
import mosquito from './img/mosquito.svg';
import mouse from './img/mouse.svg';
import octopus from './img/octopus.svg';
import ostrich from './img/ostrich.svg';
import owl from './img/owl.svg';
import owl1 from './img/owl1.svg';
import panda from './img/panda.svg';
import penguin from './img/penguin.svg';
import pig from './img/pig.svg';
import polarbear from './img/polarbear.svg';
import rabbit from './img/rabbit.svg';
import racoon from './img/racoon.svg';
import rooster from './img/rooster.svg';
import shark from './img/shark.svg';
import sheep from './img/sheep.svg';
import sheep2 from './img/sheep2.svg';
import snail from './img/snail.svg';
import squid from './img/squid.svg';
import squirrel from './img/squirrel.svg';
import tiger from './img/tiger.svg';
import unknown01 from './img/unknown01.svg';
import unknown02 from './img/unknown02.svg';
import unknown03 from './img/unknown03.svg';
import unknown04 from './img/unknown04.svg';
import walrus from './img/walrus.svg';
import wolf from './img/wolf.svg';
import zebra from './img/zebra.svg';

const images = {
  bear,
  beaver,
  bird,
  butterfly,
  cat,
  chameleon,
  chick,
  chicken,
  chicken1,
  cow,
  crab,
  deer,
  dog,
  donkey,
  duck,
  elephant,
  fish,
  fox,
  frog,
  giraffe,
  hedgehog,
  hippo,
  lion,
  ladybird,
  monkey,
  mosquito,
  mouse,
  octopus,
  ostrich,
  owl,
  owl1,
  panda,
  penguin,
  pig,
  polarbear,
  rabbit,
  racoon,
  rooster,
  shark,
  sheep,
  sheep2,
  snail,
  squid,
  squirrel,
  tiger,
  unknown01,
  unknown02,
  unknown03,
  unknown04,
  walrus,
  wolf,
  zebra,
}

const animalImage = (animalId) => images[animalId];

export const animalImageMiddleware = (animal) => {
  return {
    ...animal,
    image: animalImage(animal.animalId),
  };
}

export default animalImage;