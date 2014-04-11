'use strict';

/* Filters */

angular.module('myApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]).
  filter('displayName', function() {
	  return function(name) {
	  	var sName = "default";

	  	if ( (typeof name.firstName == 'undefined') || 
	  		 (typeof name.lastName == 'undefined') )
	  		;
	  	else 
	  	  sName = name.firstName + ' ' + name.lastName;
	  	
	    return sName;
	  }
  }).
  filter('capitalize', function() {
	 return function(input) {
	 	if (input!=null)
	 		input = input.toLowerCase();
	 	return input.substring(0,1).toUpperCase() + input.substring(1);
	 }
  }).
  filter('toWords', function() {
  	return function(strNum) {

  		// Remove commas, if any exist...
		var str = removeComma(strNum);

  		// When input is blank, return blank...
  		if (str == "" || !isNumber(str))
  		  return "";

  		var arrStr = str.split('.');
  		if (typeof arrStr[1] == 'undefined') 
  		  arrStr[1] = "";

		var ones=['','one','two','three','four','five','six','seven','eight','nine'];
		var tens=['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
		var teens=['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];

		function convert_millions(num){
		    if (num>=1000000){
		    	// Conditionally add space
		    	var add_mil = " million";
		    	if (num%1000000 > 0)
		    	  add_mil += " ";
		        return convert_millions(Math.floor(num/1000000)) + add_mil + convert_thousands(num%1000000);
		    }
		    else {
		        return convert_thousands(num);
		    }
		}

		function convert_thousands(num){
		    if (num>=1000){
		    	// Conditionally add space
		    	var ad_thou = " thousand";
		    	if (num%1000)
		    	  ad_thou += " ";
		        return convert_hundreds(Math.floor(num/1000))+ ad_thou +convert_hundreds(num%1000);
		    }
		    else{
		        return convert_hundreds(num);
		    }
		}

		function convert_hundreds(num){
		    if (num > 99){
		    	// Conditionally add space
		    	var add_hund = " hundred";
		    	if (num%100 > 0)
		    	  add_hund += " ";
		        return ones[Math.floor(num/100)] + add_hund + convert_tens(num%100);
		    }
		    else{
		        return convert_tens(num);
		    }
		}

		function convert_tens(num){
			if (num < 10) 
		        return ones[num];
		    else if (num >= 10 && num < 20) 
		        return teens[num-10];
		    else {
		    	var da_ones = "";
		    	if (num%10 > 0)  
		    	  da_ones = "-" + ones[num%10];
		        return tens[Math.floor(num/10)] + da_ones;
		    }
		}

		function convert_cents(num){
			if (num == "")
				return "";
			else if (num == 0) 
				return "no/100s";
			else 
				return num + "/100s";
		}

		// Remove comma from string number
		function removeComma(strNum) {
		    var strNum_noComma = strNum.replace(/\,/g,''); 
		    return strNum_noComma;    
		}

		// http://stackoverflow.com/questions/18082/validate-decimal-numbers-in-javascript-isnumeric
		function isNumber(n) {
		  return !isNaN(parseFloat(n)) && isFinite(n);
		}

		var whole_part;
		if (arrStr[0] == "0")
		  whole_part = "zero";  // Force to zero...
		else
		  whole_part = convert_millions(arrStr[0]);

  		var decimal_part = convert_cents(arrStr[1]);

  		var final_answer = "";

  		if (whole_part != "") {
  		  if (arrStr[0] != "1")
  		  	final_answer = whole_part + " dollars";
  		  else 	
  			final_answer = whole_part + " dollar";
  		}

  		if (decimal_part != "")
  			final_answer += " and " + decimal_part;

  		return final_answer;
  	}
  });
  
