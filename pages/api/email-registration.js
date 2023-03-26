import path from 'path';
import fs from 'fs';

const buildPath = () =>{
   return path.join(process.cwd(),'data','data.json');
}

const extractData = (filePath) =>{
    let data = fs.readFileSync(filePath);
    data = JSON.parse(data);
    return data;
}

export default function handler(req,res) {
    const {method} = req;
    const {email,eventID} = req.body;
    //console.log(method);
    //console.log(email,eventID);
    //console.log(buildPath());
    if(!email.includes('@') || !email){
        return res.status(401).json({error:'email not valid'});
    }
    const filePath = buildPath();
    const {events_categories,allEvents} = extractData(filePath);
    console.log(allEvents);

    if(!allEvents){
        return res.status(404).json({message : 'No Data Was Found'});
    }
     
    if(method === 'POST'){
        //Here goes our logic
        const newAllEvents = allEvents.map(ev => {
            if(ev.id === eventID){
                if(ev.emails_registered.includes(email)){
                    res.status(201).json({message : 'This email has already been registred'})
                    return ev;
                }else{
                    return{
                        ...ev,emails_registered : [...ev.emails_registered,email]
                    }
                }
            }else{
                return ev;
            }
        })
        fs.writeFileSync(filePath,JSON.stringify({
            events_categories,
            allEvents:newAllEvents,
        }));
        res.status(201).json({message : `You have been registred for the event : ${eventID} with the email ${email}`})
    }
}