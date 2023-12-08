let btn = document.querySelectorAll('.btn');
let img = document.querySelectorAll('.slider ul li')

for (let i = 0; i < btn.length; i++) {
    
    btn[i].addEventListener('click', (e)=>{

        const imgActive = document.querySelector('.active');
        const curentIndex =[...img].indexOf(imgActive);
        const calc = btn[i].id == 'next' ? 1 : -1;
        let index = curentIndex + calc;

       if (curentIndex >= img.length - 1 && btn[i].id == 'next') index = 0;
       if (curentIndex == 0 && btn[i].id == 'prev' ) index = img.length -1;

        img[index].classList.add('active')
        imgActive.classList.remove('active')

    
    })
}