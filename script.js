$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4
            },
            sname:{
                required:true
            },
            emails:{
                required:true,
                email:true  
            },
            password:{
                required:true,
                minlength:6
            },
            gender:{
                required:true
            },
            date_of_birth:{
                required:true
                
            }
        }
        // highlight:function(input){
        //     $(input).addClass('error');
        // },
        // errorPlacement:function(error,element){}
    })
})