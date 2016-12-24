window.onload=function()
{
    var timer1,timer2;
    var oCen=document.getElementById('center');
    var aImg=oCen.getElementsByTagName('img');
    var aKp=oCen.getElementsByTagName('li');
    aImg[0].style.display='block';
    aKp[0].style.background='#35ab88';
    aKp[0].style.color='#fff';

    function timer(){
        for(var i=0;i<4;i++) {
            var n;
            aImg[i].n = i;
            if (aImg[i].style.display == 'block')
            {
                var m;
                m=aImg[i].n;
                clearTimeout(timer2);
                timer2 = setTimeout(function () {
                    for (var j = 0; j < aKp.length; j++) {
                        aKp[j].style.background = '#bdbdbd';
                        aImg[j].style.display = 'none';
                        aKp[j].style.color = 'black';
                    }
                    if (m==3)
                        m=0;
                    else
                        m=m+1;
                    aKp[m].style.background = '#35ab88';
                    aImg[m].style.display = 'block';
                    aKp[m].style.color = '#fff';
                }, 5000);
            }
        }
    }
    timer1=setInterval(timer,5050);
    //function f(){
        for(var i=0;i<aKp.length;i++)
        {
            var m;
            aKp[i].m=i;
            aKp[i].onmouseover=function LB()
            {
                clearInterval(timer1);
                clearTimeout(timer2);
                for(var j=0;j<aKp.length;j++)
                {
                    aKp[j].style.background='#bdbdbd';
                    aImg[j].style.display='none';
                    aKp[j].style.color='black';
                }
                aKp[this.m].style.background='#35ab88';
                aImg[this.m].style.display='block';
                aKp[this.m].style.color='#fff';
            };
           aImg[i].onmouseover=function()
            {
                clearInterval(timer1);
                clearTimeout(timer2);
            };
            aKp[i].onmouseout=aImg[i].onmouseout=function()
            {
                timer1=setInterval(timer,5050);
            };
        }
};