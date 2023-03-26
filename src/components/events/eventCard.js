import Image from "next/image";

const EventCard = ({ data }) => {
    const onSubmit = () =>{}
  return (
    <>
      <h1>{data.title}</h1>
      <Image src={data.image} width={1000} height={400} alt={data.id} />
      <p> {data.description} </p>
      <form onSubmit={onSubmit} className="form" >
        <label>Get registred for this event !</label>
        <input type="email"
               id="email" 
               placeholder="Please insert your email here" />
        <button type='button'>Submit</button>
      </form>
    </>
  );
};

export default EventCard;
