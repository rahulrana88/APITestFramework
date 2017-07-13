var should = require("should");
var expect = require("chai").expect;
var request = require("request");
var baseURL = "https://secure-random.appspot.com";
var util = require("util");

describe('secure-random api tests',function(){
	this.timeout(5000);

	it('it return status code 200 when valid number string is passed as input',function(done){
		request.get({url: baseURL +'/generate/strings?num_strings=50'},
			function(error,response,body){
				expect(response.statusCode).to.equal(200);
				done();
			});
	});
	
	it('it returns a message saying not a digit when invalid input abc is passed',function(done){
		request.get({url: baseURL +'/generate/strings?num_strings=abc'},
			function(error,response,body){
				expect(response.statusCode).to.equal(500);
				expect(response.body).to.contain("not a digit");
				done();
			});
	});  	
});