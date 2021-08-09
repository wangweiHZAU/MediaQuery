

function show_hide()
{
  let btn = document.getElementsByClassName("nav-icon")[0];
  let img = btn.getElementsByTagName("img")[0];
  let hide_block = document.getElementsByClassName("hide-style")[0];
  // console.log(hide_block.style);
  if (hide_block.style.display == "")
  {
    img.src = "img/icon-close.svg";
    hide_block.style.display = "block"; 
  }
  else 
  {
    img.src = "img/icon-menu.svg";
    hide_block.style.display = "";
  }
}

function inner_main_content(c, a, n, b, l, v)
{
  let text = 
    `
    <div class="main-part">
      <div class="cover">
        <img src=${c} alt="">
      </div>
      <div class="line">
        <div class="line-left">
          <div class="avatar">
            <img src=${a} alt="">
          </div>
          <div class="author">
            <div class="box">
              <div class="name">${n}</div>
            </div>
            <div class="badge">${b}</div>
          </div>
        </div>
        <div class="comment">
          <div class="like-logo">
            <img src="img/icon-like.svg" alt="">
          </div>
          <div class="likes">${l}</div>
          <div class="view-logo">  
            <img src="img/icon-view.svg" alt="">
          </div>
          <div class="views">${v}</div>
        </div>
      </div>
    </div>
    ` ;
  return text;
}

function main_content()
{
  // console.log(data);
  let i_text = '';
  for (let count=0; count< data.length; ++count)
  {
    let cover = data[count]["cover"].replace("imgs", "img");
    let avatar = data[count]["avatar"].replace("imgs", "img");
    let name = data[count]["name"];
    let badge = data[count]["badge"].toUpperCase();
    let likes = data[count]["likes"];
    let views = data[count]["views"];
    let in_text = inner_main_content(
      cover, avatar, name, badge, likes, views
    );
    i_text += in_text;
  }
  document.getElementsByClassName("main-content")[0].innerHTML = i_text;

}

function ready()
{
  let icon = document.getElementsByClassName("header-title")[0];
  // icon.innerHTML = icons_all["black-title"];
 
}


document.addEventListener("DOMContentLoaded", ready);
window.onload = function ()
{
  let btn =document.getElementsByClassName("nav-icon")[0];
  btn.addEventListener("click", show_hide);
  main_content();

}