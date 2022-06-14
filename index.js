let userInput = document.getElementById('userInput');
let output = document.getElementById('output');
let buttons = Array.from(document.getElementsByClassName('button'));
let result;
let answer;
let input;

buttons.map(button => {
    button.addEventListener('click', (e) => {
        userInput.style.display = "block";
        output.style.display = "none";
        switch (e.target.value) {
            case 'C':
                userInput.innerText = '';
                output.innerText = '';
                output.style.display = "none";
                userInput.style.fontSize = "25px";
                userInput.style.display = "block";
                break;
            case '=':
                try {
                    answer = output.innerText;
                    answer = eval(userInput.innerText);
                    input = userInput.innerHTML;
                    input += e.target.value;
                    result = [answer, input];
                    output.style.display = "block";
                    output.style.fontWeight = "bold";
                    userInput.style.fontSize = "20px";
                    document.getElementById('history').style.display = "block";
                    userInput.style.display = "none";
                    addResult(result);
                    userInput.innerText = answer;
                    output.innerText = answer;
                    break;
                } catch {
                    userInput.innerText = "Enter Valid Numbers"
                }
                break;
            case 'DEL':
                if (userInput.innerText) {
                    userInput.innerText = userInput.innerText.slice(0, -1);
                }
                break;
            default:
                userInput.innerText += e.target.value;
        }
    });
});

function addResult(a) {
    let resultList = document.getElementById("results");
    let createLi = document.createElement("li");
    createLi.textContent = `${a[1]} ${a[0]}`;
    resultList.appendChild(createLi);
}