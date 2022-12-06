let result = document.querySelector(".result")
let img_result= document.querySelector(".img-result")
let img_modal= document.querySelector(".img-modal")
let modal2 = document.querySelector(".modal-2")
let img_w = document.querySelector(".img-w")
let img_h = document.querySelector(".img-h")
let options = document.querySelector(".options")
let save = document.querySelector(".save")
let cropped = document.querySelector(".cropped")
let dwn = document.querySelector(".download")
let upload = document.querySelector("#file-input")
let cropper = ""

upload.addEventListener('change',(e) => {
    console.log(e)

    modal2.classList.add('hidden')

    const reader = new FileReader()

    reader.onload = (e) => {
        if (e.target.result){
            let img = document.createElement("img")
            img.id = "image";
            img.src = e.target.result;

            result.innerHTML = "";

            result.appendChild(img)

            img_modal.classList.remove("hidden")
            save.classList.remove("hidden")
            options.classList.remove("hidden")


            cropper = new Cropper(img, {
                viewMode:2,
                aspectRatio: 0,
                movable: false,
                zoomable: false,
                rotatable: false,
                scalable: false,

            });
        }
    };
    reader.readAsDataURL(e.target.files[0])

    save.addEventListener('click', (e) =>{
        e.preventDefault


        let imgSrc = cropper
        .getCroppedCanvas({
            width: 300
        })
        .toDataURL();

        img_result.classList.remove('hidden')
        modal2.classList.remove('hidden')

        cropped.src = imgSrc

        img_modal.classList.add('hidden')
    })
})

const filter_img = document.querySelector('.filter-img')

function selectFilter(number){
    let bg = document.querySelector(".bg")

    bg.classList.remove('hidden')
    filter_img.src = `./asset/user_image_frame_${number}.png`
}

function unselectFilter(){
    let bg = document.querySelector(".bg")
    bg.classList.add('hidden')
}

function saveImage(){
    const box_2 = document.querySelector(".box-2")
    const home_result = document.querySelector(".home-result")

    home_result.appendChild(box_2)
}
