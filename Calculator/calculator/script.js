let but = document.querySelectorAll('.but');
let wind = document.querySelector('.window')


 class Calculetor{
    constructor(){
       
    }

    static sum(fN,sN,ev){
    

        switch (ev) {
            case '+':
                return `${fN} + ${sN} = ${fN + sN}`
                break;
                case '-':
                    return `${fN} - ${sN} = ${fN - sN}`
                    break;
                    case '*':
                        return `${fN} * ${sN} = ${fN * sN}`
                        break;
                        case '/':
                            return `${fN} / ${sN} = ${fN / sN}`
                            break;
        
            default:
                
                break;
        }
    }

    


}





but.forEach(function(item){
    item.addEventListener('click', function(e){
        let num = e.target.value;
        
        

        console.log(item);
        wind.innerHTML += num;


        

    })
})

let equa = document.querySelector('.equa')

equa.addEventListener('click' ,function(){
    wind.innerHTML = `${wind.innerText} = ${eval(wind.innerText)}`
})



