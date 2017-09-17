Test Plan - Movie Collection Web App

	Home movie collection is a web app that helps a user to store and search movies in their home collecetion. 

- Test Strategy: 
	Testing the home movie application should include:
	- Function Testing of requirements that can be traced directly to given use cases.
		- Verify the app renders correctly in Chrome browser on OSx, Windows X, iOS, and Android.
		- Verify a registered user is able to enter new movies into the collection.
		- Verify user is able to search existing movies by an arbitrary field. 
		- Verify user is able to see a list of all movies in user's collection.
		- Verify user is able to delete a movie.
		- Verify user is able to update a movie.
		- Verify user is able to record the following info about any given movie:
			- Genre 
			- Actors 
			- Title
			- Year
			- Rating
		
		- Verify all above use cases in Chrome browser on OSx, Windows X, iOS, and Android.

	- Database Testing:
		- verify data integrity when the same movie is posted more than once (there should not be duplicate records).

	- Performance Profiling: 
		- measure response times for each case with a single user to create performance base lines.
		- test response teams with increasing load of users logging in and retrieving/updating/deleting movies in their collection over a ramp up time.

- Risks and Assumptions:
	- changes to the use case may invalidate the tests already written.
	- there is no environment downtime during test due to outages or defect fixes. 




