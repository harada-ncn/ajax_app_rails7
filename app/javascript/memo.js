const buildHTML = (XHR) => {
  const item = XHR.response.post
  const html = `
        <div class="post">
          <div class="post-date">
            投稿日時:${item.created_at}
          </div>
          <div class="post-content">
            ${item.content}
          </div>
        </div>`;
        return html;
}
function post (){
  const formform =document.getElementById("form");
  formform.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(formform);
    const XHR = new XMLHttpRequest();
    XHR.open("post", "/posts", true);
    XHR.responseType = "json";
    XHR.send(formData);
    XHR.onload = () => {
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      };
      const listin = document.getElementById("list");
      const formText = document.getElementById("content");
      listin.insertAdjacentHTML("afterend", buildHTML(XHR));
      formText.value = "";
    };
  });
};
window.addEventListener('turbo:load', post);