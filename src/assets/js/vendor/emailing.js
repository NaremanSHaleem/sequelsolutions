function sendMail() {
    console.log('emailing');

    var link = "mailto:hlsm79eop@disbox.net"
             + "&subject=" + escape(subject)
             + "&body=" + escape(body)
    ;

    window.location.href = link;
    console.log('email sent');
}


// function sendMail(){
// var data = {
//     name: "nareman",
//     email: "naremansalama94@gmail.com",
//     message: "naremansalama94@gmail.com"
// };
// $.ajax({
//     type: "POST",
//     url: "index.html",
//     data: data,
//     success: function(){
//         $('.success').fadeIn(1000);
//     }
// });
// }
// function sendMail() {
//     console.log('emailing');
//     Email.send("naremansalama94@gmail.com",
//         "xqh8s21yo@tmpmail.net",
//         "This is a subject",
//         "this is the body");
//     console.log('done');

// }