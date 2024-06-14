const express=require("express");

const port=3000;

const app=express();

const users=[{
    name:'John',
    kidneys:[{
        healthy:false
    }]
}];

app.use(express.json());

//TO print the number of kidney, healthy kidneys and unhealthy kidneys.     GET request as you are asking for an information from the browser.
app.get('/', function(req,res){
    const JohnKidney=users[0].kidneys;      //Adding all the kidneys to "Johnkidney" variable
    console.log(JohnKidney);                //Printing it on the console
    const NumberOfKidneys=JohnKidney.length;    //taking the number of healthy or unhealthy kidney on "NumberOfKidneys" variable
    let NumberOfHealthyKidneys=0;      
    for (let i=0;i<NumberOfKidneys;i++){
        if(JohnKidney[i].healthy){      //Here, if the healthy is true then only it will go inside the curly brackets or braces and increase the number of healthy kidney by 1;
            NumberOfHealthyKidneys=NumberOfHealthyKidneys+1;
        }
    }

    const NumberOfUnhealthyKidneys=NumberOfKidneys-NumberOfHealthyKidneys;      //We will find the number of unhealthy kidney by minusing healthy kidney from total number of kidneys
    res.json({          //Here, we are sending the data to the browser 
        NumberOfKidneys,
        NumberOfHealthyKidneys,
        NumberOfUnhealthyKidneys
    })
})

//To add a new kidney with false or true based on the user's post request in the JSON file. POST request as user is sending some data.
app.post('/', function(req,res){
    const IsHealthy=req.body.IsHealthy;     //asking user to send a body in JSON format;
    users[0].kidneys.push({     //Adding the body in the healthy attribute as true or false as per the user (IsHealthy:true);
        healthy:IsHealthy
    })

    //Printing the message after it "Done!"
    res.json({
        msg:"done!"
    })
})


//To make all the kidneys Healthy. PUT request as it is requesting to make all the kidney healthy
app.put('/', function(req,res){
    for(let i = 0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true;
    }

    res.json({     //we have to send this as a message to show that the work is done.
        msg:"Updated the list."
    })
})

function IsThereAtleastOneUnhealthyKidney(){
    let unhealthyKidney=false;
    for(let i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            unhealthyKidney=true;
            break;
        }
    }
    return unhealthyKidney;
}

//To remove all the unhealthy kidney, DELETE is used to delete or remove data.
app.delete("/", function(req,res){
    if(IsThereAtleastOneUnhealthyKidney()){
    const NewKidney = [];
        for(let i=0; i<users[0].kidneys.length;i++){
            if(users[0].kidneys[i].healthy){
                NewKidney.push({
                    healthy:true
                })
            }
        }
        users[0].kidneys=NewKidney;
        res.json({
            message:"Done!"
        })
    }else{
        res.status(411).json({
            message:"You don't have any unhealthy kidney."
        })
    }
    
})


app.listen(port);