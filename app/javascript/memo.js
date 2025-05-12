function post (){
  const formform =document.getElementById("form");
  formform.addEventListener("suubmit", (e) => {
    e.preventDefault
    const formData = new FormData(formform);
    const XHR = new XMLHttpRequest();
    XHR.open("post", "/posts", true);
    XHR.responseType = "jason";
    XHR.send(formData)
  });
};
window.addEventListener('turbo:load', post);