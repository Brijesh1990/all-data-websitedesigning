function test()
{
    var a=parseInt(document.getElementById("a").value);
    var b=parseInt(document.getElementById("b").value);
    var c=a+b;
    // alert('Additions of numbers is :'+c);
    document.getElementById("result").innerHTML="Additions of numbers is :"+c;
}