let popup_style = document.createElement("style");
popup_style.innerHTML = `
    .main_container{
        height:100vh;
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center; 
        padding:0;
        margin:0;
    }

    .popup_container{
        display:flex;
        justify-content:center;
        align-items:center; 
        height:40vh;
        width:50vw;        
        padding:0;
        margin:0;
    }

    .popup_button{
        border:1px solid coral;
        width:10vw;
        color:white;
        background-color:coral;
        border-radius:20px;
        text-align:center;
    }

    .popup_button:hover{
        border:1px solid coral;
        width:10vw;
        color:coral;
        background-color:white;
        border-radius:20px;
        text-align:center;
    }



    .popup_content{
        display:none;
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


`;

document.head.append(popup_style);


let popup_content = document.createElement("div");
popup_content.innerHTML = `


        <div class='main_container'>
            <div class='popup_container'>
                <div class='popup_button'> Open </div>
                
                <div class='popup_content'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat saepe quod maiores corrupti illum delectus consequuntur quaerat, fugit maxime quidem.
                    </p>
                </div>
            </div>
        </div>
    
    `;

document.body.append(popup_content);



let open_pupup_buttons = document.querySelector('.popup_button');
let pupup_contents = document.querySelector('.popup_content');

open_pupup_buttons.addEventListener('click', function(event)
{
    event.stopPropagation();
    pupup_contents.style.display = 'block';

});

document.addEventListener('click', function() {
    popup_content.style.display = 'none';
});