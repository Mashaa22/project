function loadAlbums() {

    const Albums = document.querySelector('#albumList')
    
    const albumSetup = document.querySelector('#albumSetup')
     
    
    fetch('http://localhost:3000/albums')
    .then(resp => resp.json())
        .then(data => {
        
            (data).forEach(albums => {

                const aTitle = document.createElement('p')
                const albumList = document.createElement('li')
                
                aTitle.innerText = albums.title
                albumList.appendChild(aTitle)
                Albums.appendChild(albumList)
        
                albumList.addEventListener('click', () =>{
                    albumSetup.innerHTML = ''
                    fDetails(albums, albumSetup,)
                })
            });
        })
}


document.addEventListener(
    'DOMContentLoaded', loadAlbums,)
    
function fDetails(data, addData){
    const title = document.createElement('h2')
    title.innerText = data.title
    addData.appendChild(title)
    
    const poster = document.createElement('img')
    poster.className = 'img-container'
    poster.src = data.poster
    addData.appendChild(poster)
    
    const description = document.createElement('p')
    description.className = 'album-name'
    description.innerText = `By : ${data.description}`
    addData.appendChild(description)

    const purchaseAlbum = document.createElement('button')
    purchaseAlbum.className = 'btn'
purchaseAlbum.innerText = 'Purchase'
purchaseAlbum.addEventListener('click', () => {
    alert('Thank you for you purchase')
 })

addData.appendChild(purchaseAlbum)
 

    const likeButton = document.createElement('button')
    likeButton.innerHTML = `likes <span id="like_value">0</span>`
    addData.appendChild(likeButton)
    likeButton.className = 'btn'
    likeButton.addEventListener('click', () => {
        let likeSpan = document.getElementById
            ("like_value")
        let likeValue = parseInt(likeSpan.innerText)
        let sumLike = 1
        sumLike = sumLike + likeValue
        likeSpan.innerText = sumLike
    });
    
    const container  = document.createElement('section')
    container.className = 'comment-container'

    const commentdiv = document.createElement('div')
    commentdiv.className = 'style-Container'
    container.appendChild(commentdiv)


    const cHeader = document.createElement('h3')
    cHeader.innerHTML = 'comment'
    cHeader.className = 'comment-header'
    commentdiv.appendChild(cHeader)
    

    const textArea = document.createElement('textarea')
    textArea.className = 'text-area'
    textArea.value = ''
    commentdiv.appendChild(textArea)

    const cButton = document.createElement('button')
    cButton.className = 'btn'
    cButton.innerHTML = 'Submit'
    commentdiv.appendChild(cButton)

    const comment_box = document.createElement('ul')
    comment_box.className = 'comment-box'
    commentdiv.appendChild(comment_box)

    addData.appendChild(container)

    cButton.addEventListener("click", () => {
        let commentBox = textArea.value
        var li = document.createElement('li')
        var text = document.createTextNode(commentBox)
        li.appendChild(text)
        comment_box.appendChild(li)
        li.scrollIntoView({behavior: "smooth"});;
    })     
} 

let myImage = document.getElementById('img');
myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === "images/release2.webp")
    {
        myImage.setAttribute('src', "images/release3.jpg")
    } else {
        myImage.setAttribute('src', "images/release2.webp")
    } 
}