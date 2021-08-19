// Dom Selection


const title=document.querySelector('#title');
const author=document.querySelector('#author');
const year=document.querySelector('#year');
const btn=document.querySelector('.btn');
const bookList=document.querySelector('#book-list');
// Dom Selection Closed
btn.addEventListener('click',function(e){
    e.preventDefault();
    //console.log("Yes,it works");
    if(title.value=="" && author.value==""&& year.value==""){
        alert("please,give some data");
    }
    else{
        const newRow=document.createElement('tr');
        const newTitle=document.createElement('th');
         
        newTitle.innerHTML=title.value;
        //console.log(newTitle);
        newRow.appendChild(newTitle);


        const newAuthor=document.createElement('th');
        newAuthor.innerHTML=author.value;
        newRow.appendChild(newAuthor);


        const newYear=document.createElement('th');
        newYear.innerHTML=year.value;
        newRow.appendChild(newYear);
  
        bookList.appendChild(newRow);

    }
})

