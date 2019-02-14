### Prerequisites ##
1. Install MongoDB 
2. Install Node v8.12.0

### File Setup ##
1. In the root directory make a file called .babelrc and write the below content

	{
		  "presets": [ "env","react","stage-0" ],
		  "plugins": ["react-hot-loader/babel","transform-object-rest-spread" ]
	}


### Development envt setup ###

1. go to the root directory

2. install all dependencies by running the below command in a terminal(say A).
> **npm install**

3. initiate MONGODB connection . start another terminal(say B) for your mongo server and run the below command. 
> **npm run dbon**

4. populate given csv data provided inside demo_data folder into the database by running the below command in terminal(A).
> **npm run dataimport**

5. start the project by running the below command in terminal(A).
> **npm run start**

6. Go to your browser and open
> **localhost:3000**