function loadEvent() {
    
    const rootE = document.getElementById("root");

    rootE.insertAdjacentHTML("beforeend", `
        <div class="swiper-container gallery">

            <div class="swiper-wrapper"></div>

            <div class="swiper-pagination"></div>

            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>

        </div>
    `)

    const images = ["cars", "surfing", "teapot", "dogs", "agility"];

    //console.log(targetSwiper);
    const targetSwiper = document.querySelector("#root .swiper-container.gallery .swiper-wrapper");
    //console.log(targetSwiper);

    let name = "Barna Attila"
    /*console.log(`Hello 
    ${name}`); */

    for (const image of images) {
        //console.log(image);

        /*console.log(`Hello 
        ${image}.jpg
        world`); */
        const slide =`<div class="swiper-slide"><img src="png-files/${image}.png" alt="${image}" /></div>`;

        targetSwiper.insertAdjacentHTML("beforeend", slide)
    }
    
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

    });
    //console.log(targetSwiper);
}

window.addEventListener("load", loadEvent)