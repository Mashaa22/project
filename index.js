function loadAlbums() {

    const Albums = document.querySelector('#albumList')
    
    const albumSetup = document.querySelector('#albumSetup')
    
    fetch('http://localhost:3000/albums')
    .then((response) => response.json())
    .then((data) => (data, albumSetup))
    
    
    fetch('http://localhost:3000/albums')
    .then(resp => resp.json())
    .then(data => {