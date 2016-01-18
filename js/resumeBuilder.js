var bio = {
	"myname"     : "Maulik Dave",
	"role"       : "Application Developer",
	"contacts"   : { "mobile"  : "716-474-2621",
					         "email"   : "maulikdave9@gmail.com",
					         "github"  : "MaulikDave9",
					         "address" : "Buffalo, NY"
				         },
	"welcome"    : "Hello World! (Deja Vu - command line to online)",
	"skills"     : ["Programming", "Data Analytics", "Technical sales"],
	"picture"    : "images/me.jpg" 
}

var education = {
    "schools": [
    { "name": "University at Buffalo",
      "city": "Buffalo, NY, US",
      "degree": "MS",
      "major": "Computer Science",
      "dates": "2010-2012"
    },
    {
     "name": "California State University, Fresno",
     "city": "Fresno, CA, US",
     "degree": "BS",
     "major": "Computer Engineering",
     "dates": "1997-2001"
    }
    ],

    "onlineCourses": [
    { "title"  : "Frontend Development Nanodegree",
      "school" : "Udacity",
      "dates"  : "2015",
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
 
