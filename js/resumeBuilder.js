/*
This is empty on purpose! Your code to build the resume will go here.
*/

var bio= {
"name":"Muhammad Zeeshan",
"role":"Web Developer",
"contacts":{
"mobile":"+91-8295498577",
"email":"zmuhammad261@gmail.com",
"github":"zmuhammad261",
"linked":"zmuhammad261",
"location":"Miajan Ostagar Lane,Kolkata,WB"
},
"pic":"images/miphoto.png",
"welcomeMessage":"Welcome to my Portfolio",
"age":21,
"skills":["developer","designer","painter","writer"]
};

var work=
{
"jobs":
[
{
"title": "Web Developer",
"employer":"Freelancer",
"dates":"2016-Present",
"description":"Working with convenience without any supervision to give a quality product. I create websites with given designs or create new designs. I can make the websites responsive and edit the website as per request.",
"location":"Kolkata"
}
]
};
/*work.position= "Web Developer";
work.employer="Freelancer";
work.years=1;*/


var education= {

"schools":
[
{
"name":"The park English School",
"city":"Kolkata, WB, India",
"degree":"Secondary Education",
"major":"Science",
"date":"2012",
"location":"Kolkata,WB"
},
{
"name":"G D Birla Centre for Education",
"city":"Kolkata, WB, India",
"degree":"High School",
"major":"Science",
"date":"2014",
"location":"Kolkata,WB"
},
{
"name":"BML Munjal University",
"city":"Gurgaon, Haryana, India",
"degree":"BTech",
"major":"Computer Science and Engineering",
"date":"2018",
"location":"Gurgaon"
}
],
"onlineCourses":
[
{
"title":"JavaScript Basics",
"school":"Udacity",
"year":2017,
"url":"http://www.udacity.com"
}
]

};

var projects={
"projects":
[
{
"title":"Fuzion",
"date":"2016-Present",
"description":"Fuzion is the merger or amalgmation of two most popular HTML, CSS, and JS framework- Bootstrap and Materialize for developing responsive, mobile first projects on the web.Website front-end framework for all.",
"images":["images/fuzion500.png","images/p2.png"]
}
]
};

/*
education["name"]="BML Munjal University";
education["years"]="2014-2018";
education["city"]="Gurgaon, Haryana, India";*/


var namez=HTMLheaderName.replace('%data%',bio.name);
var rolez=HTMLheaderRole.replace('%data%',bio.role);
$('#main #mast').prepend(rolez);
$('#main #mast').prepend(namez);
// $('#main').append(bio.name);
$('#main').append(work["position"]);
// $('#main').append(education.name);

var portfolioPic=HTMLbioPic.replace('%data%',bio.pic);
$('#header .container').append(portfolioPic);
if(bio.skills.length>0){
		$('#header .container').append(HTMLskillsStart);
		var skillz=HTMLskills.replace('%data%',bio.skills[0]);
		$('#skills').append(skillz);
		skillz=HTMLskills.replace('%data%',bio.skills[1]);
		$('#skills').append(skillz);
		skillz=HTMLskills.replace('%data%',bio.skills[2]);
		$('#skills').append(skillz);
		skillz=HTMLskills.replace('%data%',bio.skills[3]);
		$('#skills').append(skillz);



// skill=HTMLskills.replace('%data%',bio.skills[1]);
// $('#skills').append(skill);

}

function displayWork(){
for(job in work.jobs){
$("#workExperience .container").append(HTMLworkStart);
var workEmployer=HTMLworkEmployer.replace('%data%',work.jobs[job].employer);
var workTitle=HTMLworkTitle.replace('%data%',work.jobs[job].title);
var updatedworkTitle=workEmployer+workTitle;
$('.work-entry:last').append(updatedworkTitle);
var workDate=HTMLworkDates.replace('%data%',work.jobs[job].dates);
$('.work-entry').append(workDate);
var workDescription=HTMLworkDescription.replace('%data%',work.jobs[job].description);
$('.work-entry').append(workDescription);

}

}

displayWork();

$(document).click(function(loc) {
// console.log(loc);
var x=loc.pageX;
var y=loc.pageY;

logClicks(x,y);
});

$('#main').append(internationalizeButton);

function inName(){
var intName=bio.name;
var ArrayedName=intName.trim().split(" ");
intName=ArrayedName[0].slice(0,1).toUpperCase()+ArrayedName[0].slice(1).toLowerCase()+ " "+ArrayedName[1].toUpperCase();
return intName;

}

// projects.display= function()

function displayProjects(){
for(project in projects.projects){
$('#projects .container').append(HTMLprojectStart);

var projectTitle=HTMLprojectTitle.replace('%data%',projects.projects[project].title);
$('.project-entry:last').append(projectTitle);
var projectDate=HTMLprojectDates.replace('%data%',projects.projects[project].date);
$('.project-entry:last').append(projectDate);
var projectDescript=HTMLprojectDescription.replace('%data%',projects.projects[project].description);
$('.project-entry:last').append(projectDescript);

if(projects.projects[project].images.length>0){
for(image in projects.projects[project].images){
var projectImage=HTMLprojectImage.replace('%data%',projects.projects[project].images[image]);
$('.project-entry:last').append(projectImage);
}
}
}

}

displayProjects();



$('#mapDiv').append(googleMap);

// function displayContacts(){
var contactmobile=HTMLmobile.replace('%data%',bio.contacts.mobile);
var contactmail=HTMLmail.replace('%data%',bio.contacts.email);
var contactgithub=HTMLgithub.replace('%data%',bio.contacts.github);
var contactlinked=HTMLcontactGeneric.replace('%contact%','linkedin');
contactlinked=contactlinked.replace('%data%',contacts.linked);
var contactlocation=HTMLlocation.replace('%data%',bio.contacts.location);

$('#topContacts.flex-box .flex-item .white-text:last').append(contactmobile);
$('#topContacts.flex-box .flex-item').append(contactmail);
$('#topContacts.flex-box .flex-item .white-text').append(contactgithub);
$('#topContacts.flex-box .flex-item:last').append(contactlinked);
$('#topContacts.flex-box:last').append(contactlocation);
// }

// displayContacts();

// function displayEducation(){

for(school in education.schools){
$('#education .container').append(HTMLschoolStart);

var schoolName=HTMLschoolName.replace('%data%',education.schools[school].name);
$('.education-entry:last').append(schoolName);
var schoolDegree=HTMLschoolDegree.replace('%data%',education.schools[school].degree);
var schoolDate=HTMLschoolDates.replace('%data%',education.schools[school].date);
$('.education-entry:last').append(schoolDate);
var schoolLoaction=HTMLschoolLocation.replace('%data%',education.schools[school].location);
var schoolMajor=HTMLschoolMajor.replace('%data%',education.schools[school].major);
$('.education-entry:last').append(schoolMajor);
}
// }

// displayEducation();


for(var course in education.onlineCourses){
$("#education .container").append(HTMLonlineClasses);

var courseTitle=HTMLonlineTitle.replace('%data%',education.onlineCourses[course].title);
$('.education-entry:last').append(courseTitle);
}

$('#footerContacts.flex-box .flex-item .white-text').prepend(contactmobile);
$('#footerContacts.flex-box .flex-item .white-text').append(contactmail);
$('#footerContacts.flex-box .flex-item .white-text').append(contactgithub);
$('#footerContacts.flex-box .flex-item .white-text').append(contactlinked);
$('#footerContacts .flex-item:last').append(contactlocation);