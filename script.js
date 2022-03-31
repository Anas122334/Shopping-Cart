var btn=document.querySelectorAll('a')
var count=document.getElementById('count')
var ion=document.getElementById('icon')

var num=0
btn.forEach((ele)=>{
    ele.addEventListener('click',(e)=>{
        num++
        count.innerHTML=num

        var parent=e.target.parentElement.parentElement
        var img=parent.querySelector(".image").src
        var data=parent.querySelector(".card-title").innerText
        var price=parent.querySelector(".price").innerText
        var obj={img ,data,price}
        var inf=localStorage.getItem("item")
        if(inf){
            inf=JSON.parse(inf)
         inf.push(obj)
            localStorage.setItem("item",JSON.stringify(inf))
            
        }
        else{  
        localStorage.setItem("item",JSON.stringify([obj]))
        }

       rtb()

    
        
    
    })
})

function rtb(){
    var inf=localStorage.getItem("item")
    inf=JSON.parse(inf)
    var show=document.getElementById("showme")
    var block="";
    inf.map((element,i)=>{
        block+=`<div style="display:flex;  justify-content:space-around; font-weight:bold; margin-top:10px; border:2px solid red">
                    <img src=${element.img} style="  height:80px; width:80px;  ">
                    <p style="width: 110px;">${element.data}</p>
                   
                    <p>${element.price}  <i class="fas fa-times ml-3 text-white bg-danger rounded-circle p-1" id="del" onclick="del(${i})"></i></p>
                    input type="" style="width:70px; height=10px; ">
                    </div>`
    })
    show.innerHTML=block
   

}

  function del(i){
      var inf=localStorage.getItem('item')
      inf =JSON.parse(inf)
      inf.splice (i,1)
      localStorage.setItem('item',JSON.stringify(inf))
      num--
      count.innerHTML=num
      rtb()
  }

ion.addEventListener('click',()=>{
    var main=document.querySelector('.main')
    main.classList.toggle("shayan")
    // main.style.right='0%'
    main.style.transitionDuration='0.8s'
    main.style.visibility='visible'
})


