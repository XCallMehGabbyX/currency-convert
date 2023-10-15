let btn = document.getElementById("convert");

btn.addEventListener('click', function(){
    let curr_1 = document.getElementById("first-amt");
    let curr_1_input = curr_1.value;
    
    if (!isNaN(curr_1_input)) {
        let calc = Number(curr_1_input) * 770.01
        let output = (document.getElementById("output").innerHTML = calc);
    } 
});


