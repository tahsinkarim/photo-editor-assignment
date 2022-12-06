let result = document.querySelector(".result")
let img_result= document.querySelector(".img-result")
let img_modal= document.querySelector(".img-modal")
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

        cropped.src = imgSrc

        img_modal.classList.add('hidden')
    })
})

function selectFilter(number){
    console.log(number)
}
