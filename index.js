var http = require('http');
http.createServer(function(req, res) 
{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Nghiem phuong trinh:\n'+gptbh(1,2,1));
    res.write('\n'+kiemtrataikhoan('hello','123'));
    res.end();
}).listen(8081);
function gptbh(a,b,c)
{
    var d=Math.pow(b,2)-4*a*c;
    if(d>0)
    {
        var x1=(-b+Math.sqrt(d))/(2*a);
        var x2=(-b-Math.sqrt(d))/(2*a);
        return x1+'\n'+x2;
    }
    else if(d==0)
    {
        return -b/(2*a);
    }
    else
    {
        return 'vo nghiem';
    }
}
function kiemtrataikhoan(id1,pass1)
{
    var id='hello';
    var pass='123';
    if(id1==id && pass1==pass)
    {
        return 'Successful'
    }
    else
        return 'Fail'
}