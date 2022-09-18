window.onload = function postDataToWebhook(data){

    const queryString = window.location.search; //Find all params
    const urlParams = new URLSearchParams(queryString); // Decode params
    const email = urlParams.get('email') // Get value
    const mixId = mixpanel.distinct_id()

    mixpanel.alias(email);

    mixpanel.init('', {
        loaded: function(mixpanel) {
            distinct_id = mixpanel.get_distinct_id();
        }
    });




    if (email.length > 4) {
        var webHookUrl = "https://hook.eu1.make.com/pcnh2rirfilp2q8iwcx75ijwbofvc3hu";
        //https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
        var oReq = new XMLHttpRequest();
        var myJSONStr = payload={
    
            "data":[
                {
                "fields":[
                    {
                        "title":"email",
                        "value": email,
                        "short":true
                    }
                ]
                }
            ]
        };
    
        //register method called after data has been sent method is executed
        oReq.addEventListener("load", reqListener);
        oReq.open("POST", webHookUrl,true);
        oReq.setRequestHeader('Content-Type', 'application/json');
        oReq.send(JSON.stringify(myJSONStr));

        //callback method after webhook is executed
        function reqListener () {
            console.log(this.responseText);
        }
    } 
    
    else {

        console.log("nothing")


    }

}





