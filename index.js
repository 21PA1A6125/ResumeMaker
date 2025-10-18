let nameInput = document.getElementById("name");
let designationInput = document.getElementById("designation");
let mobileInput = document.getElementById("mobile");
let emailInput = document.getElementById("email");
let linkedinInput = document.getElementById("linkedin");
let githubInput = document.getElementById("github");
let summary=document.getElementById("summary");

let skillsUlContainer = document.getElementById("skills-ul-cont");
let skills = [];
let skillIdCount = 0;

let educationUlContainer = document.getElementById("education-ul-cont");
let education = [];
let educationIdCount = 0;

let projectsUlContainer = document.getElementById("projects-ul-cont");
let projects = [];
let projectsIdCount = 0;

let certificatesUlContainer = document.getElementById("certificates-ul-cont");
let certificates = [];
let certificatesIdCount = 0;

function validateName() {
  let nameText = document.getElementById("name-text");
  if (nameInput.value === "") {
    nameInput.classList.remove("success");
    nameInput.classList.add("error");
    nameText.textContent = "Enter valid input";
    nameText.classList.add("error-text");
  } else {
    nameInput.classList.remove("error");
    nameInput.classList.add("success");
    nameText.classList.remove("error-text");
    nameText.textContent = "";
  }
}

function validateDesignation() {
  let designationText = document.getElementById("designation-text");
  if (designationInput.value === "") {
    designationInput.classList.remove("success");
    designationInput.classList.add("error");
    designationText.textContent = "Enter valid input";
    designationText.classList.add("error-text");
  } else {
    designationInput.classList.remove("error");
    designationInput.classList.add("success");
    designationText.classList.remove("error-text");
    designationText.textContent = "";
  }
}

function validateMobile() {
  let mobileText = document.getElementById("mobile-text");
  if (mobileInput.value.length !== 10) {
    mobileInput.classList.remove("success");
    mobileInput.classList.add("error");
    mobileText.textContent = "Enter valid input";
    mobileText.classList.add("error-text");
  } else {
    mobileInput.classList.remove("error");
    mobileInput.classList.add("success");
    mobileText.classList.remove("error-text");
    mobileText.textContent = "";
  }
}

function validateEmail() {
  let emailText = document.getElementById("email-text");
  if (!(emailInput.value.includes("@") && emailInput.value.includes(".com"))) {
    emailInput.classList.remove("success");
    emailInput.classList.add("error");
    emailText.textContent = "Enter valid input";
    emailText.classList.add("error-text");
  } else {
    emailInput.classList.remove("error");
    emailInput.classList.add("success");
    emailText.classList.remove("error-text");
    emailText.textContent = "";
  }
}

function validateLinkedIn() {
  let linkedinText = document.getElementById("linkedin-text");
  if (linkedinInput.value === "") {
    linkedinInput.classList.remove("success");
    linkedinInput.classList.add("error");
    linkedinText.textContent = "Enter valid input";
    linkedinText.classList.add("error-text");
  } else {
    linkedinInput.classList.remove("error");
    linkedinInput.classList.add("success");
    linkedinText.classList.remove("error-text");
    linkedinText.textContent = "";
  }
}

function validateGithub() {
  let githubText = document.getElementById("github-text");
  if (githubInput.value === "") {
    githubInput.classList.remove("success");
    githubInput.classList.add("error");
    githubText.textContent = "Enter valid input";
    githubText.classList.add("error-text");
  } else {
    githubInput.classList.remove("error");
    githubInput.classList.add("success");
    githubText.classList.remove("error-text");
    githubText.textContent = "";
  }
}

function addSkill() {
  let skillInput = document.getElementById("skill-input");
  let skillInputValue = skillInput.value.trim();

  if (skillInputValue != "") {
    skillIdCount = skillIdCount + 1;
    let skillItem = {
      skillId: "skill" + skillIdCount,
      skillName: skillInputValue,
    };
    skills.push(skillItem);
    let li = document.createElement("li");
    li.classList.add("skills-li");
    skillsUlContainer.appendChild(li);
    let span1 = document.createElement("span");
    span1.classList.add("skill-text");
    span1.textContent = skillInputValue;
    li.appendChild(span1);
    let span2 = document.createElement("span");
    let i = document.createElement("i");
    i.classList.add("fa-solid");
    i.classList.add("fa-trash");
    i.classList.add("remove-icon");
    i.addEventListener("click", function () {
      skills = skills.filter((s) => s.skillId !== skillItem.skillId);
      li.remove();
      console.log(skills);
    });
    span2.appendChild(i);
    li.appendChild(span2);
  }

  skillInput.value = "";
}

