This Project is Created By Using React, Express, Mongoose, Tailwind CSS, MongoDB, and Axios. Here it, Holds Account details, Active Accounts Details, Transaction Related To the Given Account Number, Distinct Products, and Customer details whose one transaction is less than 5000.

1st on vs code open the terminal and run the command      git clone https://github.com/sanhit1624/NEW     then using the clone the git will copy all the files into your folder then come to your project file repository i.e. backend for that use "cd ./Backend/" and now run the command "npm i", so this will create "node modules" into your folder, bcoz through node modules only you'll able to do further operations, then the automatically all dependencies will get installed into your device and now on the terminal run "npm i nodemon -g" so nodemon will monitor for any changes in our source and automatically restart our server, so it is very important dependency.  Then after this create a .env file in your folder structure and copy this code -->>   
CONNECTION="mongodb://127.0.0.1:27017/testvist"
PORT=8082
BUILD="view"  (one below one). 

Now for the backend connection install Mongodb compass on your laptop, dump all the bson data in your Mongodb compass correctly, and create a connection between your backend using MongoDB in your backend paste your connection URL of Mongodb and now in terminal do "npm start" and on browser search "localhost:8082" you'll able to see all the results.
