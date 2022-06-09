









let value = document.getElementById("value")

const decrease = document.querySelector(".decrease")
const reset = document.querySelector(".reset")
const increase = document.querySelector(".increase")
// SET INITIAL COUNT
 let count = 0
function countColor(){
    if (count < 0){
        value.style.color = "red"
     
    }else if( count > 0){
        value.style.color = "green"
    }else{
        value.style.color = "#222"
    }
}
 

 decrease.addEventListener("click", function(){
     count--
    value.textContent = count
    countColor()
 })

 increase.addEventListener("click", function(){
     count++
    value.textContent = count
    countColor()
})

reset.addEventListener("click", function(){
    count = 0
    value.textContent = count
    countColor()
})