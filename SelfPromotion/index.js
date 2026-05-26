const headImage = document.querySelector('.headImage');
const heading = document.querySelector('.heading');
const summary = document.querySelector('.summary');

headImage.addEventListener('mouseover', (e) =>{
    headImage.style.display = "none";
    heading.style.color = "blue";
    summary.style.display = "block"
})
headImage.addEventListener('mouseleave', (e) =>{
    setTimeout(()=> {headImage.style.display = "flex";
        heading.style.color = "black";
        summary.style.display = "none"
    }, 8000 
    )
    })