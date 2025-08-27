$(document).ready(function(){


    $('form').validate({
        rules:{
            email:{
                required: true
            },
            senha:{
                required: true
            }
        },
        messages:{
            senha:'Por favor insira sua senha'
        },
    })
})