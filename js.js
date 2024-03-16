
window.onload= function (argument) {
	
	 var height =(loading[0].clientHeight)
	var topicos= document.getElementsByClassName('topico')
	
	menu2[0].appendChild(img3)
	bmusica[0].appendChild(img2)
	//blingua[0].style.background=`rgba(10,208,150,0.7)`
	pl[0].appendChild(img4)
	var texto=textopt
	
		console.log(height)
		header[0].style.height= height +`px`
		setInterval(enterpage,150)
	}
	var textLoading=document.getElementsByClassName('loading')
	var menu2=document.getElementsByClassName('p')
	var bmusica= document.getElementsByClassName('m')
	var img = document.createElement('img');
	var img2 = document.createElement('img');
	var img3 = document.createElement('img');
	var img4 = document.createElement('img');
	img.src=`imagens/a.png`
	img2.src=`imagens/c.png`
	img3.src=`imagens/menu_icon1.png`
	//img4.src=`imagens/bandeiraUK.jpg`
	var title=document.getElementsByClassName('title')
	var topicos= document.getElementsByClassName('topico')
	var blingua=document.getElementsByClassName('l')
  
	 var musictheme= new Audio('media/(No Copyright Music) Long Calming Piano Background(MP3_160K).mp3')
	window.addEventListener('scroll' , scrol)
	var imgf= document.getElementsByClassName('imgf')
var swich=0
var swich2=-6
var swich3=-6
var pl= document.getElementsByClassName("pl")
 	musictheme.onended=  function(){
 		musictheme.play();
 	}
function pause() {
	let resto= (swich+1)%2
	swich= resto
	if (resto==1) {
		musictheme.play();
		musictheme.volume=0.13;
		
		
        bmusica[0].replaceChild(img ,img2)
	} else {
		musictheme.pause()
		
		bmusica[0].replaceChild(img2,img)
	}
}
function lingua(n){
	i=6
	if (n==0) {
		
		texto=textouk
		spantext=spantextuk
		spans[2].innerHTML='<i class="fa fa-globe" ></i>&nbsp &nbsp  English'

		for (var i = 5; i < 26; i++) {
			spans[i].innerHTML=spantext[i]
		}
		for (var i = 26; i < spantext.length; i++) {
			spans[i+143].innerHTML=spantext[i]
		}
		for (var i = 0; i < texto.length; i++) {
			text[i].innerHTML=''
		text[i].innerHTML=texto[i]
		}
		for (var i = 0; i <contentpt.length ; i++) {
			content[i].innerHTML=contentuk[i]
		}
		for (var i = 0; i <textbuk.length ; i++) {
			textb[i].innerHTML=textbuk[i]
		}
		for (var i = 0; i <6 ; i++) {
			al[i].innerHTML=aluk[i]
		}
	}else{
		
		spans[2].innerHTML='<i class="fa fa-globe" ></i>&nbsp &nbsp  Português'
		texto=textopt
		spantext=spantextpt
		for (var i = 5; i <26 ; i++) {
			spans[i].innerHTML=spantext[i]
		}
		for (var i = 26; i < spantext.length; i++) {
			spans[i+143].innerHTML=spantext[i]
		}
		for (var i = 0; i <textbuk.length ; i++) {
			textb[i].innerHTML=textbpt[i]
		}
		for (var i = 0; i <contentpt.length ; i++) {
			content[i].innerHTML=contentpt[i]
		}
		for (var i = 0; i <6 ; i++) {
			al[i].innerHTML=alpt[i]
		}
		for (var i = 0; i < texto.length; i++) {
			text[i].innerHTML=''
		text[i].innerHTML=texto[i]
		}
		
}
}
function scrol() {
	var paginas= document.getElementsByClassName('paginas')
  sticky = paginas[0].offsetTop;
		
		 if (window.pageYOffset>=sticky) {
		 	menu2[0].style.backgroundColor=`rgba(13,13,21,0.95)`
		 	bmusica[0].style.backgroundColor=`rgba(13,13,21,0.95)`
			pl[0].style.backgroundColor=`rgba(13,13,21,0.95)`
			title[0].style.backgroundColor=`rgba(13,13,21,0.95)`
		 	menu.classList.add("sticky")
		 	for (var i = 0; i < 5; i++) {
			topicos[i].style.backgroundColor=`rgba(13,13,21,0.95)`
		}
	}else{
		menu.classList.remove("sticky");
	}
	if (window.pageYOffset>=sticky && pag1[0].clientHeight>0) {
		
		topicos[4].style.borderTop=`  5px solid rgb(10,208,250)`
		topicos[4].style.paddingTop= 15 + `px`
	}else if (window.pageYOffset<sticky) {
		menu2[0].style.backgroundColor=`rgb(21,21,21)`
		bmusica[0].style.backgroundColor=`rgb(21,21,21)`
			pl[0].style.backgroundColor=`rgb(21,21,21)`
			title[0].style.backgroundColor=`rgb(21,21,21)`
		for (var i = 0; i < 5; i++) {
			topicos[i].style.backgroundColor=`rgb(21,21,21)`
		}
	}
}
function ativar () {
	for (var i = 0; i < 2; i++) {
    blingua[i].className = "l";
  }

  if (topicos[0].className === "topico") {
  	for (var i = 0; i < 5; i++) {

    topicos[i].className += " ativar";
    img3.src=`imagens/b.png`
}
  } else {
  	for (var i = 0; i < 5; i++) {
    topicos[i].className = "topico";
    img3.src=`imagens/menu_icon1.png`
  }
}
}
function plingua() {
	for (var i = 0; i < 5; i++) {
    topicos[i].className = "topico";
    img3.src=`imagens/menu_icon1.png`
  }

	 if (blingua[0].className === "l") {
  	for (var i = 0; i < 2; i++) {
    blingua[i].className += " ativar";
    
}
  } else {
  	for (var i = 0; i < 2; i++) {
    blingua[i].className = "l";
  }
}
		}
		
function enterpage(argument) {
	var pag= document.getElementsByClassName('pag')
	pag[0].style.display=`block`
	loading[0].style.display=`none`;
	
}

		



		