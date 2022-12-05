'use strict'
const gProjects = [
    {
        id: "touchnums",
        name: "Touchnums",
        title: "Coding Exercise: Create a Touch Numbers Game",
        desc: "After a brief intoduction into the basics of Javascript, HTML, and CSS, I created a simple game in which the user touches numbers sequentialy on a board with the time to complete being the score.",
        url: "/projs/touch-nums",
        publishedAt: 1670248591668,
        labels: ["HTML", "CSS", "Javascript", "setInterval", "HTML Tables", "Matrix"]
    },
    {
        id: "minesweeper",
        name: "Minesweeper",
        title: "Coding Sprint Challenge #1: Create a Minesweeper Game",
        desc: "After three weeks of intense instruction on the basics of Javascript, HTML, and CSS, I used what I learned to design a minesweeper game from scratch.",
        url: "https://karamisa.github.io/minesweeper/",
        publishedAt: 1670248591668,
        labels: ["HTML", "CSS", "Javascript", "internet game"]
    },
    {
        id: "bookshop",
        name: "Bookshop",
        title: "Coding Exercise: create a virtual book management website",
        desc: "After learning more about MVC, CRUDL, manipulating local storage, and using JSON files, I created a book manager for a theoretical book store owner to review and manage his collection of books.",
        url: "/projs/books-shop",
        publishedAt: 1670248591668,
        labels: ["HTML", "CSS", "Javascript", "JSON", "local storage", "services", "MVC", "CRUDL"]
    }
]



function getPortfolio() {
    var strHTML = ''
    for (var i = 0; i < gProjects.length; i++) {
        strHTML += ` <div class="col-md-4 col-sm-6 portfolio-item">
                        <a class="portfolio-link" data-projid="${gProjects[i].id}" data-toggle="modal" href="#portfolioModal">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                            <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img class="img-fluid" src="img/portfolio/${gProjects[i].id}.jpg" alt="">
                        </a>
                        <div class="portfolio-caption">
                        <h4>${gProjects[i].name}</h4>
                        <p class="text-muted">${gProjects[i].title}</p>
                        </div>
                    </div>`
    }
    $('#portfolio .portfolio-items').html(strHTML)




}



function getProjById(projId) {
    const proj = gProjects.find(proj => projId === proj.id)
    return proj
}
