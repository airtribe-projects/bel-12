Course Rating Appliction



- GET all courses
- Get one Single Course
- Create new course

- Get all courses
GET /api/v1/courses

- Get one Single Course
GET /api/v1/courses/courseId

- Create new course
POST /api/v1/courses

semver
XXX.YYY.ZZZ
major.minor.patch

Breaking 
major: 

Non Breaking
minor ==> Additive changes
patch ==> Bug fixes, security fixes

^ => free to upgrade the minor version
~ => free to upgrade the patch version


- Gets the list of the courses and their details
GET /api/v1/courses
- Gets the details of the course named 1234
GET /api/v1/courses/courseId
- Gets the average ratings of all the students for the course 1234
1. GET /api/v1/courses/courseId => 
2#. GET /api/v1/courses/courseId/average-rating
3. POST /api/v1/courses/courseId ==> Calculate the average rating
4. GET /api/v1/courses/courseId?average-rating=true ==> If it is already calculated then this should be the API endpoint
5. GET /api/v1/courses/courseId/ratings
6. GET /api/v1/ratings?courseId=XYZ
7. 

- Creates the launchpad with the provided details
POST /api/v1/courses

- Adds the rating to the provided course 1234
POST /api/v1/courses/courseId/rating

- Modifies the information of the course with the provided details
PUT /api/v1/courses/courseId ==> Replace

PATCH /api/v1/courses/courseId ==> Modified








