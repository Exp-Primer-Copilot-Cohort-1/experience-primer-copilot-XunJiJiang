function skillsMember() {
    var skills = document.getElementById("skills");
    var member = document.getElementById("member");
    var memberSkills = document.getElementById("member-skills");

    if (member.checked == true) {
        skills.style.display = "block";
        memberSkills.style.display = "block";
    } else {
        skills.style.display = "none";
        memberSkills.style.display = "none";
    }
}