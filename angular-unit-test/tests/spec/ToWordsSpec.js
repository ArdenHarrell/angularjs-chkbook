'use strict'; 

describe("toWords", function() {
	var $filter, filter;

	beforeEach(function() {
		module('myApp.filters');
		inject(function($injector) {
			$filter = $injector.get('$filter');
			filter = $filter('toWords');
		});
	});

	//-----------------------------------------------------
	// Test for successful functionality (Equivalence).  
	// English: Converted values should look like...
	//-----------------------------------------------------
	it("Should convert 0 into words", function() {
		expect(filter("0")).toBe("zero dollars");
	});

	it("Should convert 1 into words", function() {
		expect(filter("1")).toBe("one dollar");
	});

	it("Should convert 2 into words", function() {
		expect(filter("2")).toBe("two dollars");
	});

	it("Should convert 2 into words", function() {
		expect(filter("2")).toBe("two dollars");
	});

	it("Should convert 10 into words", function() {
		expect(filter("10")).toBe("ten dollars");
	});	

	it("Should convert 20 into words", function() {
		expect(filter("20")).toBe("twenty dollars");
	});	

	it("Should convert 23 into words", function() {
		expect(filter("23")).toBe("twenty-three dollars");
	});	

	it("Should convert 100 into words", function() {
		expect(filter("100")).toBe("one hundred dollars");
	});

	it("Should convert 107 into words", function() {
		expect(filter("107")).toBe("one hundred seven dollars");
	});

	it("Should convert 150 into words", function() {
		expect(filter("150")).toBe("one hundred fifty dollars");
	});

	it("Should convert 1000 into words", function() {
		expect(filter("1000")).toBe("one thousand dollars");
	});

	it("Should convert 1.21 into words", function() {
		expect(filter("1.21")).toBe("one dollar and 21/100s");
	});

	it("Should convert 0.42 into words", function() {
		expect(filter("0.42")).toBe("zero dollars and 42/100s");
	});

	it("Should convert 1,234.56 into words (comma added)", function() {
		expect(filter("1,234.56")).toBe("one thousand two hundred thirty-four dollars and 56/100s");
	});

	//---------------------------------------------------------------
	// Test for non-successful tests (Should not convert anything).  
	// English: Converted values should look like...
	//---------------------------------------------------------------
	it("Should not convert zero-length string", function() {
		expect(filter("")).toBe("");
	});

	it("Should not convert alphabet string", function() {
		expect(filter("Joel Spolsky")).toBe("");
	});

	it("Should not convert partial number", function() {
		expect(filter("code42")).toBe("");
	});

});

