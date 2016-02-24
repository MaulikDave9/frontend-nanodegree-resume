var bio = {
    'name': 'Maulik Dave',
    'role': 'Application Developer',
    'contacts': {
        'mobile': '716-999-9999',
        'email': 'maulikdave9@gmail.com',
        'github': 'MaulikDave9',
        'twitter': 'mkdave9',
        'location': 'Buffalo, NY'
    },
    'welcomeMessage': 'Hello World! (Deja Vu - command line to online)',
    'skills': ['Programming', 'Data Analytics', 'Technical sales'],
    'biopic': 'images/me.jpg',
    
    'display': function() {

        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").append([formattedName]);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").append([formattedRole]);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#header").append([formattedMobile]);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#header").append([formattedEmail]);
        var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#header").append([formattedGit]);
        var formattedAddress = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#header").append([formattedAddress]);
        var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $('#header').append([formattedMsg]);
        var formattedPicture = HTMLbioPic.replace("%data%", bio.biopic);
        $('#header').append([formattedPicture]);
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            var formattedSkill;
            for (var skill in bio.skills) {
                if (bio.skills.hasOwnProperty(skill) ) {
                    formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
                    $("#skills").append([formattedSkill]);
                }
            }
        }
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#footerContacts").append([formattedMobile]);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#footerContacts").append([formattedEmail]);
        var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#footerContacts").append([formattedGit]);
        var formattedAddress = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#footerContacts").append([formattedAddress]);
    }

};


var education = {
    'schools': [{
        'name': 'University at Buffalo',
        'location': 'Buffalo, NY, US',
        'degree': 'MS',
        'majors': ['Computer Science'],
        'dates': '2012',
        'url': 'http://www.buffalo.edu'
    }, {
        'name': 'California State University, Fresno',
        'location': 'Fresno, CA, US',
        'degree': 'BS',
        'majors': ['Computer Engineering'],
        'dates': '2001',
        'url': 'http://www.fresnostate.edu'
    }],

    'onlineCourses': [{
        'title': 'Frontend Development Nanodegree',
        'school': 'Udacity',
        'date': '2016',
        'url': 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
    }],
 
    'display': function() {

        for (var school in education.schools) {

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
        for (var course in education.onlineCourses) {
            var formattedName = HTMLonlineTitle.replace("#", education.onlineCourses[course].url);
            formattedName = formattedName.replace("%data%", education.onlineCourses[course].title);
            var formattedDegree = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
            var wholelink = formattedName + formattedDegree;
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(wholelink);
            var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
            $(".education-entry:last").append(formattedDates);
        }
    }
};


var work = {
    'jobs': [{
        'employer': 'University at Buffalo',
        'title': 'IT Analyst',
        'location': 'Buffalo, NY',
        'dates': '2013-present',
        'description': 'Application Development and Support.'
    }, {
        'employer': 'IBM',
        'title': 'Technical Sales Support',
        'location': 'Buffalo, NY',
        'dates': '2007-2013',
        'description': 'Pre-sales and post-sales support.'
    }, {
        'employer': 'IBM',
        'title': 'Engineer',
        'location': 'Rochester, MN',
        'dates': '2002-2006',
        'description': 'Storage Controller ASIC Design and Verification.'
    }],

    'display': function() {

        // Here using for in loop instead of iterating with array length as it seems more logical to me.

        for (var job in work.jobs) {
            if (work.jobs.hasOwnProperty(job)) {
                $("#workExperience").append(HTMLworkStart);
                var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
                var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
                var formattedEmployerTitle = formattedEmployer + formattedTitle;
                $(".work-entry:last").append(formattedEmployerTitle);

                var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
                $(".work-entry:last").append(formattedDates);

                var formattedLoc = HTMLworkLocation.replace("%data%", work.jobs[job].location);
                $(".work-entry:last").append(formattedLoc);

                var formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);
                $(".work-entry:last").append(formattedDesc);
            }
        }
    }
};

   

var projects = {
    'projects': [{
            'title': 'Frontend Development',
            'dates': '2015',
            'description': 'Learning HTML, CSS, JavaScript.',
            'images': []
        }
    ],

    'display': function() {

        for (project in projects.projects) {
            if (projects.projects.hasOwnProperty(project)) {
                $("#projects").append(HTMLprojectStart);
                var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
                $(".project-entry:last").append(formattedTitle);

                var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
                $(".project-entry:last").append(formattedDates);

                var formattedDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
                $(".project-entry:last").append(formattedDesc);

                if (projects.projects[project].images.length > 0) {
                    for (var image in projects.projects[project].images) {
                        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                        $(".project-entry:last").append(formattedImage);
                    }
                }
            }   
        }  
    }
};


// Google Map
$("#mapDiv").append(googleMap);