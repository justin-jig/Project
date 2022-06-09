const open = require('open');
const app = require('../app');

/** html 파일 실행 */
const fileAddress = `file:///${process.cwd()}/index.html`
open(fileAddress, {
	app: {
		name: open.apps.chrome
	}
});

var server = app.listen(6001, function () {
	var host = server.address().address
	var port = server.address().port
	console.log("Example app listening at http://%s:%s", host, port)
	
})

