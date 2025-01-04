const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(btn){
    console.log(btn);
    btn.addEventListener('click', function(e){
        console.log(e)
        console.log(e.currentTarget)
        if(e.target.id == 'Yellow'){
            body.style.backgroundColor = e.target.id
        }
        else if(e.target.id == 'Blue'){
            body.style.backgroundColor = 'blue'
        }
        else if(e.target.id == 'Red'){
            body.style.backgroundColor = 'red'
        }
        else if(e.target.id == 'Green'){
            body.style.backgroundColor = 'green'
        }

    })
})
