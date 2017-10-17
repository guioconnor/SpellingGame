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
import hedgehog from './img/hedgehog.svg';
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

import bearSilhouette from './silhouettes/bear.svg';
import butterflySilhouette from './silhouettes/butterfly.svg';
import catSilhouette from './silhouettes/cat.svg';
import chameleonSilhouette from './silhouettes/chameleon.svg';
import chickenSilhouette from './silhouettes/chicken.svg';
import chicken1Silhouette from './silhouettes/chicken1.svg';
import crabSilhouette from './silhouettes/crab.svg';
import dogSilhouette from './silhouettes/dog.svg';
import duckSilhouette from './silhouettes/duck.svg';
import elephantSilhouette from './silhouettes/elephant.svg';
import fishSilhouette from './silhouettes/fish.svg';
import frogSilhouette from './silhouettes/frog.svg';
import giraffeSilhouette from './silhouettes/giraffe.svg';
import hedgehogSilhouette from './silhouettes/hedgehog.svg';
import hippoSilhouette from './silhouettes/hippo.svg';
import lionSilhouette from './silhouettes/lion.svg';
import monkeySilhouette from './silhouettes/monkey.svg';
import mosquitoSilhouette from './silhouettes/mosquito.svg';
import mouseSilhouette from './silhouettes/mouse.svg';
import octopusSilhouette from './silhouettes/octopus.svg';
import ostrichSilhouette from './silhouettes/ostrich.svg';
import owlSilhouette from './silhouettes/owl.svg';
import owl1Silhouette from './silhouettes/owl1.svg';
import penguinSilhouette from './silhouettes/penguin.svg';
import pigSilhouette from './silhouettes/pig.svg';
import rabbitSilhouette from './silhouettes/rabbit.svg';
import roosterSilhouette from './silhouettes/rooster.svg';
import sharkSilhouette from './silhouettes/shark.svg';
import sheepSilhouette from './silhouettes/sheep.svg';
import sheep2Silhouette from './silhouettes/sheep2.svg';
import snailSilhouette from './silhouettes/snail.svg';
import squidSilhouette from './silhouettes/squid.svg';
import squirrelSilhouette from './silhouettes/squirrel.svg';
import unknown01Silhouette from './silhouettes/unknown01.svg';
import unknown02Silhouette from './silhouettes/unknown02.svg';
import unknown03Silhouette from './silhouettes/unknown03.svg';
import unknown04Silhouette from './silhouettes/unknown04.svg';
import wolfSilhouette from './silhouettes/wolf.svg';

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
  hedgehog,
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

const silhouettes = {
  bear: bearSilhouette,
  butterfly: butterflySilhouette,
  cat: catSilhouette,
  chameleon: chameleonSilhouette,
  chicken: chickenSilhouette,
  chicken1: chicken1Silhouette,
  crab: crabSilhouette,
  dog: dogSilhouette,
  duck: duckSilhouette,
  elephant: elephantSilhouette,
  fish: fishSilhouette,
  frog: frogSilhouette,
  giraffe: giraffeSilhouette,
  hedgehog: hedgehogSilhouette,
  hippo: hippoSilhouette,
  lion: lionSilhouette,
  monkey: monkeySilhouette,
  mosquito: mosquitoSilhouette,
  mouse: mouseSilhouette,
  octopus: octopusSilhouette,
  ostrich: ostrichSilhouette,
  owl: owlSilhouette,
  owl1: owl1Silhouette,
  penguin: penguinSilhouette,
  pig: pigSilhouette,
  rabbit: rabbitSilhouette,
  rooster: roosterSilhouette,
  shark: sharkSilhouette,
  sheep: sheepSilhouette,
  sheep2: sheep2Silhouette,
  snail: snailSilhouette,
  squid: squidSilhouette,
  squirrel: squirrelSilhouette,
  unknown01: unknown01Silhouette,
  unknown02: unknown02Silhouette,
  unknown03: unknown03Silhouette,
  unknown04: unknown04Silhouette,
  wolf: wolfSilhouette,
}

const animalImage = (animalId) => images[animalId];

export const animalSilhouette = (animalId) => silhouettes[animalId];

export const animalImageMiddleware = (animal) => {
  return {
    ...animal,
    image: animalImage(animal.animalId),
    silhouette: animalSilhouette(animal.animalId),
  };
}

export default animalImage;