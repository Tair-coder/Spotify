const img1 = document.querySelector('.img1')
const img2 = document.querySelector('.img2')
const img3 = document.querySelector('.img3')


img1.addEventListener('mouseover',()=> {
    img1.src = 'img/Twitter-after.svg'
})
img1.addEventListener('mouseleave',()=> {
    img1.src = 'img/Twitter.svg'
})
img2.addEventListener('mouseover',()=> {
    img2.src = 'img/Facebook-after.svg'
})
img2.addEventListener('mouseleave',()=> {
    img2.src = 'img/Facebook.svg'
})
img3.addEventListener('mouseover',()=> {
    img3.src = 'img/Instagram-after.svg'
})
img3.addEventListener('mouseleave',()=> {
    img3.src = 'img/Instagram.svg'
})