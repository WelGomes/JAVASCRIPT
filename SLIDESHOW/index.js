'use strict';

const images = [
    {'id': '1', 'url': 'chrono.jpg'},
    {'id': '2', 'url': 'inuyasha.jpg'},
    {'id': '3', 'url': 'ippo.jpg'},
    {'id': '4', 'url': 'tenchi.jpg'},
    {'id': '5', 'url': 'tenjhotenge.jpg'},
    {'id': '6', 'url': 'yuyuhakusho.jpg'}
]

const containerItems = document.querySelector('#container-items')


const loadImages = (images, container) => {
    images.forEach(image => {
        container.innerHTML += `
        <div class='item'>
            <img src='${image.url}'
        </div>
        `
    })
}

loadImages(images, containerItems)

let items = document.querySelectorAll('.item')

const previous = () =>{
    const lastItem = items[items.length - 1]
    containerItems.insertBefore(lastItem, items[0])
    items = document.querySelectorAll('.item')
}

const next = () => {
    containerItems.appendChild(items[0])
    items = document.querySelectorAll('.item')
}

document.querySelector('#previous').addEventListener('click', previous)
document.querySelector('#next').addEventListener('click', next)