function addEducation() {
  let degree = document.getElementById("degree");
  let institute = document.getElementById("institute");
  let grade = document.getElementById("grade");
  let duration = document.getElementById("duration");
  let degreeValue = degree.value.trim();
  let instituteValue = institute.value.trim();
  let gradeValue = grade.value.trim();
  let durationValue = duration.value.trim();
  if (
    degreeValue != "" &&
    instituteValue != "" &&
    gradeValue != "" &&
    durationValue != ""
  ) {
    educationIdCount += 1;
    let educationItem = {
      educationId: "education" + educationIdCount,
      degreeName: degreeValue,
      instituteName: instituteValue,
      gradePoints: gradeValue,
      durationYears: durationValue,
    };

    education.push(educationItem);
    let li = document.createElement("li");
    li.classList.add("skills-li");
    educationUlContainer.appendChild(li);

    let div = document.createElement("div");
    div.classList.add("column-div");
    li.appendChild(div);
    let span1 = document.createElement("span");
    span1.classList.add("skill-text");
    span1.textContent = degreeValue;
    div.appendChild(span1);
    let span2 = document.createElement("span");
    span2.textContent = instituteValue;
    div.appendChild(span2);

    let span3 = document.createElement("span");
    span3.textContent = gradeValue;
    div.appendChild(span3);

    let span4 = document.createElement("span");
    span4.textContent = durationValue;
    div.appendChild(span4);

    let i = document.createElement("i");
    i.classList.add("fa-solid", "fa-trash", "remove-icon");
    li.appendChild(i);

    i.addEventListener("click", function () {
      education = education.filter(
        (e) => e.educationId !== educationItem.educationId
      );
      li.remove();
      console.log(education);
    });
  }

  degree.value = "";
  institute.value = "";
  grade.value = "";
  duration.value = "";
}

function addProject() {
  let projectName = document.getElementById("project-name");
  let projectNameValue = projectName.value.trim();

  let projectUrl = document.getElementById("project-url");
  let projectUrlValue = projectUrl.value.trim();

  if (projectNameValue != "" && projectUrlValue != "") {
    projectsIdCount = projectsIdCount + 1;
    let projectItem = {
      projectId: "project" + projectsIdCount,
      projectName: projectNameValue,
      projectUrl: projectUrlValue,
    };
    projects.push(projectItem);
    let li = document.createElement("li");
    li.classList.add("skills-li");
    projectsUlContainer.appendChild(li);
    let div = document.createElement("div");
    div.classList.add("column-div");
    li.appendChild(div);
    let span1 = document.createElement("span");
    span1.classList.add("row-div");
    div.appendChild(span1);

    let innerSpan1 = document.createElement("span");
    innerSpan1.classList.add("skill-text");
    innerSpan1.textContent = "Project Name : ";
    span1.appendChild(innerSpan1);

    let projectNameText = document.createTextNode(projectNameValue);
    span1.appendChild(projectNameText);

    let span2 = document.createElement("span");
    span2.classList.add("row-div");
    div.appendChild(span2);

    let innerSpan2 = document.createElement("span");
    innerSpan2.classList.add("skill-text");
    innerSpan2.textContent = "Project URL : ";
    span2.appendChild(innerSpan2);

    let projectURLText = document.createTextNode(projectUrlValue);
    span2.appendChild(projectURLText);

    let i = document.createElement("i");
    i.classList.add("fa-solid", "fa-trash", "remove-icon");
    li.appendChild(i);

    i.addEventListener("click", function () {
      projects = projects.filter((e) => e.projectId !== projectItem.projectId);
      li.remove();
      console.log(projects);
    });
  }

  projectName.value = "";
  projectUrl.value = "";
}

function addCertificate() {
  let certificateName = document.getElementById("certificate-name");
  let certificateNameValue = certificateName.value.trim();

  let certificateUrl = document.getElementById("certificate-url");
  let certificateUrlValue = certificateUrl.value.trim();

  if (certificateNameValue != "" && certificateUrlValue != "") {
    certificatesIdCount = certificatesIdCount + 1;
    let certificateItem = {
      certificateId: "certificate" + certificatesIdCount,
      certificateName: certificateNameValue,
      certificateUrl: certificateUrlValue,
    };
    certificates.push(certificateItem);
    let li = document.createElement("li");
    li.classList.add("skills-li");
    certificatesUlContainer.appendChild(li);
    let div = document.createElement("div");
    div.classList.add("column-div");
    li.appendChild(div);
    let span1 = document.createElement("span");
    span1.classList.add("row-div");
    div.appendChild(span1);

    let innerSpan1 = document.createElement("span");
    innerSpan1.classList.add("skill-text");
    innerSpan1.textContent = "Certificate Name : ";
    span1.appendChild(innerSpan1);

    let certificateNameText = document.createTextNode(certificateNameValue);
    span1.appendChild(certificateNameText);

    let span2 = document.createElement("span");
    span2.classList.add("row-div");
    div.appendChild(span2);

    let innerSpan2 = document.createElement("span");
    innerSpan2.classList.add("skill-text");
    innerSpan2.textContent = "Certificate URL : ";
    span2.appendChild(innerSpan2);

    let certificateURLText = document.createTextNode(certificateUrlValue);
    span2.appendChild(certificateURLText);

    let i = document.createElement("i");
    i.classList.add("fa-solid", "fa-trash", "remove-icon");
    li.appendChild(i);

    i.addEventListener("click", function () {
      certificates = certificates.filter(
        (e) => e.certificateId !== certificateItem.certificateId
      );
      li.remove();
      console.log(certificates);
    });
  }

  certificateName.value = "";
  certificateUrl.value = "";
}

