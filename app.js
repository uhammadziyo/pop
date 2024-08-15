let num = +prompt('son kiriting')
let num2 = +prompt('ikkinchi sonni kiriting')
let amal = prompt (`bajarish kerak bo'lgan amalni tanlang
    1) + qo'shish
    2) - ayairish
    3) / bo'lish
    4) * ko'paytirish
    
    
    `)
    console.log(num);
    console.log(num2);
    console.log(amal);
    
    
    
if(amal == 1){
        alert(`${num} + ${num2} = ${num + num2}`)
}else if (amal == 3) {
    alert(`${num} / ${num2} = ${num / num2}`)
}else if (amal == 2) {
    alert(`${num} - ${num2} = ${num - num2}`)
}else if (amal == 4) {
    alert(`${num} * ${num2} = ${num * num2}`)
}
