import {Carousel, Typography} from '@/components/ClientSide'
import '../../styles/globals.css'
import Carrossel from '../../components/home/carrossel';
import EventCard from '@/components/home/eventCard';

export default function Home() {
    return (
    <div className='flex flex-col justify-center items-center'>

        <div className="flex flex-col p-2 justify-center mb-[2rem] h-[20rem] w-[21rem]">
            <h1 className='flex justify-center text-white text-3xl'>Encontre seu próximo evento</h1>

            <Carrossel className="h-[15rem] w-[21rem]"
                    imagem1 = "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    imagem2 = "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    imagem3 = "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"/>

        </div>

        <div className= "flex justify-center w-[23rem] min-h-[8rem] flex-col">
            <EventCard imagem = "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
            data="05/04" local="Recife - PE">Djavan Turnê A 2023</EventCard>

            <EventCard imagem = "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
            data="06/05" local="Salvador - BA">Djavan Turnê B 2023</EventCard>

            <EventCard imagem = "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
            data="07/06" local="Cachoeira - BA">Djavan Turnê C 2023</EventCard>

            <EventCard imagem = "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
            data="08/07" local="Feira de Santana - BA">Djavan Turnê D 2023</EventCard>

            <EventCard imagem = "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
            data="08/07" local="Feira de Santana - BA">Djavan Turnê D 2023</EventCard>
        </div>
        
    </div>
  );
}