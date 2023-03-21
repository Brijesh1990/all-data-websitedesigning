function valid()
{
if(document.frm.name.value=="")
{
    // alert('Please enter your Name');
    document.getElementById("error").innerHTML='Please enter your name';
    document.frm.name.focus();
    return false;
}
// regular expression in javascript i.e used to check valid email | alaphabetic character | numbers r.e.
var nm=/^[A-Za-z]+$/;
if(!nm.test(document.frm.name.value))
{
    alert('Name should be always alphabetic character');
    document.frm.name.focus();
    return false;
}
}