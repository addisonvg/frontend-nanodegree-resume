//start with some info on me

var bio = {
    "name" : "Addison van Gulden",
    "role" : "Aspiring Front-End Developer",
    "contacts" : {
        "email" : "addisonvangulden@gmail.com",
        "mobile" : "802-989-5568",
        "github" : "addisonvg",
        "location" : "Oakland, CA"
        },
    "biopic" : "images/fry.jpg",
    "welcome" : "DOn't you want to Hire me?",
    "skills" : ["awesomeness", "troubleshooting", "html", "css", "javascript"]
    };

// Lets show make the Bio Show!



//Name, Role, Bio pic
$("#header").append(HTMLbioPic.replace("%data%", "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/p160x160/10527276_10101931491831750_8502039349858969673_n.jpg?oh=6568a65b99ddc549dc9c4da938e6e49f&oe=55451EA1&__gda__=1429604144_320365ce95965174010023504c758086"));
$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

  
//Contacts

//for (contact in bio.contacts) {
    //$("#topContacts").append(HTMLcontactGeneric.replace("%contact%", "Contacts"));
    //var formattedContactsGeneric = HTMLcontactGeneric.replace
    //("%contatcs%", "Contact");
    var formattedMobile = HTMLmobile.replace
    ("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace
    ("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace
    ("%data%", bio.contacts.github);
    var formattedLoc = HTMLlocation.replace
    ("%data%", bio.contacts.location);
    var formattedContacts = formattedMobile + formattedEmail + formattedGithub + formattedLoc;
    $("#topContacts").append(formattedContacts);
//}



//add skills to header 
if (bio.skills.length > 0) {
    
    $("#header").append(HTMLskillsStart);
    
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
}

//TODO fill out descriptions
var work = {
    "jobs" : [
        {
        "employer" : "Wix.com",
        "title" : "Technical Services",
        "dates" : "August 2012 - Present",
        "location" : "San Francisco, CA",
        "description" : "I do stuff"  
        },
        {
        "employer" : "BeyondDifferences.org",
        "title" : "Web Producer / Manager",
        "dates" : "November 2012 - Present",
        "location" : "Marin County, CA",
        "description" : "I do stuff"
        }
    ]
};
function displayWork(){  
for (job in work.jobs) {
    // create new div for work experience
    $("#workExperience").append(HTMLworkStart);
    //concat employer and title 
    var formattedEmployer = HTMLworkEmployer.replace
    ("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace
    ("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    }
    
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry").append(formattedDates);
    
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry").append(formattedDescription);
    
    
    
}
displayWork();

/* $(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    
    logClicks(x, y);

}); */

// var myString = "this is my favorite string!";
// var myArray = myString.split(" ");

// function locationizer(work_obj) {
//     var locationArray = [];
    
//     for (job in work_obj.jobs) {
//         var newLocation = work_obj.jobs[job].location;
//         locationArray.push(newLocation);
//     }
//     return locationArray
// }
// console.log(locationizer(work));

    /*  FILL ME IN!
    "past" : [
        {
        "position" : "Technical Services",
        "employer" : "Wix.com",
        "years" : 2.5,
        "location" : "San Francisco"   
        }
    ]  */

// Projects
var projects = {
    "projects" : [
        {
        "company" : "Udactiy",
        "dates" : "Dec 2014",
        "title" : "Project 1: Website Mock-up",
        "description" : "The focus of this project was to replicate a PDF mock up for a webpage with >%92 accuracery",
        "images" : ["data:image/png;base64,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"],
        },
        {
        "company" : "Beyond DIfferences",
        "dates" : "Nov 2012 - Present",
        "title" : "website: http://BeyondDifferences.org",
        "description" : "a great website",
        "images" : ["http://static.wixstatic.com/media/1e92d3_b05e863586b42a913ced6bfabcb4f6d1.png"],
        },
        {
        "company" : "Beyond Differences",
        "title" : "website: http://JoinBeTheOne.com",
        "dates" : "Nov 2013 - Present",
        "description" : "a great website",
        "images" : ["http://static.wixstatic.com/media/ea0021_a0776683903857fdc4bb37f51ea6f086.png_srz_p_275_80_75_22_0.50_1.20_0.00_png_srz"],
        },
    ]
};

// lets show projects
projects.display = function() {
for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace
    ("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
    
    var formattedDates = HTMLprojectDates.replace
    ("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);
    
    var formattedDescription = HTMLprojectDescription.replace
    ("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);
    
    if (projects.projects[project].images.length > 0) {
        for (image in projects.projects[project].images) {
            var formattedImage = HTMLprojectImage.replace
            ("%data%", projects.projects[project].images[image]);
            $(".project-entry:last").append(formattedImage);
        }

    }
    
}
};



projects.display();



//EDUCATION
var education = {
    "schools" : [
        {
        "name" : "University of Vermont",
        "dates" : "2004-2008 ",
        "location" : "Burlington, VT",
        "degree" : "Bachelors of Science",
        "major" : "Business Administration, Marketing Concentration"
        }
        ],
    "online" : [
        {
        "title" : "Front-End Web Development",
        "school" : "Udacity",
        "dates" : "2014-Present",
        "url" : "https://www.udacity.com/course/nd001",
        }
    ]
}

//lets show EDUCATION
education.display = function (){
for (school in education.schools){
    $("#education").append(HTMLschoolStart);
    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
    $(".education-entry:last").append(formattedSchoolName);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    $(".education-entry:last").append(formattedSchoolDegree);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(formattedSchoolDates);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedSchoolLocation);
    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
    $(".education-entry:last").append(formattedSchoolMajor);
    
}
$("#education").append(HTMLonlineClasses);
for (online in education.online) {
    
    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.online[online].title);
    $(".education-entry:last").append(formattedOnlineTitle);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.online[online].school);
    $(".education-entry:last").append(formattedOnlineSchool);
    var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.online[online].dates);
    $(".education-entry:last").append(formattedOnlineDates);
    var formattedOnlineURL= HTMLonlineURL.replace("%data%", education.online[online].url);
    $(".education-entry:last").append(formattedOnlineURL);
}
};
education.display ();

//for (current in work.job) {$("#main"),append(HTMLworkStart)}

//var countries = ["germn", "argen", "brazil", "netherlands"];
//for (country in countries) {console.log(countries[country])};



//MAP
$("#mapDiv").append(googleMap);

//for (current in work.job) {$("#main"),append(HTMLworkStart)}

//var countries = ["germn", "argen", "brazil", "netherlands"];
//for (country in countries) {console.log(countries[country])};



