//假设域名是localhost, 端口是8080

//更多详细使用方法参考 http://www.expressjs.com.cn/guide/routing.html

app.get('/loadMore', function(req, res) {

	var curIdx = req.query.idx
	var len = req.query.len
	var data = []

	for(var i = 0; i < len; i++) {
		data.push('新闻' + (parseInt(curIdx) + i))
	}

	res.send(data);
});