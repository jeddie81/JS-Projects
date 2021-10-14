const loadText = document.querySelector('.loadingText')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 30)

function blurring () {
    load++

    if (load > 99){
        clearInterval(int)
    }
    

    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
}

const scale = (num, in_Min, in_Max, out_Min, out_Max) => {
    return (num - in_Min) * (out_Max - out_Min) / (in_Max - in_Min) + outMin;
}