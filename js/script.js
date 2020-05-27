insertImage();
insertImage();

document.addEventListener("DOMContentLoaded", () => {
    let observer = new IntersectionObserver(insertImage,{
        root : null,
        rootMargin : "0px",
        threshold : 0.1
    })

    let footer = document.querySelector("footer");
    observer.observe(footer);
})




function trigger(entries){
    
    if (entries[0].isIntersecting) {
        insertImage();
    }
}


function insertImage(){
    //console.log("intersecting");
    const URL = "https://api.giphy.com/v1/gifs/random?api_key=afbs0gTjlIUyimEkjgPpJsj5nfqj3he3"
    let div = document.createElement("div");
    fetch(URL)
        .then(response => response.json())
        .then(content => {
            let figure1 = document.createElement("figure");
            let img1 = document.createElement("img");
            img1.src = content.data.images.original.url;
            figure1.appendChild(img1)
            div.appendChild(figure1)
        })
        .catch(err=>{
            console.log(err)
        })
    fetch(URL)
        .then(response => response.json())
        .then(content => {
        let figure2 = document.createElement("figure");
            let img2 = document.createElement("img");
            img2.src = content.data.images.original.url;
            figure2.appendChild(img2)
            div.appendChild(figure2)
        })
        document.querySelector("main").appendChild(div);
}
//