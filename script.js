const counters = document.querySelectorAll('.counter')

counters.forEach((counter)=>{
        counter.innerText ='0'

              
        const updateCounter = () =>{
            const target = +counter.getAttribute('data-target')
            let count = +counter.innerText

            let increment = target/200
            if(count < target){
                counter.innerText = `${Math.ceil( (count +increment))}`

                setTimeout(updateCounter ,2)
            }else{
                counter.innerText=target
            }
            // console.log(typeof(target));
        }
        updateCounter()

})