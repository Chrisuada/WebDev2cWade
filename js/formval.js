//validation for Returning customer login form
function validateEmail()
{
	var emailID = document.loginForm.inputEmail.value;
	atpos = emailID.indexOf("@");
	dotpos = emailID.lastIndexOf(".");
	if (atpos < 1||(dotpos - atpos < 2)||dotpos+2 >= emailID.length)
	{
		alert("Please enter Email in the format something@mail.com")
	document.loginForm.inputEmail.focus();
	return false;
	
	}
	return (true);
}


function formValidate()
{
	if(document.loginForm.inputEmail.value=="")
	{
		alert("Please provide your Email Address!");
		document.loginForm.inputEmail.focus();
		return false;
	}
	else {
		var ret = validateEmail();
		if(ret == false)
		{		
		return false;
		}		
		     
	}
	
	if(document.loginForm.inputPassword.value == "")
	{	alert("Please enter your password!");
		document.loginForm.inputPassword.focus();
		return false;
	}
	
	return true;	
}


//Validation for new customer signup
function validateEmail1()
{
	var emailID1 = document.signupForm.inputEmail1.value;
	atpos1 = emailID1.indexOf("@");
	dotpos1 = emailID1.lastIndexOf(".");
	if (atpos1 < 1||(dotpos1 - atpos1 < 2)||dotpos1+2 >= emailID1.length)
	{
		alert("Please enter Email in the format something@mail.com")
	document.signupForm.inputEmail1.focus();
	return false;
	
	}
	return (true);
}


function formValidate1()
{
	if(document.signupForm.inputEmail1.value=="")
	{
		alert("Please provide your Email Address!");
		document.signupForm.inputEmail1.focus();
		return false;
	}
	else {
		var ret = validateEmail1();
		if(ret == false)
		{		
		return false;
		}		
		     
	}
	
	if(document.signupForm.inputPassword1.value == "")
	{	alert("Please enter your password!");
		document.signupForm.inputPassword1.focus();
		return false;
	}
	if(document.signupForm.inputPassword2.value == "")
	{	alert("Please RE-enter your password!");
		document.signupForm.inputPassword2.focus();
		return false;
	}
	if(document.signupForm.inputPassword2.value != document.signupForm.inputPassword1.value )
	{	alert("Passwords must match");
		document.signupForm.inputPassword2.focus();
		return false;
	}
	
	return true;	
}

//Validation for details form on myaccount.php
function validateEmail2()
{
	var emailID2 = document.detailsForm.inputEmail2.value;
	atpos2 = emailID2.indexOf("@");
	dotpos2 = emailID2.lastIndexOf(".");
	if (atpos2 < 1||(dotpos2 - atpos2 < 2)||dotpos2+2 >= emailID2.length)
	{
		alert("Please enter Email in the format something@mail.com")
	document.detailsForm.inputEmail2.focus();
	return false;
	
	}
	return (true);
}


function formValidate2()
{
	if(document.detailsForm.inputEmail2.value=="")
	{
		alert("Please provide your Email Address!");
		document.detailsForm.inputEmail2.focus();
		return false;
	}
	else {
		var ret = validateEmail2();
		if(ret == false)
		{		
		return false;
		}		
		     
	}
	
	if(document.detailsForm.inputPassword3.value == "")
	{	alert("Please enter your password!");
		document.detailsForm.inputPassword3.focus();
		return false;
	}
	
	if(document.detailsForm.inputPassword4.value != document.detailsForm.inputPassword3.value )
	{	alert("Passwords must match");
		document.detailsForm.inputPassword4.focus();
		return false;
	}
	
	return true;	
}
