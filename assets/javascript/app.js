//Overview of homework: In this assignment, you'll create a train schedule application that incorporates Firebase to host arrival and departure data. Your app will retrieve and manipulate this information with Moment.js. This website will provide up-to-date information about various trains, namely their arrival times and how many minutes remain until they arrive at their station.

//my tutor advised to add this constant for moment.js to function
const moment = require("moment");

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
        console.log(newTrain.destination);
        console.log(newTrain.time);
        console.log(newTrain.frequency);

        //clearing train input fields after form is submitted
        $("#trainName").val("");
        $("#Destination").val("");
        $("#firstTrainTime").val("");
        $("#Frequency").val("");



    });

    //populating the html with train input from above and adding into firebase










});




//1. SM: incorporate moment.js
//4. M: ensure website updates with data
//5. L: ensure time data is altered properly (arrival time is relative to current time AND in military format)
//https://momentjs.com/docs/#/displaying/difference/
//6. XL: ensure the data remains up to date when more is added
//7. L: ensure the data gets updates when other machines view

//Train Name - static 1:1
//Train Destination - static 1:1
//First Train Time - military time - static but alters table
//Frequency - minutes - static 1:1 && alters table

//Train Name - static 1:1
//Train Destination - static 1:1
//Frequency - static 1:1
//Next Arrival - First Train Time Plus Frequency
//Minutes Away - Subtract Minute Frequency from Arrival time

//watch database video
//look at other assignments for inspiration
//regular expressions for military time