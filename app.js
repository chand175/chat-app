
 
const prompt = document.querySelector("#prompt");
const button = document.querySelector('#btn');
const chatContainer = document.querySelector('.chat-container')
let userMessage = null;

let apiUrl =  'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAgAF8UTQvoECJpz5YpN5sbnr7nd_shM10'


function createChat(html , className){
    let div = document.createElement('div')
    div.classList.add(className)
    div.innerHTML=html
    return div
}

async function getApiResponse(chatBox) {
    let para = chatBox.querySelector('.text')
     try{
        let response =  await fetch(apiUrl , {
            method: "POST",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({
                contents:[{"parts":[{"text":userMessage}]}]
            })
        })

        let data = await response.json();

        let apiResponse = data?.candidates[0].content.parts[0].text ;
      para.innerText = apiResponse


     }
     catch(err){
        console.log(`This is the error : ${err}`)

     }
    
}

function showAnswer(){
    let html = `<div class="chat-box">
            <div class="img"> 
                <img src="./images/chatBox.webp" alt="">
            </div>
            <p class="text"></p>
        </div> `
        let chatBox = createChat(html , "chat-box")
        chatContainer.appendChild(chatBox)
getApiResponse(chatBox)
}


button.addEventListener("click",(e)=>{
    e.preventDefault()
   userMessage= prompt.value
  if(!userMessage) return;
  let html = ` <div class="img"> 
                <img src="./images/user.png" alt="">
            </div>
            <p class="text"> </p>`;
            let userChat= createChat(html ,"user-chat")
            userChat.querySelector('.text').innerText = userMessage
            chatContainer.appendChild(userChat)
            prompt.value = ""

            setTimeout(showAnswer,500)
})





