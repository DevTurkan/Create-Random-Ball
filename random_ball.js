let creator_button=document.getElementById('creator_button'),
        main_window=document.getElementById('main_window');


    creator_button.addEventListener('click', function create(){
        
        let translate_x=parseInt(Math.random() * 10000),
            translate_y=parseInt(Math.random() * 1000),
            bg_color=parseInt(Math.random() * 1000);


            if(translate_x>1200 || translate_y>500){
                create()
                console.log('if')
            }else{
                main_window.innerHTML+=`<div style="height:40px; width:40px; background-color:hsl(${bg_color}, 100%, 50%, 0.3); border-radius: 50%; border: 12px double hsl(${bg_color}, 100%, 50%); transform:translate(${translate_x}px, ${translate_y}px); position:absolute;"></div>`;
                console.log('else')
            }
        
    })
