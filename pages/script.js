/*расчет капитала и акций
расчет через форму html для js       http://blog.harrix.org/article/3286*/ 
function addition1() {
    let D = +parseFloat(document.getElementById('D').value);
    let persentRisk = +parseFloat(document.getElementById('persentRisk').value);
    let fractal = +parseFloat(document.getElementById('fractal').value);
    let openK = +parseFloat(document.getElementById('openK').value);

    if (isNaN(D)==true) D=0;
    if (isNaN(persentRisk)==true) persentRisk=0;
    if (isNaN(fractal)==true) fractal=0;
    if (isNaN(openK)==true) openK=0;

    if ((openK > fractal) && (openK > 0) && (fractal > 0)) {
        var K =  ( Math.round((D * (persentRisk / 100) * openK / (openK - fractal))*100 ) / 100);
        var kolAct = Math.floor(D * (persentRisk / 100) / (openK - fractal));
        
    } else if ((openK < fractal) && (openK > 0) && (fractal > 0)) {
        
        K = ( Math.round((D * (persentRisk / 100) * openK / (fractal - openK))*100 ) / 100);
        kolAct = Math.floor(D * (persentRisk / 100) / (fractal - openK));
    }
        
    document.getElementById('result').innerHTML = "Разрешенный капитал:   " + K.toLocaleString();
    document.getElementById('result2').innerHTML = "Количество акций:   " + kolAct.toLocaleString();
}

/*активация модального окна расчета капитала   https://learn.javascript.ru/introduction-browser-events*/
function rascetCapitalShow() {
    document.getElementById('rascetCapitalModal').style.display = "block";
                 
};
rascetKol_vo.addEventListener("click", rascetCapitalShow);

function rascetCapitalShowMobil() {
    document.getElementById('rascetCapitalModal').style.display = "block";
    document.getElementById('sidebarMobil').style.display = "none" ; 
}
rascetKol_voMobil.addEventListener("click", rascetCapitalShowMobil);

function rascetCapitalClose() {
    document.getElementById('rascetCapitalModal').style.display = "none";
};
rascetCapitalBtnClose.addEventListener("click", rascetCapitalClose);


/*расчет омега*/ 
function addition2() {
                              
    let persentSL = +parseFloat(document.getElementById('persentSL').value);
    let fractalOM = +parseFloat(document.getElementById('fractalOM').value);
    let openOM = +parseFloat(document.getElementById('openOM').value);
                     
    if (isNaN(persentSL)==true) persentSL=0;
    if (isNaN(fractalOM)==true) fractalOM=0;
    if (isNaN(openOM)==true) openOM=0;

    if ((openOM > fractalOM) && (( openOM - fractalOM) * 1.5 ) <= ( openOM * persentSL / 100 )) {
         
        var Omega = Math.round((openOM + ( openOM - fractalOM ) * 1.5 ) * 100 ) / 100 ;
        
    } else  if ((openOM > fractalOM) && (( openOM - fractalOM) * 1.5 ) > ( openOM * persentSL / 100 )) {
        
        var Hω = ( openOM - fractalOM ) * 1.5;
        Omega = Math.round((openOM + Hω * ( 1 - Hω / openOM )) * 100) / 100 ;
        
    } else if ((openOM < fractalOM) && (( fractalOM - openOM ) * 1.5 ) <= ( openOM * persentSL / 100 )) {
    
        Omega = Math.round((openOM - ( fractalOM - openOM ) * 1.5 ) * 100 ) / 100 ;
        
    } else if ((openOM < fractalOM) && (( fractalOM - openOM ) * 1.5 ) > ( openOM * persentSL / 100 )) {
    
        Hω = ( fractalOM - openOM ) * 1.5;
        Omega = Math.round((openOM - Hω * ( 1 - Hω / openOM )) * 100) / 100 ;
    }
         
    document.getElementById('result3').innerHTML = "Омега:      " +  Omega;							
}

/*активация модального окна расчета омега*/
function rascetOmegaShow() {
    document.getElementById('rascetOmegaModal').style.display = "block";                                 
};
rascetOmega.addEventListener("click", rascetOmegaShow);

function rascetOmegaShowMobil() {
    document.getElementById('rascetOmegaModal').style.display = "block"; 
    document.getElementById('sidebarMobil').style.display = "none" ; 
}
rascetOmegaMobil.addEventListener("click", rascetOmegaShowMobil)

