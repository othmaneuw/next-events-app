import Link from "next/link";
import Image from "next/image";

export const HomePage = ({ data }) => {
  return (
    <div className="home_body">
      {data.map((ev, index) => (
        <Link className="card" key={index} href={`/events/${ev.id}`}>
          <Image src={ev.image} alt={ev.title} width={400} height={300} />
          <div className="content">
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
