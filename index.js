

function subfoot() {
    $.ajax({
        url: 'https://api.apispreadsheets.com/data/OPP3r5ntod2Ay9Fn/',
        type: 'post',
        data: $("#footform").serializeArray(),
        success: function () {
            var rohit = "Subscribed!!";
            document.getElementById('btn-sub').innerHTML = rohit;
        },
        error: function () {
            alert("Please!!! Connect to Internet :(")
        },

    });

}

function android() {
    const scroll = document.getElementById('contact');
    scroll.scrollIntoView();
    var setText = "Android Project :";
    document.getElementById('msg').value = setText;
}
function web() {
    const scroll = document.getElementById('contact');
    scroll.scrollIntoView();
    var setText = "Web Development Project :";
    document.getElementById('msg').value = setText;
}
function uiux() {
    const scroll = document.getElementById('contact');
    scroll.scrollIntoView();
    var setText = "UI / UX Project :";
    document.getElementById('msg').value = setText;
}
function trigent() {
    window.open("https://www.trigent.com/");
}
function impect() {
    window.open("https://www.thedigitalgroup.com/");
}
function esko() {
    window.open("https://www.esko.com/en");
}
function ashish() {
    window.open("https://www.linkedin.com/in/ashish-chandrawanshi-27671a199/");
}
function rohit() {
    window.open("https://www.linkedin.com/in/rohitggothi/");
}
function abhi() {
    window.open("https://www.linkedin.com/in/abhishek-parmar-2aa9a319b/");
}