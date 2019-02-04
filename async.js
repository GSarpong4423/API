window.onload = function(){
    
    function handle(jqXHR, testStatus, error){
        console.log(error);
    }
    
    $.ajax({
        type: "GET",
        url: "data/tweets.json",
        success: cdTweets,
        error: handleError
    });
    
    function cbTweets(data){
        console.log(data);

            
        $.ajax({
        type: "GET",
        url: "data/friends.json",
        success: cbFriends,
        error: handleError
    });
     
     function cbFriends(data){
        console.log(data);
  }
           
        $.ajax({
        type: "GET",
        url: "data/videos.json",
        success: cbVideos,
        error: handleError
    });
     
     function cbVideo(data){
        console.log(data);
 }
        },
        error: handleError
        }
    });
        },
        error: handleError
        }
        error: handleError
    });
};