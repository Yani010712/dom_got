// window.addEventListener('load', function(){
//   let div = document.getElementsByClassName('special')[0];
//   let span = div.getElementsByTagName('span')[0];
//   span.style = "background:hotpink; color:floralwhite;";
// });




window.addEventListener('load', function(){
    let ul = document.getElementsByClassName("characters")[0];
    let newLi = document.createElement('li');
    newLi.setAttribute('class', 'character');
    ul.appendChild(newLi);
    newLi.innerHTML = '<h1 class="name">Daenerys Targaryen</h1><h2 class="title">Lady of Dragonstone</h2><span class="house">House Targaryen</span>';
});



// window.addEventListener('load', function(){
//     ul = document.getElementsByClassName("characters")[0];
//     li = document.createElement('li');
//     li.setAttribute('class', 'character');
//     ul.appendChild(li);
//     h1 = document.createElement('h1');
//     h1.setAttribute('class', 'name');
//     h1.innerText ='Sansa Stark';
//     li.appendChild(h1);
//     h2 = document.createElement('h2');
//     h2.setAttribute('class', 'title');
//     h2.innerText = 'Lady of Winterfell';
//     li.appendChild(h2);
//     span = document.createElement('span');
//     span.setAttribute('class', 'house');
//     span.innerText = 'House Stark';
//     li.appendChild(span); });
