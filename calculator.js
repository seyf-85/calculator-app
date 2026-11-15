const buttonsEl=document.querySelectorAll("button")
const inputField=document.getElementById("inputel")
for(let i=0;i<buttonsEl.length;i++){
    buttonsEl[i].addEventListener("click",()=>{
        const buttonValue=buttonsEl[i].textContent
        if (buttonValue==="C")
            {
                inputField.value=""
            }
            else if(buttonValue==="=")
            {
                inputField.value=eval(inputField.value)

            }
            else if(buttonValue==="^")
                {inputField.value+="**"}
                else
                    {
                        inputField.value+=buttonValue
                    }
    })
}
