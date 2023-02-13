// Bad way:

// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'green';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'blue';
//         }, 1000)
//     }, 2000)

// }, 2000 )

// With function:

const delayedColorChange = (newColor, delay) => {
    setTimeout(() => {
            document.body.style.backgroundColor = newColor }, delay)
}

delayedColorChange('olive', 2000)
delayedColorChange('red', 4000)