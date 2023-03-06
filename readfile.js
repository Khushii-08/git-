var http=requied('http');
var fs=requied('fs');
http.createServer(function (req,res){
    fs.readFile('resume.html', function(err, data){
        res.writeHead(200, {'content-Type': 'text/html'});
        res.write(data);
        return res.end();

    });
}).listen(8094);
