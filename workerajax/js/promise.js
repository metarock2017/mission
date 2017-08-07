function ajax(ev) {
    return new Promise((resolve, reject) => {
    	method = ev.method || 'GET';
    	data = ev.data || '';
    	url = ev.url;
		var xhr = window.XMLHttpRequest ? xhr = new XMLHttpRequest(): xhr = new ActiveXObject('Microsoft.XMLHTTP');
        xhr.open(method, url, true);   
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(xhr.responseText);
                }  
        }
        xhr.setRequestHeader('content‐type' , 'application/x‐www‐form‐urlencoded');
        xhr.send(data);
    })
}
ajax({
		method: 'GET',
		url: '/news?num=1',
		data: {
		}
	})
.then( function(data) {
	console.log(data);
}).catch(function (err) {
	console.log(err);
})