const starEl = document.querySelectorAll(".fa-star");
const emoEl = document.querySelectorAll(".fa-regular");

const colorsArray = ["red", "orange", "lightblue", "lightgreen", "green"];

updateRating(0);

starEl.forEach((starEl, index)=>{
    starEl.addEventListener("click", ()=>{
        updateRating(index)
    });
});


function updateRating(index){
    starEl.forEach((starEl, idx)=>{
       if (idx < index + 1){
        starEl.classList.add("active")
       }else{
        starEl.classList.remove("active")
       }
    });
    

    emoEl.forEach(emoEl =>{
        emoEl.style.transform = `translateX(-${index * 50}px)`;
        emoEl.style.color = colorsArray[index]
    });

}