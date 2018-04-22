# If you do not have nodemon installed in your global scope do so as we will be using it.

    npm install nodemon -g

    * why use nodemon instead of just node

# Install our project dependancies

    npm install express mongoose body-parser morgan cors --save

    it is important that we install CORS, if you dont know what these packages do, i suggest you go and read about them.


# lets tell our server what port to listen to

	app.listen(3030, err => {
		console.log('Big brother is listening to port 3030');
	});


	now run nodemon server.js

	you should see the console debug message echoed on the screen. Changing the message and saving will automatically restart the server with you having to stop and start it and hence why we use nodemon


# Now lets create our first http route

	app.get('/', (req, res, next) => {
        res.json({
            user: 'Khululekani Mkhonza'
        });
    });


	now head over to your browser and navigate to localhost:3030

	you should see a json formatted data {"user" : "khululekani Mkhonza"}


# now lets use our mongodb

	head over to mlab and create an account

	create a free database in the sandbox and give it name you would remember, or relavant to your project. I will name mine amazonclone

	go into your database instance and add a new user

	copy your connection string from mlab mine is mongodb://<dbuser>:<dbpassword>@ds111638.mlab.com:11638/amazonclone
	so you should have something similar

Head over to our project files

	create a config.js file where we will store our DB connection credentials

	mine look like this, remember to update the username and password on the string as per your installation

	module.exports = {
        database: 'mongodb://username:password@ds111638.mlab.com:11638/amazonclone',
        port: 3030,
        secret: 'q9RjOof6d3BeHISR3Xn8bc58YhI0QMCFJ/+AWqLcNic'
    }

	create a connection to the database

	BAM Bob's your uncle ;)





