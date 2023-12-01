// sự kiện click show text
function toggleParagraph(paragraphId) {
    var paragraph = document.getElementById(paragraphId);
    if (paragraph.style.display === 'none' || window.getComputedStyle(paragraph).display === 'none') {
        paragraph.style.display = 'block';
    } else {
        paragraph.style.display = 'none';
    }
}

// const toggle = document.querySelector(".icon-down");
// const text = document.querySelector(".show");

// toggle.addEventListener("click",()=>{
//     if(text.style.display=="none"){
//         // text.classList.add("active");
//         text.style.display="block";
//     }
//     else{
//         // text.classList.remove("active");
//         text.style.display="none";
//     }
// });

// function toggleParagraph(paragraphId) {
//     // e.preventDefault();
//     var paragraph = document.getElementById(paragraphId);  
//     if (paragraph.style.display === 'none') {
//         paragraph.style.display = 'block';
//     } else {
//         paragraph.style.display = 'none';
//     }
//     // alert('ok')
// }
// function toggleParagraph(paragraphId) {
//     var paragraph = document.getElementById(paragraphId);  
//     if (paragraph.style.display === 'none' || window.getComputedStyle(paragraph).display === 'none') {
//         paragraph.style.display = 'block';
//     } else {
//         paragraph.style.display = 'none';
//     }
// }

// document.querySelectorAll('.text--row-1').forEach(function(div) {
//     div.addEventListener('click', function() {
//         toggleParagraph(this.querySelector('p').id);
//     });
// });
