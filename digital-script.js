function calculateScore() {

    let total = 0;

    // Calculate score from all 25 questions
    for (let i = 1; i <= 25; i++) {

        let answer = document.querySelector('input[name="q' + i + '"]:checked');

        if (answer == null) {
            alert("Please answer Question " + i);
            return;
        }

        total += Number(answer.value);
    }

    let status = "";
    let advice = "";
    let color = "";

    if (total <= 20) {

        status = "🟢 Excellent Digital Balance";

        advice =
        "Great job! You have healthy smartphone habits. Continue maintaining a balanced digital lifestyle.";

        color = "green";

    } else if (total <= 40) {

        status = "🟡 Good - Keep Improving";

        advice =
        "Your smartphone usage is under control, but try reducing unnecessary screen time and avoid using your phone before bedtime.";

        color = "orange";

    } else if (total <= 70) {

        status = "🟠 Moderate Smartphone Dependence";

        advice =
        "Your phone usage is starting to affect your productivity and health. Reduce screen time, enable Focus Mode, and schedule phone-free hours.";

        color = "#ff9800";

    } else {

        status = "🔴 High Smartphone Addiction";

        advice =
        "Your smartphone usage may be seriously affecting your sleep, productivity, and wellbeing. Consider limiting social media, turning off notifications, and taking daily digital detox breaks.";

        color = "red";

    }

    document.getElementById("result").style.display = "block";

    document.getElementById("score").innerHTML =
        "📊 Your Score : <b>" + total + " / 100</b>";

    document.getElementById("status").innerHTML = status;

    document.getElementById("status").style.color = color;

    document.getElementById("advice").innerHTML =
        "<b>Personalized Advice</b><br><br>" + advice;

    // Scroll to result
    document.getElementById("result").scrollIntoView({
        behavior: "smooth"
    });

}