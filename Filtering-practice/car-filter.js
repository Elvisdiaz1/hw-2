let showImage = (id) => {
  let img = document.getElementById(id);

  img.style.visibility = "visible";
};

let showImag = (name) => {
  let image = document.getElementsByClassName(name);
  image.style.visibility = "hidden";
};
