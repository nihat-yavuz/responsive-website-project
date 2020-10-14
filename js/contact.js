$(document).ready(function (){

    $('.send').click(function (event){
        event.preventDefault()
        
        var name = $('.name').val()
        var surname = $('.surname').val()
        var email = $('.email').val()
        var message = $('.message').val()
        var statusElm = $('.status')
        statusElm.empty()

        if(name.length != 0){
            statusElm.append('<div> Name is valid! </div>')
        }else{
            statusElm.append('<div style="background-color:red;"> Name is NOT valid! </div>')
        }
        

        if(surname.length != 0){
            statusElm.append('<div> Surname is valid! </div>')
        }else{
            statusElm.append('<div style="background-color:red;"> Surname is NOT valid! </div>')
        }
        

        if(email.length > 5 && email.includes('@') && email.includes('.')){
            statusElm.append('<div> Email is valid! </div>')
        }else{
            statusElm.append('<div style="background-color:red;"> Email is NOT valid! </div>')
        }

        if(message.length > 50){
            statusElm.append('<div> Message is valid! </div>')
        }else{
            statusElm.append('<div style="background-color:red;"> Message is NOT valid! </div>')
        }
        
    })

})