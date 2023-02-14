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

// const delayedColorChange = (newColor, delay) => {
//     setTimeout(() => {
//             document.body.style.backgroundColor = newColor }, delay)
// }

// delayedColorChange('olive', 2000)
// delayedColorChange('red', 4000)

// Better with functions

const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
        }, delay)
}

delayedColorChange('red', 1000, () => {
    delayedColorChange('orange', 1000, () => {
        delayedColorChange('yellow', 1000)
    })
})