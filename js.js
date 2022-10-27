
const data = [
        "kompjuteri",
        [
            "laptop",
            [
                "dijagonala 13",
                [
                    "lenovo",
                    "dell",
                    "assus",
                ],
                "dijagonala 15",
                [
                    "lenovo",
                    "dell",
                    "assus",
                ],
                "dijagonala 17"
            ],
            "desktop",[
                "intel"
            ]
        ],
        "monitori",
        [
            "viewSonic",
        ],
        "tastature",
        [
            "logiTech",
        ]
        
    ]

// RENDERMENU MI VRACA ISPIS
    const renderMenu = (menu) => {

        //UVEK KRECE SA <UL>
        let ispis = `<ul>`;
    // PROLAZI KROZ SVAKI ELEM U NIZU
        for(let i = 0; i<menu.length; i++){
    
            //AKO JE SLEDECI ELEM (menu[i+1]) OBJEKAT, BICE PADAJUCA LISTA, PONOVO KREIRAM UL SA DISPLAY: NONE, KOJI SE VIDI SAMO NA KLIK
            if(typeof menu[i+1] === 'object'){

                ispis += `<li class="open">${menu[i]}</li>`;
                ispis += `<ul style="display: none">`;
                i += 1;
    
                //REKURZIVNA FUNKCIJA DA ZOVU SAMA SEBE I KRENE PONOVO SA RENDER
                ispis += renderMenu(menu[i]);
                ispis += `</ul>`;
            }
            else
            {
                //AKO SLEDECI U NIZU NIJE OBJEKAT, ZNACI NE OTVARA SE, NEMA DECE
                ispis += `<li class="nonOpen">${menu[i]}</li>`;
            }
        }
        ispis += `</ul>`
    
        return ispis;
    }
    
    let html = renderMenu(data);
    console.log(data);
    document.getElementById("menu").innerHTML = html;
    
     // DOHVATAM SVE ELEM KOJI SE OTVARAJU, DA BIH VIDELA DA IM NJIGOVO DETE UL i TADA STAVLJAM LISTENER 
    let item = document.getElementsByClassName("open");
    //console.log(item)

    for(let i = 0; i < item.length; i++){
    
        let dete = item[i].nextElementSibling;
        console.log(dete)
        if(dete && dete.nodeName === "UL"){
    
            item[i].addEventListener("click", () => {
    
    
                item[i].classList.toggle("active");

                if (dete.style.display === "block") {
                    dete.style.display = "none";
    
                }
                else{
                    dete.style.display = "block";
    
                }
            })
        }
    }