//Overview of homework: In this assignment, you'll create a train schedule application that incorporates Firebase to host arrival and departure data. Your app will retrieve and manipulate this information with Moment.js. This website will provide up-to-date information about various trains, namely their arrival times and how many minutes remain until they arrive at their station.

//1. SM: incorporate moment.js
//2. SM: ensure firebase works
//3. SM: ensure data is being sent to firebase
//4. M: ensure website updates with data
//5. L: ensure time data is altered properly (arrival time is relative to current time AND in military format)
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