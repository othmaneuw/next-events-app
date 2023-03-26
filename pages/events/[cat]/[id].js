import EventCard from '@/src/components/events/eventCard';
import Image from 'next/image';

const SingleEvent = ({ data }) => {
    console.log(data)
  return (
    <EventCard data={data} />
  );
};

export default SingleEvent;

export const getStaticPaths = async () => {
  const { allEvents } = await import("../../../data/data.json");
  const thePaths = allEvents.map((ev) => {
    return {
      params: { id: ev.id, cat: ev.city },
    };
  });
  return {
    paths: thePaths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { allEvents } = await import("../../../data/data.json");
  console.log(context);
  const { id } = context.params;
  const data = allEvents.find((ev) => id === ev.id);
  return {
    props: { data },
  };
};
