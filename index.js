function loadAlbums() {

    const Albums = document.querySelector('#albumList')
    
    const albumSetup = document.querySelector('#albumSetup')
    
    fetch('http://localhost:3000/albums')
    .then((response) => response.json())
    .then((data) => (data, albumSetup))
    
    
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

document.addEventListener('DOMContentLoaded', loadAlbums,)
function fDetails(data, addData){
    const title = document.createElement('h2')
    title.innerText = data.title
    addData.appendChild(title)
    
    const poster = document.createElement('img')
    poster.src = data.poster
    addData.appendChild(poster)
    
    const description = document.createElement('p')
    description.innerText = data.description
    addData.appendChild(description)

    const purchaseAlbum = document.createElement('button')
purchaseAlbum.innerText = 'Purchase'
purchaseAlbum.addEventListener('click', () => {
    alert('Thank you for you purchase')
 })

addData.appendChild(purchaseAlbum)
 

    const likeButton = document.createElement('button')
    likeButton.innerHTML = `likes <span id="like_value">0</span>`
    addData.appendChild(likeButton)
    likeButton.addEventListener('click', () => {
        let likeSpan = document.getElementById
            ("like_value")
        let likeValue = parseInt(likeSpan.innerText)
        let sumLike = 1
        sumLike = sumLike + likeValue
        likeSpan.innerText = sumLike
    });

    // let comm = function App() {
    //     return (
    //         <div className="main-container">
    //             <div>
    //                 <h3>Comment</h3>
    //                 <textarea />
    //                 <button>Submit</button>
    //             </div>
    //         </div>
    //     )
    // }

    // export default comm;
    
    const container = document.createElement('section')
    container.className = 'container'
    const commentdiv = document.createElement('div')
    commentdiv.className = 'styleContainer'
    container.appendChild(commentdiv)
    const cHeader = document.createElement('h3')
    cHeader.innerHTML = 'comment'
    commentdiv.appendChild(cHeader )
    const textArea = document.createElement('textarea')
    commentdiv.appendChild(textArea)
    const cButton = document.createElement('button')
    cButton.innerHTML = 'Submit'
    commentdiv.appendChild(cButton)
    addData.appendChild(container)



    // const documentFragment = document.createDocumentFragment();
    // documentFragment.appendChild(container);
    // container.appendChild(cHeader);
    // container.appendChild(textArea);
    // container.appendChild(cButton);
    // addData.appendChild(documentFragment)

    // addData.append(container, cHeader, textArea, cButton)

//     container.innerHTML+= cHeader.outerHTML + textArea.outerHTML + cButton.outerHTML ;
// listElement.appendChild(listItem);
    
} 
