
function createBook(title,author, year, available, description){

    let color = ''; 
    if(available == "oui"){
        color = "bookYes";
    } else {
        color = "bookNo";
    }

    

    document.querySelector('#rep').innerHTML += `
    <div class="book ${color}">
    <i class="fas fa-book"></i>
    <h2>${title}</h2>
    <h3> Auteur : ${author}</h3>
    <h4> Année de publication : ${year}</h4>
    <h4> Disponibilité : ${available}</h4>
    <p>${description}</p>
    
    </div>

   ` ;
  
}

document.forms.formBook.addEventListener('submit' , function(event){
    event.preventDefault(); //pour éviter de faire un appel serveur 
    createBook(this.title.value, this.author.value, this.year.value, this.available.value, this.description.value);
    }
   );

 


   
