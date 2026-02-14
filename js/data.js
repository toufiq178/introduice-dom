console.log('welcome to javaScript');

const brandsH1 = document.getElementById('brands-title');
brandsH1.innerText = 'brands names';
brandsH1.style.color= 'red';
brandsH1.style.padding= '10px';
brandsH1.style.fontWeight = '100';
brandsH1.style.border = '2px solid blue';
brandsH1.style.backgroundColor = 'cyan';

const carName = document.querySelectorAll("#car-brands ul li");
console.log(carName);
// for(const cName of carName){
//     console.log(cName);
    
// //     cName.style.color = 'blue';
// //     cName.style.backgroundColor = 'red'
// //     cName.style.padding = '12px'
// //     cName.style.fontWeight = 'bold'
// //     cName.style.fontSize = '2rem'
// // }

const players = document.getElementById('players-Container').innerText   
// console.log(players);

// const sect  = document.getElementsByTagName('section');
const sections = document.querySelectorAll('section')
// console.log(sections);
// for(const section of sections){
//     section.style.backgroundColor = 'red';
//     section.style.padding = '10px';
//     section.style.margin = '10px';
//     section.style.border = '5px solid black';
//     section.style.borderRadius = '10px';
//     section.style.color = 'orange'
// }

// sect.style.backgroundColor = 'red';

for(const section of sections){
    section.classList.add('section-card')
}