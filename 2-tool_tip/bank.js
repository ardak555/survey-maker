let info_style = document.createElement("style");
info_style.innerHTML = `
         body{
            display: flex;
            justify-content: center;
            font-family: sans-serif;
        }

        .content_container{
            width: 80vw;
            height: 20vh;
            border: 1px solid gray; 
            display: flex;
            justify-content: space-between;
            align-content: center;
            flex-wrap: wrap;

        }

        .content_header{
            padding: 0 .5em;
            height: 5vh;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            flex-wrap: nowrap;
            align-items: center;
            gap: 3em;
        }

        .header_brand{
            height: 100%;
        }

        .header_brand .brand_image{
            height: 100%;
        }

        .content_infos{
            padding: 0 .5em;
            height: 10vh;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 6em;
        }

        .bold{
            font-weight: bold;
        }

        .profit_rate_cont{
            display: flex;
            gap: .5em
        }
        
        .profit_rate_cont img{
            height:1em

        }

        .content_footer{
            display: flex;
            justify-content: space-between;
            padding: 0 .5em;
            flex-direction: column-reverse;
            align-items: center;
        }

        .detail a{
            color: darkslategrey;
        }

        .apply_button{
            border: 1px solid orange;
            width: 30%;
            text-align: center;
            border-radius: 5px;
            padding: .2em 1em;
        }

        .buttont_content{
            color: orange;
        }
        .apply_button:hover{
            background-color: orange;
        }

        .buttont_content:hover{
            margin: .3em 1em;
            color: white;
        }
 
        .info_contents img{
            display:none;
            position: absolute;
            top: .7em;
            right: 38.2em;
            height: 20vh;
        }
        


    @media (max-width: 768px) {
            
        
        .content_container{
            width: 80vw;
            height: 20vh;
            border: 1px solid gray;
            display: block;
        }

        .content_header{
            padding: 0 .5em;
            height: 5vh;
            border-bottom: 1px solid gray;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 0;
        }

        .header_brand{
            height: 100%;
        }

        .header_brand .brand_image{
            height: 100%;
        }

        .content_infos{
            padding: 0 .5em;
            height: 10vh;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 0;
        }

        .bold{
            font-weight: bold;
        }

        .profit_rate_cont{
            display: flex;
            gap: .5em
        }
        
        .profit_rate_cont img{
            height:1em

        }

        .content_footer{
            display: flex;
            justify-content: space-between;
            padding: 0 .5em;
            flex-direction: row;
            align-items: center;
        }

        .detail a{
            color: darkslategrey;
        }

        .apply_button{
            border: 1px solid orange;
            width: 30%;
            text-align: center;
            border-radius: 5px;
            padding: .2em 1em;
        }

        .buttont_content{
            color: orange;
        }
        .apply_button:hover{
            background-color: orange;
        }

        .buttont_content:hover{
            margin: .3em 1em;
            color: white;
        }
 
        .info_contents .info_contents_img{
            display:none;
            position: absolute;
            top: 3em;
            right: 2.2em;
            height: 16vh;
        }
        
    }

`;
document.head.append(info_style);


let info_content = document.createElement("div");
info_content.innerHTML = `
   <div class="content_container">

        <div class="content_header">
            <div class="header_brand">
                <img class="brand_image" src="https://cdn.hangikredi.com/images/bank/0b26268d-1f7a-473f-9efb-960d9887f5b8.svg" alt="Vakifbank">
            </div>
            <div class="header_type">İhtiyaç Finansmanı</div>
        
        </div>

        <div class="content_infos">
            <div class="profit_rate type">
                <div class="prfit_rate_header bold">Kar Payı Oranı</div>
                <div class="profit_rate_cont">
                    <div class="cont">%4,29</div>
                    <img class='info_button' src="https://imgvisilabsnet.azureedge.net/banner/uploaded_images/267_904_20230315094710596.png" alt="info_i">
                
                <div class="info_contents">
                    <img class='info_contents_img' src="https://cdn.hangikredi.com/images/blog/article/b07f0bdc-b2ab-4ead-aaae-a972ae2e0cb5.png" alt="info_content">
                </div>
                </div>
            </div>
            <div class="monthly_installment type">
                <div class="monthl_installment_header bold"> Aylık Taksit</div>
                <div class="monthl_installment_cont cont"> 6.020,03</div>
            </div>
            <div class="total_payment type">
                <div class="total_payment_header bold">Toplam Ödeme</div>
                <div class="total_payment_cont cont">
                    36.270,18 TL
                </div>
            </div>
    
        </div>


        <div class="content_footer">
            <div class="detail">
                <a href="#">Detay</a>
            </div>
            <div class="apply_button">
                <div class="buttont_content"> Hemen Başvur</div>
               
            </div>
        </div>
    </div>
`;
document.body.append(info_content);


let open_info_buttons = document.querySelector('.info_button');
let info_contents_img = document.querySelector('.info_contents_img');



    if(window.innerWidth>760){
        open_info_buttons.addEventListener('mouseover', function() {
            info_contents_img.style.display = 'block';
        });
        open_info_buttons.addEventListener('mouseout', function() {
            info_contents_img.style.display = 'none';
        });
    }else{
        open_info_buttons.addEventListener('click', function(event)
        {
            event.stopPropagation();
            info_contents_img.style.display = 'block';

        });

        document.addEventListener('click', function() {
            info_contents_img.style.display = 'none';
        });
    }

