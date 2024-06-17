const Api_key = 'Yx5kEPbxXn08VB4nvPsh9WYoDJuDurVSPHTziexu';
const js = 'JavaScript'
const html = 'HTML'
const php = 'PHP'
const values = ''
function changes(button) {
    const buttonValue = button.value;
    console.log(buttonValue);

}
const url = `https://quizapi.io/api/v1/questions?apiKey=${Api_key}&limit=10&tags=HTML`;
console.log(url)

function handleSelectChange(event) {
    const selectedValue = event.target.value;
    const messageElement = document.getElementById('message');

    // Display the selected value
    messageElement.textContent = `You selected: ${selectedValue}`;
    console.log(selectedValue);
}
async function fetchRan() {
    try {

        const response = await fetch(url);
        const data = await response.json();
        console.log(data[0].category);
        document.getElementById('codeis').innerHTML = data[0].category;
        document.getElementById('difficulty').innerHTML = data[0].difficulty;
        document.getElementById('para').textContent = data[0].question;
        if (data[0].answers.answer_a) {
            document.getElementById('but_1').style.display = 'block'
            document.getElementById('but_1').innerText = data[0].answers.answer_a;

        }

        if (data[0].answers.answer_b) {
            document.getElementById('but_2').style.display = 'block'
            document.getElementById('but_2').innerText = data[0].answers.answer_b;

        }

        if (data[0].answers.answer_c) {
            document.getElementById('but_3').style.display = 'block'
            document.getElementById('but_3').innerText = data[0].answers.answer_c;

        }

        if (data[0].answers.answer_d) {
            document.getElementById('but_4').style.display = 'block'
            document.getElementById('but_4').innerText = data[0].answers.answer_d;

        }



    } catch (error) {

        console.log("error");

    }
}
fetchRan()

async function fun() {
    document.getElementById('score').textContent = " ";

    let data = null;


    async function fetchData() {
        const response = await fetch(url);
        data = await response.json();
    }

    // Call fetchData when fun() is initialized
    await fetchData();

    // Handle click events
    async function handleClick(event) {
        let scoreElement = document.getElementById('score');

        // Access the value of the clicked button
        let buttonValue = event.target.value;

        // Use the fetched data
        let answer;
        switch (buttonValue) {
            case 'a':
                answer = data[0].correct_answers.answer_a_correct;
                break;
            case 'b':
                answer = data[0].correct_answers.answer_b_correct;
                break;
            case 'c':
                answer = data[0].correct_answers.answer_c_correct;
                break;
            case 'd':
                answer = data[0].correct_answers.answer_d_correct;
                break;
            default:
                answer = 'false';
                break;
        }

        if (answer === 'true') {
            scoreElement.style.color = "green";
            scoreElement.textContent = "true";
        } else {
            scoreElement.style.color = "red";
            scoreElement.textContent = "false";
        }
        console.log(buttonValue);
    }


    document.querySelectorAll('.but').forEach(button => {
        button.addEventListener('click', handleClick);
    });

    fetchRan();
}

function changes() {
    fetchRan()
}


