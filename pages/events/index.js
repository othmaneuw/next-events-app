import Image from 'next/image';
import Link from 'next/link';
import { EventsPage } from '@/src/components/events/eventsPage';

const Events = ({data}) => {
  return (
    <EventsPage data={data} />
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
