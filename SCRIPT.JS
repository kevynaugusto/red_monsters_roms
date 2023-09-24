let count = 1;
document.getElementById("radio2").checked = true;

setInterval( function(){
    nextimage();
}, 5550)

function nextimage(){
    count++;
    if(count>5){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}