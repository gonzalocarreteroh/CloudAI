Start an EC2 instance in AWS (different than the one used for the webapp). We used an EC2 Ubuntu t3.large instance with 30GB of disk storage. Modify the security group inbound rules to allow TCP traffic from any IP.

Connect to the instance through SSH. Follow the instructions in the instruction_to_setup_ec2.txt file found in this repository to install the necessary requirements.

Please use 

pip install "numpy<2"

in case an error with the version shows when running the code.


Note: the send_request.py isn't used to run the project and it was just used for testing. Additionally, the photo provided in this repo is just a reference of a photo you may use for testing, but any other can be used as well.
