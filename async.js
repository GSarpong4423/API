window.onload = function(){
    
    var http = new xmlHttpRequest();
    
    http.onreadystatechange = function(){
        if(http.readyState == 4 && http.status == 200){
            console.log(JSON.parse(http.response));
            
        }
        console.log(http);
    };
    
    http.open("GET", "Ajax/tweets.json", true);
    http.send();
    
    
    // jquery method - same as above
    $.get("Ajax/tweets.json", function(data){
        console.log(data);
    });
    console.log("test");
    
};
/* READY STATES

0 - request not installed 
1 - request has been set up
2 - request has been set up
3 - request is in process
4 - request is complete

*/