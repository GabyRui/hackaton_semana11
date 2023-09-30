let results = document.getElementById('results');
let botones = document.querySelectorAll('button');

botones.forEach((buttons) => {
    buttons.addEventListener('click', () => {
        if(buttons.id === '='){
            results.value = eval(results.value);
        }

        else if(buttons.id === 'c'){
            results.value = '';
        }

        else {
            results.value += buttons.id
        }
    })
})

