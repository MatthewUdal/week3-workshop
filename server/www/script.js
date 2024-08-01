$( document ).ready(function() {
    console.log("Page Ready");
    $('#loginform').submit(function(event){
        event.preventDefault();
        ajaxPost();
    });

    function ajaxPost(){
        var formData = {
            email : $("#email").val(),
            upwd : $("#upwd").val()
        }
        $.ajax({
            type : "POST",
            contentType : "application/json",
            url : window.location + "api/login",
            data : JSON.stringify(formData),
            dataType : 'json',
            success : function(customer) {
                $("#resultContainer").removeClass("fail");
                if (customer.valid == true){
                    $("#resultContainer").removeClass("fail");
                    $("#resultContainer").addClass("success");
                    $("#errormsg").addClass("hidemessage");
                }else{
                    $("#resultContainer").removeClass("success");
                    $("#resultContainer").addClass("fail");
                    $("#errormsg").removeClass("hidemessage");

                }
                $("#postResultDiv").html("<p>" + "Post Successfully! <br>" + "Email Address: " + customer.email + "<br>" + 
                    "Password: " + customer.upwd + "<br>" + "Valid User: " + customer.valid + "</p>");
            },
            error : function(e) {
                alert("Error!")
                console.log("ERROR: " + e);
            }
        });
    // resetData();
    }

    // function resetData(){
    //     $("#email").val("");
    //     $("#upwd").val("");
    // }

});

