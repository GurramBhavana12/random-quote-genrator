function generatequote(){
    let quotecontainer=document.getElementById('quote')
    let mainauthor=document.getElementById('main-author')
    let mainauthorone=document.getElementById('author-one')
    let mainauthortwo=document.getElementById('author-two')
    let mainauthorthree=document.getElementById('author-three')
    let randomnumber=Math.floor(Math.random() *16)
    
    fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    quotecontainer.innerHTML=data[randomnumber].text
    mainauthor.innerHTML=data[randomnumber].author
    mainauthorone.innerHTML=data[randomnumber-1].author
    mainauthortwo.innerHTML=data[randomnumber+1].author
    mainauthorthree.innerHTML=data[randomnumber+2].author
  });
}