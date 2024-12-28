//when the code is served with parcel, the process.env method will fetch the api key from the .env file
const apiKey = process.env.NEWS_API_KEY;
//this string represents the api endpoint
//the string represents the api endpoint for top-headlinges with a country parameter of "us" and passes your apiKey to the query parameter in the url
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

async function fetchNews(){
  try{
    let response = await fetch(url);
    let data = await response.json();
    console.log(data.articles);
  //TODO: Add function call to display the news
  displayNews(data.articles);
  }catch(error){
    console.error('The server is currently on fire...\nPlease try again.', error);
  }finally{
    console.log("After 10,000 years of confinement,\nmy lizard is the size of the ocean.\nIt's time to drain it.");
  }
}
function displayNews(articles){
  const newsDiv = document.querySelector('#news');
  for(let article of articles){
  //create dom elements
    const articleDiv = document.createElement('div');//create div for holding article
    articleDiv.classList.add('article');
    const articleImg = document.createElement('img');
    const articleTitle = document.createElement('h4');//create h2 element for title
    const articleDescrip = document.createElement('p');
    const articleLink = document.createElement('a');
  //attach article data to appropriate elements
    articleTitle.textContent = article.title;
    articleDescrip.textContent = article.description;
    articleImg.src = article.urlToImage || 'https://i.giphy.com/3oEjI6SIIHBdRxXI40.webp';
    articleLink.href = article.url; 
  //append individual elements to articleDiv
    articleDiv.appendChild(articleTitle);
    articleDiv.appendChild(articleImg);
    articleDiv.appendChild(articleDescrip);
    articleDiv.appendChild(articleLink);
  //append articleDiv to newsDiv
    newsDiv.appendChild(articleDiv);
  }
}
fetchNews();
