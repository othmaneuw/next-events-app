import CatEvent from '@/src/components/events/catEvent';
import  Image from 'next/image';
import Link from 'next/link';


const EventCategory = ({data,cityName}) =>{
    return (
        <CatEvent data={data} cityName={cityName} />
    );
}

export const getStaticPaths = async () =>{
    const {events_categories} = await import('../../../data/data.json');
    const thePaths = events_categories.map(ev => {
        return {
            params : {cat : ev.id}
        }
    });
    return {
        paths : thePaths,
        fallback : false
    }
} 

export const getStaticProps = async (context) =>{
    console.log(context);
    const id = context.params.cat;
    const {allEvents} = await import('../../../data/data.json');
    const data = allEvents.filter(ev => ev.city === id);
    console.log(data);
    return {
        props : {data,cityName:id}
    }
}

export default EventCategory;