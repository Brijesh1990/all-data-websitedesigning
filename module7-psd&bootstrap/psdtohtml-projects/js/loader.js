var myVar;
function mainFunction()
{
    myvar=setTimeout("load()",3500);
}

function load()
{
    document.getElementById("loader").style="display:none !important";
    document.getElementById("mainPage").style="display:block !important";
}