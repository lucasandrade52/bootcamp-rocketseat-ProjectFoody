const recipes = {
    burger: {
        name: 'Triplo bacon burguer',
        chef: 'por Jorge Relato',
        image: './layouts/assets/burger.png'
    },
    pizza: {
        name: 'Pizza 4 Estações',
        chef: 'por Fabiana Melo',
        image: './layouts/assets/pizza.png'
    },
    spaguetti: {
        name: 'Espaguete ao Alho',
        chef: 'por Julia Kinoto',
        image: './layouts/assets/espaguete.png'
    },
    lasanha: {
        name: 'Lasanha mac n’ cheese',
        chef: 'por Juliano Vieira',
        image: './layouts/assets/lasanha.png'
    },
    doce: {
        name: 'Docinhos pão-do-céu',
        chef: 'por Ricardo Golvea',
        image: './layouts/assets/doce.png'
    },
    wings: {
        name: 'Asinhas de frango ao barbecue',
        chef: 'por Vania Steroski',
        image: './layouts/assets/asinhas.png'
    }
}

const cards = document.querySelectorAll('.card')

cards.forEach(card => {

    const info = recipes[card.id]

    card.addEventListener('click', function() {
        const modal = document.querySelector('.modal')
        modal.style.display = 'flex';

        modal.innerHTML = `
        <div class="modal-content">
            <div class="card">
                <img src= "${info.image}" alt="image of ${info.name}">
                <h3>${info.name}</h3>
                <p>${info.chef}</p>
            </div>
            <div class="close"><span><img src="https://image.flaticon.com/icons/svg/753/753345.svg"></span>Fechar Modal</div>
        </div>
        `
    })
})

document.addEventListener('click', function() {
    if (event.target.classList.contains('close')) {
        document.querySelector('.modal').style.display = 'none'
    }
})
