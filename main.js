//f967be664c7c427390facab3403a4a94
class News{
    constructor(author,title,description,date,img,url){
        this.author=author
        this.title=title
        this.description=description
        this.date=date.slice(0, 10) 
        this.img=img
        this.url=url

    }
    pushNews(){
        document.querySelector('article').innerHTML+=
            `<div class="card d-flex justify-content-evenly shadow-lg p-3 mb-5 bg-body rounded" style="width: 18rem;margin:2%">
            <img src="${this.img}" class="card-img-top" alt="...">
            <div class="card-body ">
              <h5 class="card-title">${this.title}</h5>
              <p class="card-text ">${this.description}.</p>
              
              <div class="text-center ">
              <p class="card-text ">${this.date}.</p>
              <a href="${this.url}" class="btn btn-dark ">Read More</a>
              </div>
            </div>
          </div>`
    }
}


  function openNews(){
      let keyNews= document.querySelector('input').value
      console.log(keyNews)
    fetch(`http://newsapi.org/v2/everything?q=${keyNews}&from=2021-09-07&to=2021-09-07&sortBy=popularity&apiKey=f967be664c7c427390facab3403a4a94`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let newsArticle=data.articles
            console.log(newsArticle)

            newsArticle.forEach(newData=>{
                let author= newData.author
                let date = newData.publishedAt
                let title = newData.title
                let description = newData.description
                let img = newData.urlToImage
                let url=newData.url

                let newNews=new News(author,title,description,date,img,url)

                newNews.pushNews()
                })

        });
  }