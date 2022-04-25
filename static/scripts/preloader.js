var body = document.querySelector("body")

document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    setTimeout(() => {
      body.classList.remove("preloader-active")
    }, 100)
  }
}
