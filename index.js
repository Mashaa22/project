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
                    fDetails(albums, albumSetup)
                })
            });
        })
}
document.addEventListener('DOMContentLoaded', loadAlbums, )
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