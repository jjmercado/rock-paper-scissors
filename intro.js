let introText = "Rock Paper Scissor"
const body = document.querySelector("body");
const div = document.createElement("div");
const para = document.createElement("p");

div.classList = "container";

body.appendChild(div);

for (let index = 0; index < introText.length; index++) 
{
    const element = introText[index];
    delay(index, element);    
}

function delay(i, char) 
{
    setTimeout(() =>
    {
        para.textContent += char;
        div.appendChild(para);
        
    }, 100 * i)    
}









