$(document).ready(function(){
    var fname;
    var lname;
    var emailid;
    var phonenum;
    $(document).on('click','button',function(){

        // $('.adduser .formsub').submit(function(){
            fname = $('.firstname').val();
            console.log(fname);
            lname = $('.lastname').val();
            console.log(lname);
            emailid = $('.email').val();
            console.log(emailid);
            phonenum = $('.phone').val();
            console.log(phonenum);
            $('.wrapper table').append('<tr><td>'+ fname + '</td><td>' + lname + '</td><td>' + emailid + '</td><td>' + phonenum + '</td></tr>');
            return false
        // });

    });
});
