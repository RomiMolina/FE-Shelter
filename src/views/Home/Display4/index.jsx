import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCommentsList } from '../../../state/features/comments/commentsSlice';
import { PetsNotFound } from '../../../components/PetsNotFound';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Cards from '../../../components/Card/CardComments';

export const Display4 = () => {
  const dispatch = useDispatch();
  const commentsList = useSelector((state) => state.comments.list);

  useEffect(() => {
    dispatch(getCommentsList());
  }, [dispatch]);

  return (
    <section className='bg-[#FFFEFD] hidden md:block w-[90%] m-auto'>
      <div className='flex flex-col items-center justify-center md:space-y-5 py-5'>
        <p className='text-[#7C58D3] font-bold text-[1.2rem] font-[Nunito]'>Nuestras opiniones</p>
        <h1 className='text-[3rem] font-[Nunito]'>Lo que dice la gente</h1>
        <span>Estos son los comentarios que recibimos de la gente que adoptó nuestros amigos peludos</span>
      </div>
      <div>
        {commentsList.length > 0
          ? (
            <Slider
              dots
              infinite
              speed={500}
              slidesToShow={3}
              slidesToScroll={3}
              className='bg-[#FBF9FF] rounded-t-lg'
            >
              {commentsList.map((t, i) => (
                <Fragment key={i}>
                  <Cards
                    idPet={t.idPet}
                    idUser={t.idUser}
                    stars={t.stars}
                    comments={t.comments}
                    image={t.image}
                  />
                </Fragment>
              ))}
            </Slider>
            )
          : (
            <PetsNotFound />
            )}
      </div>
    </section>
  );
};