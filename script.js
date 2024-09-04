
var b1 = document.getElementById("button1");
var b2 = document.getElementById("button2");
var b3 = document.getElementById("button3");

var m1 =  document.getElementById("message1");
var m2 =  document.getElementById("message2");
var m3 =  document.getElementById("message3");

b1.addEventListener('mouseover',()=>{
    m1.style.display = 'block';

})
b2.addEventListener('mouseover',()=>{
    m2.style.display = 'block';

})
b3.addEventListener('mouseover',()=>{
    m3.style.display = 'block';

})

b1.addEventListener('mouseout',()=>{
    m1.style.display = 'none';

})
b2.addEventListener('mouseout',()=>{
    m2.style.display = 'none';

})
b3.addEventListener('mouseout',()=>{
    m3.style.display = 'none';

})

b1.addEventListener('dblclick',()=>{
    b1.remove()
    m1.style.display = 'none';

})
b2.addEventListener('dblclick',()=>{
    b2.remove()
    m2.style.display = 'none';
})
b3.addEventListener('dblclick',()=>{
    b3.remove()
    m3.style.display = 'none';
})


b1.addEventListener('click',()=>{
    b1.style.backgroundColor='lightblue';

})
b2.addEventListener('click',()=>{
    b2.style.backgroundColor='lightblue';

})
b3.addEventListener('click',()=>{
    b3.style.backgroundColor='lightblue';

})