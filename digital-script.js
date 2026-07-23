const API_URL = "https://script.google.com/macros/s/AKfycbz_H6FcqcZY3Nt6xj1fPJSqo4wCrjhnDmXigTgRhUZhVCRGes4OtjTn0rqkmcLaLjEy6g/exec";

function calculateScore() {

    let total = 0;

    for (let i = 1; i <= 25; i++) {

        let answer = document.querySelector('input[name="q" + i + '"]:checked');

        if (!answer) {
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

        advice = "Great job! You have healthy smartphone habits. Continue maintaining a balanced digital lifestyle.";

        color = "green";

    } else if (total <= 40) {

        status = "🟡 Good - Keep Improving";

        advice = "Your smartphone usage is under control, but try reducing unnecessary screen time and avoid using your phone before bedtime.";

        color = "orange";

    } else if (total <= 70) {

        status = "🟠 Moderate Smartphone Dependence";

        advice = "Your phone usage is starting to affect your productivity and health. Reduce screen time, enable Focus Mode, and schedule phone-free hours.";

        color = "#ff9800";

    } else {

        status = "🔴 High Smartphone Addiction";

        advice = "Your smartphone usage may be seriously affecting your sleep, productivity, and wellbeing. Consider limiting social media, turning off notifications, and taking daily digital detox breaks.";

        color = "red";

    }

    document.getElementById("result").style.display = "block";

    document.getElementById("score").innerHTML =
        "📊 Your Score : <b>" + total + " / 100</b>";

    document.getElementById("status").innerHTML = status;
    document.getElementById("status").style.color = color;

    document.getElementById("advice").innerHTML =
        "<b>Personalized Advice</b><br><br>" + advice;

    document.getElementById("result").scrollIntoView({
        behavior: "smooth"
    });

    const formData = {

        name: document.getElementById("name").value,

        age: document.getElementById("age").value,

        occupation: document.getElementById("occupation").value,

        score: total,

        result: status

    };

    fetch(API_URL,{

        method:"POST",

        mode:"no-cors",

        headers:{

            "Content-Type":"text/plain;charset=utf-8"

        },

        body:JSON.stringify(formData)

    })
    .then(()=>{

        console.log("Data Sent Successfully");

    })
    .catch((err)=>{

        console.log(err);

    });

}
