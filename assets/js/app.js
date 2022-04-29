

app ={
    goTo:{
        page: function(page, cb){
            app.clearApp();
            app.showPage();
            main.loadPage(page, "app", cb);
        },
        popup: function(popup, cb){
            app.hidePage();
            main.loadPage(popup, "popup", cb)
        }
    },
    hidePage: function(){
        var pageElement = document.getElementById("maincontainer");
        if(pageElement){
            pageElement.style.display = "none";
        }
    },
    showPage: function(){
        var pageElement = document.getElementById("maincontainer");
        if(pageElement){
            pageElement.style.display = "block";
        }
    },
    clearApp: function(){
        main.clearElement("app");
    },
    clearScripts: function(){
        main.clearElement("scripts");
    },
    loadScript: function(script, onScriptLoad){
        this.clearScripts();
        main.loadScript(script,"scripts", onScriptLoad)
    }
};

window.onload = function (){

    if(window.location.pathname == "/"){
        document.getElementById("popup").style.display = "none";
        app.goTo.page("/pages/home.html", function(){   });
    }
}

