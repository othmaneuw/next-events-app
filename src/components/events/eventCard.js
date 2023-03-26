import Image from "next/image";
import { useRef,useState } from "react";
import { useRouter } from "next/router";

const EventCard = ({ data }) => {
  const [message,setMessage] = useState('');
  const inputRef = useRef(null);
  const router = useRouter();
  const onSubmit =async (event) => {
    event.preventDefault();
    const emailValue = inputRef.current.value;
    const eventID = router.query.id;
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!emailValue.match(emailRegex)){
         setMessage('Please enter a valid email !');
    }
    //console.log(emailValue,eventID)
    try {
        const response = await fetch('/api/email-registration',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({email : emailValue,eventID})
        });
        if(!response.ok) throw new Error('Error hh '+response.status);
        const data = await response.json();
        setMessage(data.message);
        inputRef.current.value = '';
      //Fetching the data with post method
    } catch (error) {
      console.log("Error", error);
    }
  };
  return (
    <>
      <h1>{data.title}</h1>
      <Image src={data.image} width={1000} height={400} alt={data.id} />
      <p> {data.description} </p>
      <form onSubmit={onSubmit} className="form">
        <label>Get registred for this event !</label>
        <input
          type="text"
          id="email"
          ref={inputRef}
          placeholder="Please insert your email here"
        />
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </>
  );
};

export default EventCard;
