var bio = {
	"name"     : "Maulik Dave",
	"role"       : "Application Developer",
	"contacts"   : { "mobile"  : "716-474-2621",
					         "email"   : "maulikdave9@gmail.com",
					         "github"  : "MaulikDave9",
					         "location" : "Buffalo, NY"
				         },
	"welcome"    : "Hello World! (Deja Vu - command line to online)",
	"skills"     : ["Programming", "Data Analytics", "Technical sales"],
	"picture"    : "images/me.jpg" 
}


var education = {
    "schools": [
    { "name": "University at Buffalo",
      "location": "Buffalo, NY, US",
      "degree": "MS",
      "majors": "Computer Science",
      "dates": "2012",
      "url": "www.buffalo.edu"
    },
    {
     "name": "California State University, Fresno",
     "location": "Fresno, CA, US",
     "degree": "BS",
     "majors": "Computer Engineering",
     "dates": "2001",
     "url": "www.fresnostate.edu"
    }
    ],

    "onlineCourses": [
    { "title"  : "Frontend Development Nanodegree",
      "school" : "Udacity",
      "dates"  : "2015",
      "url"    : "www.udacity.com"
    }
    ]
}

var work = { 
    "jobs":[
     { "employer"     : "University at Buffalo",
    	 "title"        : "IT Analyst",
       "dates"        : "2013-present",
    	 "location"     : "Buffalo, NY",
    	 "description"  : "Application Development and Support."
    },
    {	"employer"     : "IBM",
    	"title"        : "Technical Sales Support",
    	"dates"        : "2007-2013",
    	"location"     : "Buffalo, NY",
    	"description"  : "Pre-sales and post-sales support."
    },
    {	"employer"     : "IBM",
    	"title"        : "Engineer",
    	"dates"        : "2002-2006",
    	"location"     : "Rochester, MN",
    	"description"  : "Storage Controller ASIC Design and Verification."
    }
   	]
}

var projects = {
	"projects": [
       {
       	 "title": "Frontend Development",
       	 "dates": "2015",
       	 "description": "Learning HTML, CSS, JavaScript.",
       	 "images" : []
       }

	]
}

function displayBio() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").append([formattedName]);
   
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").append([formattedRole]);
   
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts['mobile']);
    $("#header").append([formattedMobile]);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts['email']);
    $("#header").append([formattedEmail]);

    var formattedGit = HTMLgithub.replace("%data%", bio.contacts['github']);
    $("#header").append([formattedGit]);

    var formattedAddress = HTMLlocation.replace("%data%", bio.contacts['location']);
    $("#header").append([formattedAddress]);

    var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcome);
    $('#header').append([formattedMsg]);

    var formattedPicture = HTMLbioPic.replace("%data%", bio.picture);
    $('#header').append([formattedPicture]);

    if (bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
      var formattedSkill;
      for (skill in bio.skills) {
        formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append([formattedSkill]);
      }
    }
}


function displayWork() {

    for (job in work.jobs) {
      $("#workExperience").append(HTMLworkStart);        
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      $(".work-entry:last").append(formattedEmployerTitle);

      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      $(".work-entry:last").append(formattedDates);

      var formattedLoc   = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      $(".work-entry:last").append(formattedLoc);

      var formattedDesc  = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      $(".work-entry:last").append(formattedDesc);
      }
}

function displayProjects() {

    for (project in projects.projects) {
      $("#projects").append(HTMLprojectStart);
      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
      $(".project-entry:last").append(formattedTitle);

      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
      $(".project-entry:last").append(formattedDates);

      var formattedDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
      $(".project-entry:last").append(formattedDesc);

      if (projects.projects[project].images.length > 0) {
        for (image in projects.projects[project].images) {
          var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
          $(".project-entry:last").append(formattedImage);
        }
      }
    }      
}

function displayEducation() {

   for (school in education.schools) {


     $("#education").append(HTMLschoolStart);
     var formattedName = HTMLschoolName.replace("#", education.schools[school].url);
         formattedName = formattedName.replace("%data%", education.schools[school].name);
     var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
     var wholelink = formattedName + formattedDegree;
     $(".education-entry:last").append(wholelink);
     var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
     $(".education-entry:last").append(formattedDates);
     var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
     $(".education-entry:last").append(formattedLocation);
     var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
     $(".education-entry:last").append(formattedMajor);

   }

  $("#education").append(HTMLonlineClasses);
  for (course in education.onlineCourses) {
     var formattedName = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
     $("#education").append(HTMLschoolStart);
     $(".education-entry:last").append(formattedName);
  }
}

function displayConnect() {
   
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts['mobile']);
    $("#lets-connect").append([formattedMobile]);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts['email']);
    $("#lets-connect").append([formattedEmail]);

    var formattedGit = HTMLgithub.replace("%data%", bio.contacts['github']);
    $("#lets-connect").append([formattedGit]);

    var formattedAddress = HTMLlocation.replace("%data%", bio.contacts['location']);
    $("#lets-connect").append([formattedAddress]);
}

function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[0] + " " + name[1];
}
$('#main').append(internationalizeButton);

// Google Map
$("#mapDiv").append(googleMap);
 
