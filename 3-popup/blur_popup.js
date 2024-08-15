let popup_style = document.createElement("style");
popup_style.innerHTML = `

    body{
        padding:0;
        margin:0;
    }
    .main_container{
        height:100vh;
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center; 
        opacity:.5;
        background-color: rgba(17,76,19,.3);
        

    }
        .popup_container{
        position:absolute;
        display:flex;
        justify-content:center;
        align-items:center; 
        height:fit-content;
        width:50%;        
        padding:0;
        margin:0;
        
    }

    .popup_content{
        height:40vh;
        width:50vw; 
        border: 1px solid coral;
        position:absolute;
        background-color: coral;
        color:white;
        border-radius:20px
    }

    .popup_content p{
        padding:1em;
    }

    .flex_container{
        display:none;
        justify-content:center;
        align-items:center;
        
    }

`;
document.head.append(popup_style);


let popup_content = document.createElement("div");
popup_content.innerHTML = `

    <div class='flex_container'>

        <div class=main_container></div>
        
        <div class=popup_container>          
            <div class=popup_content>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat saepe quod maiores corrupti illum delectus consequuntur quaerat, fugit maxime quidem.
                </p>
            </div>
        </div>
    </div>
`;
document.body.append(popup_content);

let close_pupup_buttons = document.querySelector('.main_container');
let pupup_contents = document.querySelector('.popup_content');

let flex_container = document.querySelector('.flex_container');


setTimeout(function() {
    flex_container.style.display = 'flex';
}, 3000);



close_pupup_buttons.addEventListener('click', function() {
    flex_container.remove();  
});