function rascetOmegaClose() {
    document.getElementById('rascetOmegaModal').style.display = "none";
};
rascetOmegaBtnClose.addEventListener("click", rascetOmegaClose);


/*активация модального окна %*/
function tabPersentShow() {
    document.getElementById('tabPersentModal').style.display = "block";                    
};
tabPersent.addEventListener("click", tabPersentShow);

function tabPersentShowMobil() {
    document.getElementById('tabPersentModal').style.display = "block";                    
};
tabPersentMobil.addEventListener("click", tabPersentShowMobil);

function tabPersentClose() {
    document.getElementById('tabPersentModal').style.display = "none";
};
tabPersentBtnClose.addEventListener("click", tabPersentClose);


/*расчет размахов*/ 
function addition3() {
    let level_0up = +parseFloat(document.getElementById('level_0up').value);
    let level_0d = +parseFloat(document.getElementById('level_0d').value);
    let impuls = +parseFloat(document.getElementById('impuls').value);							

    if (isNaN(level_0up)==true) level_0up=0;
    if (isNaN(level_0d)==true) level_0d=0;
    if (isNaN(impuls)==true) impuls=0;
    
    if (impuls <= level_0d) {
        var level_1up = ( Math.round((level_0up + (level_0d - impuls))*100 ) / 100);
        var level_2up = ( Math.round((level_0up + (level_0d - impuls) * 2 )*100 ) / 100);
        var level_3up = ( Math.round((level_0up + (level_0d - impuls)* 3 )*100 ) / 100);
        var level_1d = ( Math.round((level_0d - (level_0up - level_0d))*100 ) / 100);
        var level_2d = ( Math.round((level_0d - (level_0up - level_0d)* 2 )*100 ) / 100);
        var level_3d = ( Math.round((level_0d - (level_0up - level_0d)* 3 )*100 ) / 100);
    }
    
    if (impuls >= level_0up) {
        level_1up = ( Math.round((level_0up + (level_0up - level_0d))*100 ) / 100);
        level_2up = ( Math.round((level_0up + (level_0up - level_0d)* 2 )*100 ) / 100);
        level_3up = ( Math.round((level_0up + (level_0up - level_0d)* 3 )*100 ) / 100);
        level_1d = ( Math.round((level_0d - (impuls - level_0up))*100 ) / 100);
        level_2d = ( Math.round((level_0d - (impuls - level_0up)* 2 )*100 ) / 100);
        level_3d = ( Math.round((level_0d - (impuls - level_0up)* 3 )*100 ) / 100);								
    }
        
    document.getElementById('result_level_1up').innerHTML = "Цель + 1:   " + level_1up.toLocaleString();
    document.getElementById('result_level_2up').innerHTML = "Цель + 2:   " + level_2up.toLocaleString();
    document.getElementById('result_level_3up').innerHTML = "Цель + 3:   " + level_3up.toLocaleString();
    document.getElementById('result_level_1d').innerHTML = "Цель - 1:   " + level_1d.toLocaleString();
    document.getElementById('result_level_2d').innerHTML = "Цель - 2:   " + level_2d.toLocaleString();
    document.getElementById('result_level_3d').innerHTML = "Цель - 3:   " + level_3d.toLocaleString();
}
/*активация модального окна расчета размахов*/
function rascetRasmahShow() {
    document.getElementById('rascetRasmahModal').style.display = "block";
                     
};
rascetRasmah.addEventListener("click", rascetRasmahShow);

function rascetRasmahShowMobil() {
    document.getElementById('rascetRasmahModal').style.display = "block";
    document.getElementById('sidebarMobil').style.display = "none" ;  
}
rascetRasmahMobil.addEventListener("click", rascetRasmahShowMobil)

function rascetRasmahClose() {
    document.getElementById('rascetRasmahModal').style.display = "none";
};
rascetRasmahBtnClose.addEventListener("click", rascetRasmahClose);


 //для активации кнопки вызова формул в мобильной версии
function btnsRascetShow() {
    document.getElementById('sidebarMobil').style.display = "block";
};
btnsRascet.addEventListener("click", btnsRascetShow);


//когда модальное окно скрыто - не работает
/*const scrollY = document.body.style.top;
document.body.style.position = '';
document.body.style.top = '';
window.scrollTo(0, parseInt(scrollY || '0') * -1);*/


/*кнопка возврата вверх страницы */
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
//конец
