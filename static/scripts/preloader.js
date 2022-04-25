var preloader = document.querySelector("#preloader")

document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    preloader.classList.add("preloader-ready")
    setTimeout(function () {
      preloader.classList.remove("preloader-ready")
    }, 500)
  }
}
