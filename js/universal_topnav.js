var window_url = "https://diversifying-reading.github.io/home/?search=undefined";
var repository = window_url.split("https://diversifying-reading.github.io/")[1].split("/")[0];
var scrollOnLoad = document.documentElement.scrollTop;

for(let i = 0; i < document.getElementsByClassName("topnav_text").length; i++){
  if(document.getElementsByClassName("topnav_text")[i].innerHTML.toUpperCase() == repository.toUpperCase()){
    document.getElementsByClassName("topnav_text")[i].style.backgroundColor = "lightgrey";
  }
}

function resize_topnav(){
  let options = ["Home", "Catalog", "Resources", "Suggest a Book"];

  let optionsFormatted = "";

  for(var i=0; i<options.length; i++){
    optionsFormatted += "<option> ";
    optionsFormatted += options[i];
    optionsFormatted += "</option>"
  }

  if(window.innerWidth <= 687 && document.getElementsByClassName("topnav_text")[0].style.height == ""){
    document.getElementsByClassName("topnav_text")[0].innerHTML = '<select class="select" onchange="selectTopnavUpdate()">' + optionsFormatted + '</select>';
    document.getElementsByClassName("topnav_text")[0].style.height = "100%";
    document.getElementsByClassName("topnav_text")[0].style.width = document.getElementsByClassName("select")[0].offsetWidth+10 + "px";
    document.getElementsByClassName("topnav_text")[0].style.paddingTop = "0px";
    document.getElementsByClassName("topnav_text")[0].style.paddingLeft = "0px";
    document.getElementsByClassName("topnav_text")[0].style.fontSize = "";
    document.getElementsByClassName('topnav_text')[0].style.marginLeft = "0px";

    scroll_function();
  }
  else if(window.innerWidth > 687 && document.getElementsByClassName("select").length > 0){
    document.getElementsByClassName("topnav_text")[0].style.height = "";
    document.getElementsByClassName("topnav_text")[0].style.paddingLeft = "14px";
    document.getElementsByClassName("topnav_text")[0].style.width = "";

    document.getElementsByClassName("topnav_text")[0].innerHTML = '\n  <a href="https://diversifying-reading.github.io/diversifying-reading-slcpl" class="topnav_text_links" style="float: left; padding-top: 8px; padding-bottom: 8px;">Home</a>\n  <a href="https://diversifying-reading.github.io/diversifying-reading-slcpl/suggest" class="topnav_text_links" style="float: right; padding-top: 8px; padding-bottom: 8px;">Suggest a Book</a>\n  <a href="https://diversifying-reading.github.io/diversifying-reading-slcpl/resources" class="topnav_text_links" style="float: right; padding-top: 8px; padding-bottom: 8px;">Resources</a>\n  <a href="https://diversifying-reading.github.io/search/" class="topnav_text_links" style="float: right; padding-top: 8px; padding-bottom: 8px;">Catalog</a>\n  ';
    document.getElementsByClassName('topnav_text')[0].style.marginLeft = "1vmin";

    scroll_function();
  }
  if(window.innerWidth > 687){
    document.getElementsByClassName("topnav_text")[0].style.fontSize = document.getElementById("topnav").offsetHeight/2 +"px";
    document.getElementsByClassName("topnav_text")[0].style.fontSize = parseFloat(document.getElementsByClassName("topnav_text")[0].style.fontSize) * document.getElementById("topnav").offsetHeight;
  }

  if(document.getElementsByClassName("select").length > 0){
    document.getElementsByClassName("select")[0].style.width = "100vw";
  }
}

function scroll_function(){
  resize_topnav();

  let scrollFromOnLoad;
  if(document.documentElement.scrollTop >= scrollOnLoad){
    scrollFromOnLoad = document.documentElement.scrollTop - scrollOnLoad;
  }
  else{
    scrollFromOnLoad = 0;
    scrollOnLoad = document.documentElement.scrollTop;
  }

  let topnav_paddingTop = 17.5-(scrollFromOnLoad-30)/30;

  if(topnav_paddingTop < 8){
    topnav_paddingTop = 8;
    scrollOnLoad = 0;
  }
  else if(topnav_paddingTop > 17.5){
    topnav_paddingTop = 17.5;
  }

  if(window.innerWidth <= 1390){
    topnav_paddingTop = 8;
  }

  for(i=0; i<document.getElementsByClassName("topnav_text_links").length; i++){
    document.getElementsByClassName("topnav_text_links")[i].style.paddingTop = topnav_paddingTop + "px";
    document.getElementsByClassName("topnav_text_links")[i].style.paddingBottom = topnav_paddingTop + "px";
  }

  if(document.getElementsByClassName("currentTextLink").length > 0){
    document.getElementsByClassName("currentTextLink")[0].style.paddingTop = topnav_paddingTop + "px";
    document.getElementsByClassName("currentTextLink")[0].style.paddingBottom = topnav_paddingTop + "px";
  }

  if(document.getElementsByClassName("topnav_text_links").length > 0){
    document.getElementById("topnav").style.height = document.getElementsByClassName("topnav_text_links")[0].offsetHeight + "px";
  }
  else{
    document.getElementById("topnav").style.height = "50px";
  }
  document.getElementById("body_text").style.paddingTop = 54 - 49 + "px";

  resize_images();
}

function currentRepository(url_test){
  if(url_test.split("/")[3] == "search"){
    return String("search");
  }
  else if(url_test.split("/")[4] == "resources.html"){
    return String("resources");
  }
  else if(url_test.split("/")[4] == "suggest"){
    return String("suggest");
  }
  else if(url_test.split("/")[3] == "diversifying-reading-slcpl"){
    return String("home");
  }
}

let topnav_text_links_index;
if(currentRepository("https://diversifying-reading.github.io/search/?search=undefined&page=0") == "home"){
  topnav_text_links_index = 0;
}
else if(currentRepository("https://diversifying-reading.github.io/search/?search=undefined&page=0") == "suggest"){
  topnav_text_links_index = 1;
}
else if(currentRepository("https://diversifying-reading.github.io/search/?search=undefined&page=0") == "resources"){
  topnav_text_links_index = 2;
}
else if(currentRepository("https://diversifying-reading.github.io/search/?search=undefined&page=0") == "search"){
  topnav_text_links_index = 3;
}
// document.getElementsByClassName("topnav_text_links")[topnav_text_links_index].className = "currentTextLink";