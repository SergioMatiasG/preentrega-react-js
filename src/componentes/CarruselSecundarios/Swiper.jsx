import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Swiper.css';
import { Pagination } from 'swiper/modules';
import CardSkeleton from '../skeleton/CardSkeleton';
import ItemSwiper from "../Items/ItemSwiper"
import { useEffect, useState } from 'react';
import { db } from "../../Firebase/Client"
import { query, where, collection, getDocs } from 'firebase/firestore';

const carruselS = ({ titulo, categoria }) => {
    const [list, setList] = useState([])
    useEffect(() => {
        const productsRef =
            query(
                collection(db, "productos"),
                where("categoryId", "==", categoria),
            )
        getDocs(productsRef)
            .then(snapshot => {
                setList(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
            })
            .catch(e => console.error(e))
    }, [])
    return (
        <div className='contenedor-swiper'>
            <h3 className='titulo-swiper'>{titulo}</h3>
            <Swiper
                id={1}
                slidesPerView={3}
                spaceBetween={30}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {list.length ? (
                    list.map((p, index) => (
                        <SwiperSlide key={index}>
                            <ItemSwiper key={p.id} item={p} />
                        </SwiperSlide>
                    ))
                ) : (
                    <>
                        <SwiperSlide>
                            <CardSkeleton />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardSkeleton />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardSkeleton />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardSkeleton />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardSkeleton />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardSkeleton />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardSkeleton />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardSkeleton />
                        </SwiperSlide>
                    </>

                )
                }

            </Swiper>
        </div>


    )
}
export default carruselS