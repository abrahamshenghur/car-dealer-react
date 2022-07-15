let data = {
    "response": {
        "docs": [
            {
                "image_url": ["https:\/\/raw.githubusercontent.com\/mlimapch\/images\/master\/nyc01.jpg"],
                "title": "NYC image No. 1"
            }, 
            {
                "image_url": ["https:\/\/raw.githubusercontent.com\/mlimapch\/images\/master\/nyc02.jpg"],
                "title": "NYC image No. 2"
            }, 
            {
                "image_url": ["https:\/\/raw.githubusercontent.com\/mlimapch\/images\/master\/nyc03.jpg"],
                "title": "NYC image No. 3"
            }
        ]
    }
}

let target = document.querySelector('#target');

data = data.response.docs;

data.forEach((val, key) => {  
    target.innerHTML += `<div class="image-list"><img src ="${val.image_url}" class="image-styles" /><p class="image-title">${val.title}</p></div>`;
});