const KINGS = [
    {name:'atanagildo',price:20},
    {name:'ataulfo',price:20},
    {name:'ervigio',price:20},
    {name:'leogivildo',price:20},
    {name:'recesvinto',price:20},
    {name:'sisebuto',price:20},
    {name:'teodorico',price:20},
]

document.querySelector('body').insertAdjacentHTML("afterbegin",`<div class="container"></div>`)

for (const king of KINGS) {
    document.querySelector('.container').insertAdjacentHTML('beforeend',`   <div class="container__king">
    <img src="img/rey_${king.name}.png" >
    <span class="name">${king.name}</span>
</div>`)
}
