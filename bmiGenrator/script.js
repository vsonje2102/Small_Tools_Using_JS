const form = document.querySelector('form')
form.addEventListener('submit', function(e){
    e.preventDefault()  // as this is form it get sun it with post or get methods to stop it preventDefault is used
    
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')
    console.log(height, weight)
    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = "Please provide a valid height"; 
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = "Please provide a valid weight";
    }
    else{
        let bmi = (weight / ((height * height) / 10000)).toFixed(2)
        result.innerHTML = `<span>Your BMI is ${bmi}</span>`
    }
})