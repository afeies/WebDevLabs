function greetingFunc() {
    let d = new Date();
    let h = d.getHours();
    let greeting = "";
    if (h >= 5 && h < 12) {
        greeting = "Good morning";
    } else if (h < 18) {
        greeting = "Good afternoon";
    } else if (h <= 20) {
        greeting = "Good evening";
    } else if (h > 20 || h < 5) {
        greeting = "Good night";
    }

    console.log(greeting + "!" + h);

    let greetingElement = document.getElementById("greeting");
    if (greetingElement) {
        greetingElement.innerHTML = greeting + ", I am Alex";
    }
}

$(document).ready(function() {
    $("#read-more").click(function() {
        $("#short-bio").hide();
        $("#full-bio").show();
    });

    $("#read-less").click(function() {
        $("#full-bio").hide();
        $("#short-bio").show();
    });
});