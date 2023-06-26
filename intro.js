let introText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec orci mollis, aliquet ante non, accumsan sem. Quisque at commodo risus. Nunc nec volutpat libero. Nunc sagittis tincidunt fringilla. Mauris elementum risus id felis consectetur blandit. Mauris accumsan, mauris vitae mollis elementum, lorem libero venenatis sem, ut egestas nisi nisl viverra orci. Sed sit amet finibus nulla. Praesent vel hendrerit arcu. Fusce id luctus nibh. Nulla id euismod massa, eget pretium ante. Morbi sit amet elementum erat. Fusce consectetur congue tellus. Duis vehicula, lorem sit amet auctor consectetur, libero diam dignissim lectus, non rutrum justo velit quis enim."
const div = document.querySelector(".container");
const para = document.createElement("p");

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









