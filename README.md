# COMP 4651 Group 9
## Cloud-based Image Classification System with AWS Services


Gonzalo Carretero (21158252) gch@connect.ust.hk 

Siyoon Park (20739700) sparkay@connect.ust.hk 

Yeung Kong Sunny Lam (20857162) ykslam@connect.ust.hk 

Gunwoo Park (20635825) gparkab@connect.ust.hk

We developed a web application and an AI model to allow users to classify images of digits, integrated into multiple AWS cloud services to provide computing and storage scalability. In particular, we made use of several EC2 instances to run the webapp and AI model, an S3 bucket to store the images and an AWS Lambda function to connect everything together.

A video of how the system works is provided in the root of this directory: 


The webapp can be found in [webapp](/webapp) and the Convolutional Neural Network used for image classification in [AIModel](/AIModel). 

To replicate the project, please clone this repository into your local device and follow the instructions in the README.md files inside each of the above folders for further setup details.
