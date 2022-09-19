## Starter Code

    Step 01: Download/Clone the repository and install the packages.
    Step 03: `npm start` to start the application 

## Problem Statement

In the following problem statement a function named "runBigTaskReducer" is executed by buttons 
"Sync on Main thread" and "Async on Main thread".

Click on the "Sync on Main thread" button, and then immediately try clicking on the "Print Button" or "Alerts Button". You can observe that the UI is blocking,
"Print Button" and "Alerts Button" will not work until the function executed by "Sync on Main thread" gives the output.

Task: Implement the concept of "web workers" in react. The function "runBigTaskReducer" should be executed using the web workers.
The function should work on clicking "Web Worker" button. For testing, please use the "Buttons for testing UI blocking" section.

Note: When the web-workers are running in the background, you can observe that there is no UI blocking and "Print/Alerts Button" will still run.
          

