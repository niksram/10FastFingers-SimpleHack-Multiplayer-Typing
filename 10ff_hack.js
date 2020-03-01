var word=document.querySelectorAll("div.place");
var inp=document.getElementsByTagName("input");
inp=inp[0];
word=word[0];
var child=word.children;
var ch=new Array(100);
for(i=0;i<child.length;i++)
    ch[i]=child[i].innerHTML;
var length=0;
inp.addEventListener("keydown", inper, false);
function inper(e)
{
    if(e.keyCode=32 && length++<child.length)
    {
        inp.value=ch[length-1];
    }
}