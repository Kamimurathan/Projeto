const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const buttonSumAll = document.querySelector('.sum-all')
const buttonFilterAll = document.querySelector('.filter-all')

function format(value) {

    const valorFormatado = new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(value)

    return valorFormatado

}

function showAll(productsArray) {

    myLi = ''

    productsArray.forEach(product => {

        myLi += `
            <li> 
                <img src=${product.src}>
                <p>${product.name}</p>
                <p class="item-price">${format(product.price)}</p>
            </li>
        `

    })

    list.innerHTML = myLi

}

function mapAllItems() {

    const newPrices = menuOptions.map((product) => ({

        ...product,
        price: product.price * 0.9,

    }))

    showAll(newPrices)

}

function sumAllItems() {

    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = `
    <li>
        <p> A soma de todos os itens do menu é: ${format(totalValue)} </p>
    </li>
    `

}

function filterAllItems() {

    const filterItems = menuOptions.filter(product => product.vegan)

    showAll(filterItems)

}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
buttonSumAll.addEventListener('click', sumAllItems)
buttonFilterAll.addEventListener('click', filterAllItems)