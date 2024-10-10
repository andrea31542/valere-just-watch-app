import Filter from '@/app/components/Filter/Filter';
import GenreSelect from '@/app/components/Filter/GenreSelect';
import ScoreFilter from '@/app/components/Filter/ScoreFilter';
import ContentHeader from '@/app/components/Page/ContentHeader';
import Slider from '@/app/components/Slider/Slider';
import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

const InfiniteScrollMovies = dynamic(
  () => import('../../components/Infinite/InfiniteScroll'),
  {
    ssr: false,
    loading: () => <p>Loading movies...</p>,
  }
);
type FilterItemType = {
  label: string;
  content: ReactNode;
};
const Najgledanije = () => {
  const filterItems: FilterItemType[] = [
    {
      label: 'Godina izdanja',
      content: <Slider min={1900} max={2024} step={0.1} />,
    },
    { label: 'Žanrovi', content: <GenreSelect /> },
    { label: 'Ocjena', content: <ScoreFilter /> },
  ];

  return (
    <div className='px-[1rem] lg:px-[4rem]'>
      <ContentHeader
        title='Najgledaniji filmovi i serije – JustWatch Hrvatska'
        content='Drago nam je da ste ovdje! Na JustWatchu možete lako doznati gdje gledati svoje omiljene filmove i serije u Hrvatskoj. JustWatch je brz i učinkovit: odaberite omiljenog pružatelja usluga i doznajte što je novo na Netflixu i drugim streaming platformama. Filtrirajte po žanru i godini izdanja kako biste pronašli savršen film za večeras. Potražite određeni film ili seriju i doznajte gdje ih možete legalno gledati.'
      />
      <div className='flex flex-row'>
        {filterItems.map((filter, index) => (
          <Filter key={index} {...filter} />
        ))}
      </div>
      <InfiniteScrollMovies />
    </div>
  );
};

export default Najgledanije;
