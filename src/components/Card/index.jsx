import { CardDetail } from './CardDetail';

import imageTraces from '../../assets/traces.svg';
import genre from '../../assets/genre.svg';
import rule from '../../assets/rule.svg';
import cake from '../../assets/cake.svg';

export const Card = ({ name, genres, size, age, image, history, db }) => {
  const details = [
    {
      icon: genre,
      title: 'Género',
      value: genres
    },
    {
      icon: rule,
      title: 'Tamaño',
      value: size
    },
    {
      icon: cake,
      title: 'Edad',
      value: age
    }
  ];
  return (
    <div className='bg-[#FFFEFD] w-[33rem] relative h-[15.4rem] flex rounded-lg border-2 border-[#EBE5F7] overflow-hidden'>

      <section className='w-[40%] h-full overflow-hidden'>
        <div className='h-full w-[13rem]'>
          <img className='h-full w-full rounded-l-md object-cover' src={image} alt='Photo de dogs' />
        </div>
      </section>

      <section className='w-[60%] h-full px-4 py-5 space-y-3 flex flex-col'>

        <div className=' space-y-2 w-[95%]'>
          <h1 className='text-[1rem] font-bold'>{name}</h1>
          <p className='text-[0.9rem]'>
            {db ? history : 'Thea está domesticada y le encantan los juguetes. Le encanta la gente y le encanta llamar la atención. Thea nació en febrero de 2014'}
          </p>
        </div>

        <div className='text-sm font-[Nunito] flex flex-col gap-1'>
          {
            details && details.map(d => (
              <CardDetail
                key={d.title}
                icon={d.icon}
                name={d.title}
                value={d.value}
              />
            ))
          }
        </div>
      </section>
      <img src={imageTraces} alt='traces' className='absolute right-4 bottom-3 ' />
    </div>
  );
};