import Image from 'next/image';

const Events = ({data}) => {
  return (
    <div>
        <h1>Events Page</h1>
      <div>
        {data.map(ev=>(
            <a href={`/events/${ev.id}`}>
               <Image src={ev.image} alt={ev.title} width={300} height={300} />
               <h2>{ev.title}</h2>
            </a>
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = async () =>{
    const {events_categories} = await import('../../data/data.json');
    console.log(events_categories,events_categories.length);
    return {
        props : {
            data : events_categories
        }
    }
}

export default Events;
