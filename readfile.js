var http=requied('http');
var fs=requied('fs');
http.createServer(function (req,res){
    fs.readFile('resume.html', function(err, data){
        res.writeHead(200, {'content-Type': 'text/html'});
        res.write(data);
        return res.end();

    });
}).listen(8094);

<!--git push

to create a repo
echo "# webside" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Khushii-08/webside.git
git push -u origin main


add file to exe repo

git remote add origin https://github.com/Khushii-08/webside.git
git branch -M main
git push -u origin main-->
