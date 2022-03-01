function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/c3RUqhUH-/.model.json',modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error,results)
{
 if (error)
 {
     console.error(error);
 }
 else
{
    console.log(results);
    random_number_r=Math.floor(Math.random()*255)+1;
    random_number_g=Math.floor(Math.random()*255)+1;
    random_number_b=Math.floor(Math.random()*255)+1;

    document.getElementById("result_label").innerHTML='I can hear - '+results[0].label;
    document.getElementById("accuracy").innerHTML='Accuracy - '+(results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("accuracy").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    
    img_1=document.getElementById('Dog')
    img_2=document.getElementById('Cat')
    img_3=document.getElementById('Cow')
    img_4=document.getElementById('Lion')
    img_5=document.getElementById('Background Noise')

    if (results[0].label=="Barking")
    {
        img_1.src="dog gif.gif"

    }

    else if (results[0].label=="Meowing")
    {
        img_2.src="cat gif.gif"

    }

    else if (results[0].label=="Mooing")
    {
        img_3.src="cow gif.gif"
    } 

    else if (results[0].label=="Roaring") 
    {
        img_4.src="lion gif.gif"
        
    } 

    else
    {
        img_5.src=" Ear.gif"
    }
}
}


