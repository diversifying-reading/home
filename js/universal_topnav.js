var window_url = "https://diversifying-reading.github.io/home/?search=undefined";
var repository = window_url.split("https://diversifying-reading.github.io/")[1].split("/")[0];
var scrollOnLoad = document.documentElement.scrollTop;
var screenWidth = window.innerWidth;

for(let i = 0; i < document.getElementsByClassName("topnav_text").length; i++){
  if(document.getElementsByClassName("topnav_text")[i].innerHTML.toUpperCase() == repository.toUpperCase()){
    document.getElementsByClassName("topnav_text")[i].style.backgroundColor = "lightgrey";
  }
}

function mobileDevice() {

     if (navigator.userAgent.match(/Android/i)
     || navigator.userAgent.match(/webOS/i)
     || navigator.userAgent.match(/iPhone/i)
     || navigator.userAgent.match(/iPad/i)
     || navigator.userAgent.match(/iPod/i)
     || navigator.userAgent.match(/BlackBerry/i)
     || navigator.userAgent.match(/Windows Phone/i)) {
        return true;
     } else {
        return false ;
     }
}

if(mobileDevice()){
  for(i=0; i<document.getElementsByTagName("p").length; i++){
    document.getElementsByTagName("p")[i].style.fontSize = "38px"
  }
  for(i=0; i<document.getElementsByTagName("h2").length; i++){
    document.getElementsByTagName("h2")[i].style.fontSize = "54px"
  }
  for(i=0; i<document.getElementsByTagName("h1").length; i++){
    document.getElementsByTagName("h1")[i].style.fontSize = "30px"
  }
  for(i=0; i<document.getElementsByTagName("h3").length; i++){
    document.getElementsByTagName("h3")[i].style.fontSize = "20px"
  }
}

function selectTopnavUpdate(){
  var link = document.getElementsByClassName("select")[0].value;
  if(link == "Catalog"){
    window.location.href = "https://diversifying-reading.github.io/search";
  }
  else if(link == "Resources"){
    window.location.href = "https://diversifying-reading.github.io/diversifyingreadingslcpl/resources";
  }
  else if(link == "Suggest"){
    window.location.href = "https://diversifying-reading.github.io/diversifyingreadingslcpl/suggest";
  }
  else if(link == "Home"){
    window.location.href = "https://diversifying-reading.github.io/home";
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

  if(window.innerWidth <= 687 && document.getElementsByClassName("topnav_text")[0].style.height == "" || mobileDevice() && document.getElementsByClassName("topnav_text")[0].style.height == ""){
    document.getElementsByClassName("topnav_text")[0].innerHTML = '<select class="select" onchange="selectTopnavUpdate()">' + optionsFormatted + '</select>';
    document.getElementsByClassName("topnav_text")[0].style.height = "100%";
    document.getElementsByClassName("topnav_text")[0].style.width = document.getElementsByClassName("select")[0].offsetWidth+10 + "px";
    document.getElementsByClassName("topnav_text")[0].style.paddingTop = "0px";
    document.getElementsByClassName("topnav_text")[0].style.paddingLeft = "0px";
    document.getElementsByClassName('topnav_text')[0].style.fontSize = "";
    document.getElementsByClassName('topnav_text')[0].style.marginLeft = "0px";

    scroll_function();
  }
  else if(window.innerWidth > 687 && document.getElementsByClassName("select").length > 0 && !mobileDevice()){
    document.getElementsByClassName("topnav_text")[0].style.height = "";
    document.getElementsByClassName("topnav_text")[0].style.paddingLeft = "14px";
    document.getElementsByClassName("topnav_text")[0].style.width = "";

    document.getElementsByClassName("topnav_text")[0].innerHTML = '\n  <a href="https://diversifying-reading.github.io/diversifying-reading-slcpl" class="currentTextLink" style="position:fixed; left:0px; padding-top: 8px; padding-bottom: 8px;">Home</a>\n  <a href="https://diversifying-reading.github.io/diversifying-reading-slcpl/suggest" class="topnav_text_links" style="float: right; padding-top: 8px; padding-bottom: 8px;">Suggest a Book</a>\n  <a href="https://diversifying-reading.github.io/diversifying-reading-slcpl/resources" class="topnav_text_links" style="float: right; padding-top: 8px; padding-bottom: 8px;">Resources</a>\n  <a href="https://diversifying-reading.github.io/search/" class="topnav_text_links" style="float: right; padding-top: 8px; padding-bottom: 8px;">Catalog</a>\n  ';
    document.getElementsByClassName('topnav_text')[0].style.marginLeft = "1vmin";

    scroll_function();
  }
  if(window.innerWidth > 687 && !mobileDevice()){
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

document.getElementsByClassName("topnav_text_links")[0].className = "currentTextLink";
