import React from 'react';
import './Home.css'
import Product from './Product'
// import { UncontrolledCarousel } from 'reactstrap';

// INSTALAR BOOSTRAP PARA USAR UN CAROUSEL 
//import 'bootstrap/dist/css/bootstrap.min.css'; // IMPORTAMOS SUS ESTILOS


//   const items = [
//     {
//       src: 'https://images-na.ssl-images-amazon.com/images/G/33/img21/Office/Prismacolor/PRISMACOLOR_DSKHERO_1500x600._CB411759432_.jpg',
//       altText: '',
//       caption: '',
//       header: '',
//       key: ''
//     },
//     {
//       src: 'https://images-na.ssl-images-amazon.com/images/G/33/kindle/journeys/ZmVjOWRmN2Yt/ZmVjOWRmN2Yt-OTgwMjA3OTkt-w1500._CB411848962_.jpg',
//       altText: '',
//       caption: '',
//       header: '',
//       key: ''
//     },
//     {
//       src: 'https://m.media-amazon.com/images/I/61mwwytguiL.jpg',
//       altText: '',
//       caption: '',
//       header: '',
//       key: ''
//     }
//   ];

function Home() {
    return (
        <div className='home'>

            {/* <UncontrolledCarousel className='home__image' items={items} />; */}
            <img src="https://images-na.ssl-images-amazon.com/images/G/33/digital/video/merch/2020/TV/BRND/BRND_MTH20_00000_GWBleedingHero_1500x600_Final_es-MX_PVD6308._CB411378860_.jpg" alt="" className="home__image"/>
            {/* Product id, title, price, rating, image */}
            
            <div className="product__row">
                <Product 
                    id='1' 
                    title='The Lean Startup: How Constant Innovation Creates Radicaly Successful Businesses PaperDack'
                    price={20.70}
                    rating={5}
                    image='https://m.media-amazon.com/images/I/41cCtxMt1HL._AC_SY200_.jpg'
                />
                <Product 
                    id='2' 
                    title='Logitech G - G502 HERO - Mouse de Hasta 16,000 DPI, Botones Programables'
                    price={999}
                    rating={2}
                    image='https://images-na.ssl-images-amazon.com/images/I/31AGc-4R3nL.jpg'
                />
            </div>

            <div className="product__row">
            <Product 
                    id='3' 
                    title='Acer Aspire 5 Slim - visualización IPS Full HD de 15,6 Pulgadas, AMD Ryzen 5 3500U'
                    price={5737}
                    rating={5}
                    image='https://images-na.ssl-images-amazon.com/images/I/41vMYgD92xL.jpg'
                />
                <Product 
                    id='4' 
                    title='TP-LINK TL-WA850RE Repetidor de Wifi Extensor de Cobertura Inalámbrico Universal'
                    price={859}
                    rating={3}
                    image='https://images-na.ssl-images-amazon.com/images/I/31w2m8UoIYL.jpg'
                />
                <Product 
                    id='5' 
                    title='Nuevo Echo Dot (4ta Gen) - Bocina inteligente con Alexa - Blanco'
                    price={1500}
                    rating={5}
                    image='https://images-na.ssl-images-amazon.com/images/I/51lrFyQXZoL.jpg'
                />
            </div>
            
            <div className="product__row">
            <Product 
                    id='6' 
                    title='TV LG 50" Pantalla 4K UltraHD Smart | webOS | LG Channels | HDR10 |Compatible Assistant AlexaTV (2020 Model) 50UN6950ZUF (Renewed) '
                    price={10000}
                    rating={4}
                    image='https://m.media-amazon.com/images/I/71YhpyGQwOL._AC_UY218_.jpg'
                />
            </div>
        </div>
    )
}

export default Home;
