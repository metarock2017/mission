var w;
function worker() {
    if(typeof(Worker) !== "undefined") {
        if(typeof(w) == "undefined") {
            w = new Worker("./js/worker.js");
        }
        w.onmessage = function(event) {
            document.querySelector(".result").innerHTML = event.data;
        };
    } else {
        document.querySelector(".result").innerHTML = "抱歉，你的浏览器不支持 Web Workers...";
    }
}
worker();
