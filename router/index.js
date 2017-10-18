
const Index = (path, req, res) => {
        console.log('index');
        console.log(path);
        res.writeHead(200,{'content-type':'text/plain'});
        res.end('welcome to ' + path);
}

module.exports = Index;