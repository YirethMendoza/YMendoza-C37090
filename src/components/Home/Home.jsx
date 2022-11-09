import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        
        <section className='container intro'>
            <div className='intro1'>
                <h1 className='Titulo animate__animated animate__fadeInDown'>¡Bienvenido!</h1>
                <h2 className='Subtitulo animate__animated animate__fadeInUp animate__delay-1s'>Te echamos de menos</h2>
                <Link to='/producto'>
                <button type="button" className='btn btn-success animate__animated animate__fadeIn animate__delay-2s'>IR DE COMPRAS</button>
                </Link>
            </div>
        </section>
    );
}

export default Home;

// {/* <img className='mont' src="./img/logocava.png" alt="" /> */}