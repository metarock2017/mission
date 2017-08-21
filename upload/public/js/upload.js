// //xhr2上传文件
// let up = document.querySelector('#up');
// up.addEventListener("click",function load() {
//         //FormData
//         var fd = new FormData();
//         fd.append("myfile", $("#myfile")[0].files[0]);
//         var xhr = new XMLHttpRequest();

//         // 监听状态
//         xhr.upload.onprogress = (event) => {
//             if (event.lengthComputable) {
//                 var percent = Math.round(event.loaded * 100 / event.total);
//                 console.log('%d%', percent);
//                 $("#upprog").text('上传进度:' + percent + '%');
//             }
//         }
//         // 传输开始事件
//         xhr.onloadstart = (event) => {
//             console.log('load start');
//             $("#upprog").text('开始上传');
//             $("#stopbtn").one('click', function() {
//                xhr.abort();
//                 $(this).hide();
//             });

//         };
//         //完成
//         xhr.onload = (event) => {
//             console.log('load success');
//             $("#upprog").text('上传成功');

//             // console.log(xhr.responseText);
//             let ret = JSON.parse(xhr.responseText);
//         };
//         //错误
//         xhr.onerror = (event) => {
//             console.log('error');
//             $("#upprog").text('Something wrong');
//         };
//         //被取消
//         xhr.onabort = (event) => {
//             console.log('abort');
//             $("#upprog").text('操作被取消');
//         };
//         //传输结束
//         xhr.onloadend =  (event) => {
//             console.log('load end');
//         };
//         xhr.open('POST', '/upload', true);
//         xhr.send(fd);
// })


let up = document.querySelector('#up');
let myfile = document.querySelector('#myfile');
if (!window.FileReader) {
        alert('你的浏览器不支持');
    }
myfile.addEventListener("change",function() {
    var file = this.files[0];
    var reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.addEventListener("load",(e) => {
        var slice = e.target.result.slice(0, 10*1024*1024);
        console.log(1)
        var fd = new FormData();
        fd.append('0',slice);
        fd.append('filename',file.filename);
    })
    var xhr = XMLHttpRequest;
    xhr.open('POST', '/upload', true);
    xhr.send(fd);
})
