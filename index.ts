const form = document.querySelector('form');
const input = document.querySelector('input');
const button = document.querySelector('button');
const warning = document.querySelector('#warning')

input?.addEventListener('input', (event: Event) => {
    event.preventDefault();
    validateInput(input.value.trim())
})

function validateInput(userInput: any) {
    if (!userInput) {
        warning!.innerHTML = ''
        return
    }
    if (+userInput && +userInput > 10) {
        button!.disabled = false;
        button?.classList.remove('disabled');
        warning!.innerHTML = ''
    }
    else {
        button!.disabled = true;
        button?.classList.add('disabled');
        warning!.innerHTML = '<span>Acceptable input: numbers >10</span/>'

    }
}
form?.addEventListener('submit', (event: SubmitEvent) => {
    event.preventDefault();
    const formData = new FormData(form);
    const numberValue = formData.get('userInput') as string;
    console.log('Form submitted with user input: ', numberValue)
})