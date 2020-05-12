
//Exercice 1 
document.getElementById('photoCV').onclick=function changer(){
  document.getElementById('photoCV').src="IMAGES/photo_2_CV.jpeg";
  }

//Exercice 2 
  var ele = document.getElementById('apprenant');
  ele.onclick=function apprenantSimplon(){
 var prenom  = prompt('Quel est votre prénom');
 var nom  = prompt('Quel est votre nom');
    document.getElementById('apprenant').textContent=prenom +' '+nom;
  } 

//Exercice 3
  var element = document.getElementById('skills');
  element.onclick=function rougir(){
    element.style.color = 'red';
  }