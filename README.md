# PC_1 SIDE

Here you have to clone body detection part from github:

	git clone https://github.com/DanPozza/Bodyd.git

and the node js server:

	git clone https://github.com/DanPozza/node.git

inside pc_1.js file you have to modify the ip address of bridge_pc, you have to insert your new IP.


now you have to install "express" and "nodemailer" tools useful for nodejs :


	cd node

	npm install nodemailer-ses-transport --save

	npm install nodemailer --save

	npm install express --save
 


after that on the console write:

	cd node

	nodejs pc_1.js

the server will start.

Now go inside the folder Bodyd using :

	cd Bodyd

than write these commands in the console:

	cmake .

	make

	./Bodyd

in this way you can run the Body detection software part.




# BRIDGE_PC SIDE

Here you have to clone nodejs part from github:

	git clone https://github.com/DanPozza/node.git

inside bridge_pc.js file you have to modify the ip address of AWS, you have to insert new IP.

now you have to install "express" and "nodemailer" tools useful for nodejs :


	cd node

	npm install nodemailer-ses-transport --save

	npm install nodemailer --save

	npm install express --save


start nodejs server:


	cd node

	nodejs bridge_pc.js


server will start

//if you use the pc camera of this pc you have to run the streaming instance using vlc:

	cvlc v4l2:// :v4l2-vdev="/dev/video0" --sout '#transcode{vcodec=mp4v,vb=200,width=640,heigh=480}:http{mux=ts,dst=:8082}' --no-sout-audio


# AMZ SERVER SIDE

Here you have to clone nodejs part from github:

	git clone https://github.com/DanPozza/node.git

now you have to install "express" tool useful for nodejs :


	cd node

	npm install express --save



start nodejs server:


	cd node

	nodejs AWS.js


now you have to start the geofence module:

	cd geofence-server-example

	bundle exec thin -p 4242 start
