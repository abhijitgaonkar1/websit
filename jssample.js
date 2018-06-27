<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Form Validation 1</title>
	<style>
		/*
		 * .reg-frm is the container <div> which has registration form in it
		 * We are  applying the width min-height, background and padding
		*/
		.reg-frm{
			width: 32%;
			background: #dfdfdf;
			min-height: 200px;
			overflow: hidden;
			padding: 5px;

		}

		/*
		 * this is the normal look of the input fields
		 * with padding 5px, border with black color 2px thick and with
		 * rounded corners of radius 2px
		 * width set to 97%, So the width of text fields will be 97% it container .i.e .reg-frm
		*/
		.form-control{
			width: 97%;
			padding: 5px;
			border: 1px solid black;
			border-radius: 3px;
		}

		/*
		 * this class is applies when an error is occured in the the input
		*/
		.has-error{
			border-color: red;
		}
		.has-success{
			border-color: green;
		}

		/*
		 * btn class is applied for the input type submit with
		 * no border, background as blue and the text color as white
		*/
		.btn{
			padding: 5px 20px 5px 20px;
			background: #001b54;
			color: white;
			border: none;
		}
	</style>
</head>
<body>
	<div class="reg-frm">
		<form action="" method="GET" onsubmit="return validate()">
			<!-- vaildate() is an Javascript function which is called when the form is submitted -->
			<fieldset>
				<legend>Registration Form</legend>
				<label id="lfname">First Name: </label><br><input type="text" name="fname" id="fname" class="form-control" placeholder="First Name"><br><br>
				<label id="llname">Last Name: </label><br><input type="text" name="lname" id="lname" class="form-control" placeholder="Last Name"><br><br>
				<label id="lmobile">Mobile Number: </label><br><input type="text" name="mobile" id="mobile" class="form-control" placeholder="Mobile Number"><br><br>
				<label id="lemail">Email ID: </label><br><input type="email" name="email" id="email" class="form-control" placeholder="Email ID"><br><br>
				<label id="laddr">Address: </label><br><textarea name="addr" id="addr" cols="30" rows="10" class="form-control" placeholder="Address"></textarea><br><br>
				<label id="lgender">Gender: </label> <br><input type="radio" name="gender" checked value="M"> M <input type="radio" name="gender" value="F"> F <br><br>
				<!-- In this  -->
				<input type="submit" class="btn" value="SUBMIT">
			</fieldset>
		</form>

		<div id="form-data">

		</div>
	</div>
	<!--
		Basically it is recommended to write or include all the JavaScript at the bottom of the document so that all the
		content is loaded fast and then the JavaScript
		We can write internal Javascript or we can connect an external JS file to the document
		In this example we will be writing internal JS code. JS Code is written in an <script></script> tag
	-->
	<script>
		function validate()
		{
			// Declaring the varibles
			// var keyword is used to declare variables of type variant
			var fname, lname, mobile, email, address, gender, err = 0, radios;
			var numReg = /^[0-9]+$/;
			var emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

			// Assign the text field values to variables
			fname = document.getElementById("fname").value; // Text inside First Name TextField is stored in fname variable
			lname = document.getElementById("lname").value; // Text inside Last Name TextField is stored in lname variable
			mobile = document.getElementById("mobile").value; // Text inside Mobile Number TextField is stored in mobile variable
			email = document.getElementById("email").value; // Text inside Email ID TextField is stored in email variable
			address = document.getElementById("addr").value; // Text inside Address TextArea is stored in address variable
			radios = document.getElementsByName("gender"); // Here we are assinging access to


			if(fname.trim().length == 0){
				// Here we are appending has-error class in class attribute(whitespace before has-error is important i.e. +="<space>has-error")
				document.getElementById("fname").className += " has-error";
				// Here we are changing the text inside the label
				document.getElementById("lfname").innerHTML = "First Name Missing !";
				// incrementing the error flag
				err++;
			}else{
				// Here we are first setting the class attribute empty
				document.getElementById("fname").className = "";
				// Here we are setting the class attribute to form-control and has-success (We are adding CSS Classes to class attribute)
				document.getElementById("fname").className = "form-control has-success";
				// Here we are changing the text inside the label
				document.getElementById("lfname").innerHTML = "First Name";

				/*
				 * The reason for setting the setting it the first class empty and then assigning the class names again
				 * because each time we use .className it appends value to class attribute.
				 * To avoid the multiple value assignment with same class name we are emptying and reassigning them
				*/
			}
			if(lname.trim().length == 0){
				// Here we are appending has-error class in class attribute(whitespace before has-error is important i.e. +="<space>has-error")
				document.getElementById("lname").className += " has-error";
				// Here we are changing the text inside the label
				document.getElementById("llname").innerHTML = "Last Name Missing !";
				err++;
			}else{
				// empty the class attribute
				document.getElementById("lname").className = "";
				// here we are setting the class attribute to form-control and has-success
				document.getElementById("lname").className = "form-control has-success";
				// Here we are changing the text inside the label
				document.getElementById("llname").innerHTML = "Last Name";
			}

			if(mobile.trim().length == 0){
				// Here we are appending has-error class in class attribute(whitespace before has-error is important i.e. +="<space>has-error")
				document.getElementById("mobile").className += " has-error";
				// Here we are changing the text inside the label
				document.getElementById("lmobile").innerHTML = "Mobile Number Missing !";
				// incrementing the error flag
				err++;
			}else if(!mobile.match(numReg)){ // match the input email id with the regular expression
				document.getElementById("mobile").className = "";
				document.getElementById("mobile").className = "form-control has-error";
				document.getElementById("lmobile").innerHTML = "Mobile Number Invalid !";
				err++;
			}else if(mobile.length < 10){  // checking whether the entered mobile number is less than 10 digits (Number too short Condition)
				document.getElementById("mobile").className = "";
				document.getElementById("mobile").className = "form-control has-error";
				document.getElementById("lmobile").innerHTML = "Mobile Number Too Short !";
				err++;
			}else if(mobile.length > 10){  // checking whether the entered mobile number is greater than 10digits (Number too long condition)
				document.getElementById("mobile").className = "";
				document.getElementById("mobile").className = "form-control has-error";
				document.getElementById("lmobile").innerHTML = "Mobile Number Too Long !";
				err++;
			}else{ // Success
				document.getElementById("mobile").className = "";
				document.getElementById("mobile").className = "form-control has-success";
				document.getElementById("lmobile").innerHTML = "Mobile Number";
			}

			if(email.trim().length == 0){
				// Here we are appending has-error class in class attribute(whitespace before has-error is important i.e. +="<space>has-error")
				document.getElementById("email").className += " has-error";
				document.getElementById("lemail").innerHTML = "Email ID Missing !";
				err++;
			}else if(!email.match(emailRegExp)){
				document.getElementById("email").className = "";
				document.getElementById("email").className = "form-control has-error";
				document.getElementById("lemail").innerHTML = "Email ID Invalid !";
				err++;
			}else{
				document.getElementById("email").className = "";
				document.getElementById("email").className = "form-control has-success";
				document.getElementById("lemail").innerHTML = "Email ID";
			}

			if(address.trim().length == 0){
				// Here we are appending has-error class in class attribute(whitespace before has-error is important i.e. +="<space>has-error")
				document.getElementById("addr").className += " has-error";
				document.getElementById("laddr").innerHTML = "Address Missing !";
				err++;
			}else{
				document.getElementById("addr").className = "";
				document.getElementById("addr").className = "form-control has-success";
				document.getElementById("laddr").innerHTML = "Address";
			}

			// We are accessing value of radio button by name
			// id is not used because the there cant be more than one element with the same id
			// and it is iterated in a for loop
			for(var i = 0; i < radios.length; i++)
			{
				if(radios[i].checked)
				{
					gender = radios[i].value;
				}
			}

			// Check whether the error flag count is incremented or no
			if(err == 0){
				// printing the values insite an <div></div> with id form-data
				var str = "<p><b>Name: </b> "+fname+" "+lname+"<br>"+
					"<b>Mobile: </b> "+mobile+"<br>"+
					"<b>Email: </b> <u>"+email+"</u><br>"+
					"<b>Address: </b> <address>"+address+"</address>"+
					"<b>Gender: </b> "+gender+"</p>";

				document.getElementById("form-data").innerHTML = str;
				return false;
			}else{
				document.getElementById("form-data").innerHTML = "Error In The Form ! Please Verify !";
				return false;
			}
		}
	</script>
</body>
</html>
