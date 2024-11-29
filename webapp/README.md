Start an EC2 instance in AWS. We used an EC2 Ubuntu t3.large instance with 30GB of disk storage. Modify the security group inbound rules to allow TCP traffic from any IP.

Connect to the instance through SSH. Install the necessary requirements for the project.

Mainly:

sudo apt update

sudo apt-get install nodejs

sudo apt install npm

// After running the command bellow, giva a name for the project and choose React and Typescript as the development tools

npm create vite@latest

npm install axios

npm install express

npm install multer

npm install cors

npm install dotenv

npm install aws-sdk

After installing all the necessary requirements, remove all the files inside the src/ directory that has been created inside your Vite project and replace them with the ones that you clones in this directory (you may use scp command in your local machine to achieve this).


#
Frontend:

To start the frontend, run the following command:

npm run dev

An http link will be displayed that can be opened in a web browser. However, to see the UI in you local machine, you need to replace the IP inside the http link with the public IP address of the EC2 instance in which the Vite project is running on.


#
Backend:

Open a new terminal in your local computer and connect to the same EC2 instance with SSH. cd into the backend/ dir and run the command:

node server.js

#

Now you can use the UI to send images from your local device to the backend!!

