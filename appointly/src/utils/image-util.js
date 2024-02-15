function getImageURL(name) {
  return new URL(`../assets/images/${name}`, import.meta.url).href;
}

function getBarberImagesUrl(name) {
  return new URL(`../assets/images/barber/${name}`, import.meta.url).href;
}
function getNailImagesUrl(name) {
  return new URL(`../assets/images/nail/${name}`, import.meta.url).href;
}
function getMechImagesUrl(name) {
  return new URL(`../assets/images/mechanic/${name}`, import.meta.url).href;
}

export { getImageURL, getBarberImagesUrl, getMechImagesUrl, getNailImagesUrl };
