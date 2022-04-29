main = {
    Storage: {
        set: function (key, value) {
            localStorage[key] = JSON.stringify(value);
        }
        ,
        get: function (key) {
            return localStorage[key] ? JSON.parse(localStorage[key]) : null;
        }
    },
    loadPage: function (href, element, cb) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", href, true);
        xmlhttp.send();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                // Typical action to be performed when the document is ready:
                document.getElementById(element).innerHTML = xmlhttp.responseText;
                if(cb){cb();}
            }
        };
    },
    loadScript: function(src,element,cb){
        var newScript = document.createElement("script");
        newScript.src = src;
        newScript.type = "text/javascript";
        var target = document.getElementById(element);
        target.appendChild(newScript);
        newScript.onload = cb;
    },
    clearElement: function(element){
        var target = document.getElementById(element);
        if(target){
            target.innerHTML = "";
        }
    }
};

