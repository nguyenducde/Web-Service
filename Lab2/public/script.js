const loading = document.getElementById("loading");
const form = document.querySelector("form");
const button = document.getElementById("submitLayTin");

const content = document.getElementById("content");
const inputURL = document.getElementById("inputURL");
const locationURL = window.location.href;
const menuLink = document.querySelector(".menu-link");
const titlePage = document.getElementById("title-page");

let url = '';

function appendDataTitle(data, index) {
  const newListTitle = document.createElement("div");
  if (locationURL.includes(`/hot-news`) || locationURL.includes(`/lastest-news`)) {
    newListTitle.innerHTML = `<a href=${window.location.href + "/detail?id=" + index}>${data.title}</a>`;
  } else {
    newListTitle.innerHTML = `<a href=${window.location.href + "detail?id=" + index}>${data.title}</a>`;  
  }
  
  content.append(newListTitle);
  console.log(data, index);
  
}

function appendDataDetail(data) {
  let container = document.createElement("div");
  let title = document.createElement("h1");
  title.innerText = `${data.title}`;
  container.innerHTML = data.description;
  content.append(title, container);
}

loading.firstElementChild.innerText = "";

loading.firstElementChild.innerText = "LOADING ........!";

  if (locationURL === "http://localhost:8000/" || locationURL === "http://localhost:8000/detail?id=0" || locationURL === "http://localhost:8000/detail?id=1" || locationURL === "http://localhost:8000/detail?id=2") {
    url = 'https://vnexpress.net/rss/giai-tri.rss';
  }

  if (locationURL.includes(`/hot-news`)) {
    url = 'https://vnexpress.net/rss/tin-xem-nhieu.rss';
  }

  if (locationURL.includes(`/lastest-news`)) {
    url = 'https://vnexpress.net/rss/tin-moi-nhat.rss'
  }

  fetch('http://localhost:8000/vnexpress2?url=' + url)
  .then(response => response.json()) // parse the JSON from the server
  .then(dreams => {
    console.log(dreams.rss.channel.item);
    // remove the loading text
    loading.firstElementChild.innerText = "";
    
    if (locationURL.includes(`http://localhost:8000/detail?id=`) || locationURL.includes(`http://localhost:8000/lastest-news/detail?id=`)) {
      // dreams.rss.channel.item.slice(0, 1).map((data, index) => {
      //   appendDataDetail(data, index);
      // })
      const find = dreams.rss.channel.item.find((data, index) => {
        return locationURL.includes(`${index}`);
      });
      appendDataDetail(find);
    } else {
       dreams.rss.channel.item.slice(0, 5).map((data, index) => {
        appendDataTitle(data, index);
      }); 
    }
  });

if (locationURL === "http://localhost:8000/") {
  menuLink.style.color = '#000';
  titlePage.innerHTML = "Trang chủ"
}

if (locationURL === 'http://localhost:8000/hot-news') {
  menuLink.style.color = '#000';
  titlePage.innerHTML = "Tin tức hot nhất";
}

if (locationURL === 'http://localhost:8000/lastest-news') {
  menuLink.style.color = '#000';
  titlePage.innerHTML = "Tin tức mới nhất";
}