let resume = document.getElementById("resume");
let form = document.getElementById("form");

let resumeName = document.getElementById("resume-name");
let resumeDesignation=document.getElementById("resume-designation");
let resumeMobile=document.getElementById("resume-mobile");
let resumeMail=document.getElementById("resume-mail");
let resumeLinkedin=document.getElementById("resume-linkedin");
let resumeGithub=document.getElementById("resume-github");

let resumeCareerObjective=document.getElementById("resume-careerobjective");

let resumeSkillsol=document.getElementById("resume-skillsol");

let resumeEducationul=document.getElementById("resume-education-ul");

let resumeProjectsul=document.getElementById("resume-projects-ul");

let resumeCertificatesdiv=document.getElementById("resume-certificatediv");

let formContainer=document.getElementById("form-cont");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(skills);

  resumeName.textContent = nameInput.value;
  resumeDesignation.textContent= designationInput.value;
  resumeMobile.textContent=mobileInput.value;
  resumeMobile.href="tel:"+mobileInput.value;
  resumeMail.textContent=emailInput.value;
  resumeMail.href="mailto:"+emailInput.value;
  resumeLinkedin.textContent=linkedinInput.value;
  resumeLinkedin.href=linkedinInput.value;
  resumeGithub.textContent=githubInput.value;
  resumeGithub.href=githubInput.value;
  resumeCareerObjective.textContent= summary.value;

  resumeSkillsol.innerHTML="";

  for(let skill of skills){
    let li=document.createElement("li");
    li.classList.add("resume-skills-li", "resume-content","resume-bold")
    li.textContent=skill.skillName;
    resumeSkillsol.appendChild(li);
    
  }

  resumeEducationul.innerHTML="";

  for(let educationItem of education){
    let li=document.createElement("li");
    li.classList.add("resume-edu");
    resumeEducationul.appendChild(li);
    let div1=document.createElement("div");
    div1.classList.add("resume-edu-left");
    li.appendChild(div1);
    let h41=document.createElement("h4");
    h41.textContent=educationItem.degreeName;
    div1.appendChild(h41);
    let p1=document.createElement("p");
    p1.textContent=educationItem.instituteName;
    div1.appendChild(p1);
    let div2=document.createElement("div");
    div2.classList.add("resume-edu-right");
    li.appendChild(div2);
    let h42=document.createElement("h4");
    let h43=document.createElement("h4");
    h42.textContent="CGPA/Perc : "+educationItem.gradePoints;
    h43.textContent=educationItem.durationYears;
    div2.appendChild(h42);
    div2.appendChild(h43);
  }

  resumeProjectsul.innerHTML="";

  for(let project of projects){
    let li=document.createElement("li");
    li.classList.add("list-style-none");
    resumeProjectsul.appendChild(li);
    let h4=document.createElement("h4");
    h4.classList.add("resume-cal");
    h4.textContent=project.projectName;
    li.appendChild(h4);
    let p=document.createElement("p");
    li.appendChild(p);
    let b=document.createElement("b");
    b.textContent="URL : ";
    p.appendChild(b);
    let a=document.createElement("a");
    a.textContent=project.projectUrl;
    a.href=project.projectUrl;
    a.classList.add("resume-project-link");
    
    p.appendChild(a);
  }

  resumeCertificatesdiv.innerHTML="";

  for(let certificate of certificates){
    let div=document.createElement("div");
    div.classList.add("resume-certificate-item");
    resumeCertificatesdiv.appendChild(div);
    let h4=document.createElement("h4");
    h4.textContent=certificate.certificateName;
    div.appendChild(h4);
    let p=document.createElement("p");
    div.appendChild(p);
    let b=document.createElement("b");
    b.textContent="URL : ";
    let a =document.createElement("a");
    a.textContent=certificate.certificateUrl;
    a.href=certificate.certificateUrl;
    a.classList.add("resume-project-link");
    p.appendChild(b);
    p.appendChild(a);
  }

  resume.classList.remove("hide");
  formContainer.classList.add("hide");

});

let downloadIcon = document.getElementById("resume-download-icon");

downloadIcon.addEventListener("click", function() {
  
  downloadIcon.style.display = "none";
  
  
  window.print();
  
  
  setTimeout(function() {
    downloadIcon.style.display = "flex";
  }, 100);
});










