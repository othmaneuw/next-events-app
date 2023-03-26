import Link from "next/link";
import Image from "next/image";

const CatEvent = ({data,cityName}) => {
  return (
    <div className="cat_events" >
      <h1>Events in {cityName}</h1>
      <div className="content">
        {data.map((ev) => (
          <Link className="card" key={ev.id} href={`/events/${ev.city}/${ev.id}`} passHref>
            <Image src={ev.image} alt={ev.title} width={300} height={300} />
            <h2>{ev.title}</h2>
            <p> {ev.description} </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CatEvent;
