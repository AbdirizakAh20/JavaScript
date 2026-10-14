let h1 = document.querySelector('h1'); 
//  let button = document.querySelector('button');
//  button.addEventListener('click', print);

// h1.addEventListener("mouseover", () => {
//     console.log('mouseover');
//  });

 let button = document.querySelector('button');
 button.addEventListener("click", () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const newColour = `rgb(${r}, ${g}, ${b})`;
    console.log(r);
    document.body.style.backgroundColor = newColour;
    h1.innerText = newColour
 });

//  const select = document.querySelector('#pet-select');
//  select.addEventListener("change", () => {
//    console.log('changing selection');
//  });

//  const input = document.querySelector('#input');
//  input.addEventListener('keydown', () => {
//    console.log(input.value);
//  });