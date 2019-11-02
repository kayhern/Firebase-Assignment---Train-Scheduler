//Overview of homework: In this assignment, you'll create a train schedule application that incorporates Firebase to host arrival and departure data. Your app will retrieve and manipulate this information with Moment.js. This website will provide up-to-date information about various trains, namely their arrival times and how many minutes remain until they arrive at their station.

//my tutor advised to add this constant for moment.js to function
// const moment = require("moment");

//borrowing functions form this class activity: https://harvard.bootcampcontent.com/Harvard-Coding-Boot-Camp/hu-cam-fsf-pt-09-2019-u-c/blob/master/Week_7/01-Activities/17-TimeSheet/Solved/timesheetLogic.js

$(document).ready(function () {
    //Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyBPU4q63PiNOGyr2qrb-OP2etgX3PQCUpw",
        authDomain: "train-schedule-project-12.firebaseapp.com",
        databaseURL: "https://train-schedule-project-12.firebaseio.com",
        projectId: "train-schedule-project-12",
        storageBucket: "train-schedule-project-12.appspot.com",
        messagingSenderId: "587249166761",
        appId: "1:587249166761:web:e16cbbde6105ae5f0dfcb8",
        measurementId: "G-W3ZL1S9EJH"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    //firebase variable
    var database = firebase.database();

    $("#add-train-button").on("click", function (event) {
        //I saw this in an activity and looked into what it was: https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault -it seems appropriate for this assignment to prevent data I don't want to go into Firebase?
        event.preventDefault();

        //variables of the input fields for schedule
        var name = $("#trainName").val().trim();
        var destination = $("#Destination").val().trim();
        var firstTrainTime = $("#firstTrainTime").val().trim();
        var frequency = $("#Frequency").val().trim();

        //variable for new train being added to the table and all of the elements pertaining to the train
        var newTrain = {
            name: name,
            place: destination,
            time: firstTrainTime,
            frequency: frequency
        };

        //adding train input to firebase
        database.ref().push(newTrain);

        //validating the train input fields are working
        console.log(newTrain.name);
        console.log(newTrain.place);
        console.log(newTrain.time);
        console.log(newTrain.frequency);

        //clearing train input fields after form is submitted
        $("#trainName").val("");
        $("#Destination").val("");
        $("#firstTrainTime").val("");
        $("#Frequency").val("");

    });

    //*populating the html with train input from above and adding into firebase

    database.ref().on("child_added", function (childSnapshot) {
        console.log(childSnapshot.val());

        //variable time again
        var name = childSnapshot.val().name;
        var destination = childSnapshot.val().place;
        var firstTrainTime = childSnapshot.val().time;
        var frequency = childSnapshot.val().frequency;

        //moment.js to calculate the minutes until arrival based upon the frequency and first start time


        //new row on table
        var newRow = $("<tr>").append(
            $("<td>").text(name),
            $("<td>").text(destination),
            $("<td>").text(firstTrainTime),
            $("<td>").text(frequency),
            //this is the moment.js calculation
            //  $("<td>").text(minutesAway),
        );

        //https://momentjs.com/docs/#/displaying/difference/ - displaying the difference between two times 

        let minutesAway =

            //new role into the top table
            $("#table-top > tbody").append(newRow);

    });

});


//5. L: ensure time data is altered properly (arrival time is relative to current time AND in military format)
//https://momentjs.com/docs/#/displaying/difference/
//6. XL: ensure the data remains up to date when more is added

//Train Name - static 1:1
//Train Destination - static 1:1
//First Train Time - military time - static but alters table
//Frequency - minutes - static 1:1 && alters table

//Train Name - static 1:1
//Train Destination - static 1:1
//Frequency - static 1:1
//Next Arrival - First Train Time Plus Frequency
//Minutes Away - Subtract Minute Frequency from Arrival time

//regular expressions for military time