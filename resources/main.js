// do some stuff on load
$(document).ready(function(){
    //display the next J times
         
     
     var nextBusURL = "http://webservices.nextbus.com/service/publicJSONFeed?command=predictions&a=sf-muni&stopId=16213";
     $.getJSON(nextBusURL, function(data){
         //console.log(data); 
         var nextJ = data.predictions.direction.prediction[0].minutes;
         console.log(nextJ);
         $('#nextJ').append('<p>Next J is in ' + nextJ + ' minutes.</p>');   
     });
    
        
    
    });



