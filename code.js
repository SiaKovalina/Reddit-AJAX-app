function getImages() {
    
    var category = document.getElementById('category').value || 'cats';

    var limit = document.getElementById('limit').value || '100';

    var xhr = new XMLHttpRequest();

    xhr.open('GET', `https://www.reddit.com/r/pics/search.json?q=${category}&limit=${limit}`, true);

    xhr.onload = function () {
        if (this.status === 200) {
            var response = JSON.parse(this.responseText);
            var images = document.getElementById('images');
            console.log(response); 

            response.data.children.forEach(function (dataObj) {
                if (dataObj.data.preview) {
                var imgUrl = dataObj.data.preview.images[0].source.url;
                console.log(imgUrl);
                images.innerHTML += `<img src="${imgUrl}" alt="cat image">`
                } else {
                    console.log('Something happened with this image');
                }
            });
        }
    }

    xhr.send();

    xhr.onerror = function () {
        concsole.log('Error: ' + xhr.statusText);
    }
}
