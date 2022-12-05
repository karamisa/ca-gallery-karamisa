console.log('Starting up');
$(document).ready(initPage)

function initPage(){
    getPortfolio()
    addEventListeners()

}

function addEventListeners(){
    $('#portfolioModal').on('show.bs.modal', function (e) {
        var button = $(e.relatedTarget)
        var projId = button.data('projid')
        setModalContent(projId)
    })

    $('#contact').find('.btn').on('click', function(e){
        var elContactForm=$(e.relatedTarget)
       onSubmitContactForm(elContactForm)
    })
}



function setModalContent(projectId) {
    const project = getProjById(projectId)
    var strHTML = ''
    strHTML += ` <h2>${project.name}</h2>
                <p class="item-intro text-muted">${project.title}</p>
                <img class="img-fluid d-block mx-auto" src="img/portfolio/${project.id}.jpg" alt="">
                <p>${project.desc}</p>
                <ul class="list-inline">
                <li>Date: ${project.publishedAt}</li>
                <li>Client: Threads</li>
                <li>Category: ${project.labels}</li>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close Project</button>`

    $('#portfolioModal .modal-body').html(strHTML)
}

function onSubmitContactForm(elContactForm){
    const  email=elContactForm.find('#inputEmail').val()
    const  subject=elContactForm.find('#inputSubject').val()
    const  messageBody=elContactForm.find('#inputTextArea').val()
    const link=`https://mail.google.com/mail/?view=cm&fs=1&to=karam_isa@icloud.com&su=${subject}&body=${messageBody}%0a%0aFrom:${email}`
    window.open(link,'_blank')
}