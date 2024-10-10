type ActorCardType = {
  name: string;
  role: string;
};

const ActorCard = ({ name, role }: ActorCardType) => {
  return (
    <div className='bg-[var(--color-actor-background)] rounded-[0.5rem] p-[0.75rem] flex flex-col max-w-fit'>
      <span className='cursor-pointer text-[var(--color-blue-gray)] whitespace-nowrap overflow-hidden text-elipsis'>
        {name}
      </span>
      <span className='overflow-hidden whitespace-nowrap overflow-ellipsis text-[var(--color-light-shade)]'>
        {role}
      </span>
    </div>
  );
};

export default ActorCard;
