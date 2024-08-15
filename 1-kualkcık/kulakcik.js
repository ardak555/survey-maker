
let kulakcik_style = document.createElement("style");
kulakcik_style.innerHTML = `

    body{
    margin:10px 0;
    }

    .vl-content {
        display:flex;
        transition: transform 0.3s ease;
        transform: translateX(-20vh);
    }

    .vl-clickBox {
        height: 16vh;
        width: 8vh;
        border: 1px solid black;
        display:flex;
        justify-content:center;
        align-items:center;
    }

    .vl-text{
        writing-mode: vertical-rl;
        text-align: center;
        font-size:11pt;
        font-weight:bold;
    }

    .vl-arrow-open{
        display:inline;
    }
    .vl-arrow-close{
        display:none;
    }

    .vl-product-content{
        height:16vh;
        width:20vh;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        border: 1px solid black;
    }

    vl-product-image{
        height:'5vh'; 
        width:'3vh';
    }

    vl-product-image-pic{
        height: 10vh !important;
    }
    .vl-product-price{
        display:flex;
    }
    
    .vl-product-text{
        text-align:center;
    }
`;
document.head.appendChild(kulakcik_style);


let kulakcik_body = document.createElement("div");
kulakcik_body.innerHTML = `
<div class='vl-content'>

    <div class='vl-product-content'>

        <div class='vl-product-image'>
            <img src='indir.jpg' style='height: 10vh;'>
        </div>

        <div class='vl-product-text'>
            <span>Pantolon</span>
        </div>
        
        <div class='vl-product-price'>
            <div class='old-price'>
                <s>10000 ₺</s>
            </div>
            <div> - </div>
            <div class='vl-new-price'>
                6000 ₺
            </div>
        </div>
    </div>

        <div class='vl-clickBox'>
        <div class='vl-text'> Son Görüntülenenler </div>

        <div class:'vl-arrow'>
            <div class ='vl-arrow-open'>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAiklEQVR4nM3VuwrCQBAF0LM2luIf+Cj8zHQhvQRrvyqFjQ/0N5SAhQRszA04MO1hlp29y/daYiFUOzxwwzYBdni++4rNWLD6APu+YD0WrQdoZNImPWnBfgq0nQI9DNAzVmPQGY4D9IT5X4AleeSSvJSSXpsmidXJp1elF7lLh0IfsPdkwPb10xfwAu4jS67YkH3sAAAAAElFTkSuQmCC">
            </div>

            <div class ='vl-arrow-close vl-arrow-open'>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAgElEQVR4nK3UQQrCMBAF0LerUr2JHsMbVN1ZPKWIS62XUtFNCiXgIul8yPZB/mRCWbZYmpkzPnhgXYv0Cfmmc6pBjnhPkAuaUuSA1wS5YjEXudUUvc+QO9pSpMuQAatSZJchz9pRh0FhVwstO3T8oQ8ydEWkhCztmJBvZMzmX+E/3GM9NA8YProAAAAASUVORK5CYII=">
            </div>
        </div>
    </div>

</div>
`;
document.body.appendChild(kulakcik_body);

let openArrow = document.querySelector('.vl-arrow-open');
let closeArrow = document.querySelector('.vl-arrow-close');
let content = document.querySelector('.vl-content');

closeArrow.addEventListener('click', function() {
    content.style.transform = 'translateX(-20vh)';
    closeArrow.style.display = 'none';
    openArrow.style.display = 'inline';
});

openArrow.addEventListener('click', function() {
    content.style.transform = 'translateX(0)';
    openArrow.style.display = 'none';
    closeArrow.style.display = 'inline';
});

