function crttotal()
{
    var p=document.getElementById("offer-price").value;
    var q=document.getElementById("qty").value;
    var t=p*q;
    document.getElementById("tot").innerHTML=t;
}