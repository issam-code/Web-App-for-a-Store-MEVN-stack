chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url;
    var filename = url.substring(url.lastIndexOf('/')+1);
    let hostname =new URL(url).hostname
    if(hostname == "www.aliexpress.com"){
        var id = filename.replace(/\..+$/, '');
        if(id){
        window.open("http://localhost:3000/products/"+id);
        }    
    }else{alert("No access exept Aliexpress !")}
});

