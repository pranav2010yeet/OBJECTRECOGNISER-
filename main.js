Webcam.set({
    width: 300,
    height: 300,
    image_format:"jpeg",
    jpeg_quality: 90
});

Webcam.attach( "#camera")

function capture(){

Webcam.snap(function(selfie){

    document.getElementById("photo").innerHTML=`<img  src=${selfie}  id='capture_photo'>`

})

}



console.log("ml5version= "+ml5.version)
 var classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/EoBolG6W9/model.json" , loaded)



 function loaded(){
     console.log(" model loaded ")
 }

 function recognise(){
     inputimage=document.getElementById("capture_photo")
     classifier.classify(inputimage, getresult)
 }

 function getresult(error,results){
     if (error){
         console.log(error)
     }
     else{
         console.log(results)

         objectname=results[0].label
         accuracy=results[0].confidence.toFixed(3)

         document.getElementById("object_result").innerHTML=objectname
         document.getElementById("Accuracy_result").innerHTML=accuracy
     }
 }

