var config = {

  var config = {
    apiKey: "AIzaSyDOYSS_GfCQC9vRlogAeraTEoRoVYrU5os",
    authDomain: "hwtrain-edb14.firebaseapp.com",
    databaseURL: "https://hwtrain-edb14.firebaseio.com",
    storageBucket: "hwtrain-edb14.appspot.com",
    messagingSenderId: "444260101114"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  $("#submit").click(function(){
    var name = $("#nameinput").val().trim();
    var destination = $("#destinput").val().trim();
    var time = $("#timeinput").val().trim();
    var frequency = $("#freqinput").val().trim();

    database.ref().push({
        name: name,
            destination: destination,
            time: time,
            frequency: frequency
        })
        $("input").val('');
            return false;

});
  database.ref().on("child_added", function(childSnapshot){
   var name = childSnapshot.val().name;
    var destination = childSnapshot.val().destination;
    var time = childSnapshot.val().time;
    var frequency = childSnapshot.val().frequency; 

    console.log("Name: " + name);
    console.log("Destination: " + destination);
    console.log("Time: " + time);
    console.log("Frequency: " + frequency);
    console.log(moment().format("hh:mm"));

    var firstTimeConverted = moment(time,"hh:mm").subtract(1, "years");
    var firstTimeConverted = moment(time,"hh:mm").subtract(1, "years");

    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
        console.log("DIFFERENCE IN TIME: " + diffTime);

    var tRemainder = diffTime % frequency;
        console.log(tRemainder);

    var tMinutesTillTrain = frequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    var nextTrain = moment().add(tMinutesTillTrain, "minutes").format("hh:mm");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm")); 

    var newElement = $("<tr/>").attr("data-name", name);
      newElement.append($("<td/> ").text(name));
      newElement.append($("<td/> ").text(destination));
      newElement.append($("<td/> ").text(frequency));
      newElement.append($("<td/> ").text(nextTrain)); 
      newElement.append($("<td/> ").text(tMinutesTillTrain));
    $(".table").append(newElement);  

});         
