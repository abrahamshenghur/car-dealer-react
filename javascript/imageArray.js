// var images = [
//     "./images/mazda-rx8-2009-06548/image-1.jpg",
//     "./images/mazda-rx8-2009-06548/image-2.jpg",
//     "./images/mazda-rx8-2009-06548/image-3.jpg",
//     "./images/mazda-rx8-2009-06548/image-4.jpg",
//     "./images/mazda-rx8-2009-06548/image-5.jpg",
//     "./images/mazda-rx8-2009-06548/image-6.jpg",
//     "./images/mazda-rx8-2009-06548/image-7.jpg",
//     "./images/mazda-rx8-2009-06548/image-8.jpg",
//     ];

// var index = 0;

// function makeImage() {
//    var img = document.createElement('img')
//    img.src = images[index];
//    document.getElementById('content').appendChild(img);
// }

// function nextImage(){
//    var img = document.getElementById('content').getElementsByTagName('img')[0]
//    index++;
//    index = index % images.length; 
//    img.src = images[index];
// }

//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------


// var imgArray = new Array();;

// imgArray[0] = new Image();
// imgArray[0].src = './images/mazda-rx8-2009-06548/image-1.jpg';

// imgArray[1] = new Image();
// imgArray[1].src = './images/mazda-rx8-2009-06548/image-2.jpg';

// imgArray[2] = new Image();
// imgArray[2].src = './images/mazda-rx8-2009-06548/image-3.jpg';

// imgArray[3] = new Image();
// imgArray[3].src = './images/mazda-rx8-2009-06548/image-4.jpg';

// imgArray[4] = new Image();
// imgArray[4].src = './images/mazda-rx8-2009-06548/image-5.jpg';


//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------


// var imgArray = new Array(41);
// const folder = "images/mazda-rx8-2009-06548/image-";

// for (i=0; i<imgArray.length; i++) {
//     imgArray[i] = new Image;
//     imgArray[i].src = folder + [i] + '.jpg';

// }

// imgArray[0] = new Image();
// imgArray[0].src = './images/mazda-rx8-2009-06548/image-1.jpg';

// imgArray[1] = new Image();
// imgArray[1].src = './images/mazda-rx8-2009-06548/image-2.jpg';

// imgArray[2] = new Image();
// imgArray[2].src = './images/mazda-rx8-2009-06548/image-3.jpg';

// imgArray[3] = new Image();
// imgArray[3].src = './images/mazda-rx8-2009-06548/image-4.jpg';

// imgArray[4] = new Image();
// imgArray[4].src = './images/mazda-rx8-2009-06548/image-5.jpg';

// function nextImage(){
//     var img = document.getElementById("mainImage");
//     for (var i = 0; i < imgArray.length; i++) {
//         if (imgArray[i].src == img.src){
//             if(i === imgArray.length){
//                 document.getElementById("mainImage").src = imgArray[0].src;
//                 break;
//             }
//             document.getElementById("mainImage").src = imgArray[i+1].src;
//             break;
//         }
//     }
// }

// function previousImage(){
//     var img = document.getElementById("mainImage");
//     for (var i = imgArray.length-1; i >=0; i--) {
//         if (imgArray[i].src == img.src){
//             if (i === imgArray.length) {
//                 document.getElementById("mainImage").src = imgArray[4].src;
//                 break;
//             }
//             document.getElementById("mainImage").src = imgArray[i-1].src;
//             break;
//         }
//     }
// }

// pix=new Array(10);
// for (i=0;i<10;i++){
//     pix[i]=new Image;
//     pix[i].src="r/r"+(i+1)+".jpg";
// }

/*
    [REF]: 

    Arrays of Pictures
    http://srufaculty.sru.edu/david.dailey/javascript/imagearray.htm

    avaScript Array of Images
    https://www.delftstack.com/howto/javascript/javascript-array-of-images/


    Using javascript, load images names from a folder to an array 
    https://stackoverflow.com/questions/53557220/using-javascript-load-images-names-from-a-folder-to-an-array
    
    PHP Tutorial: Automatic Image Gallery [part 01] 
    https://www.youtube.com/watch?v=aTnayM3-VNk&ab_channel=betterphp
    
    How to Download and Install Node JS | NPM on Windows | Localhost 
    https://www.fullstacktutorials.com/install-nodejs-windows-localhost-18.html


    FileList https://developer.mozilla.org/en-US/docs/Web/API/FileList



*/