
import ig1 from '../../assets/images/ig1.webp'
import ig5 from '../../assets/images/ig5.webp'
import ig4 from '../../assets/images/ig4.webp'
import ig15 from '../../assets/images/ig15.webp'
import ig16 from '../../assets/images/ig16.webp'
import ig2 from '../../assets/images/ig2.webp'
import igAccroche from '../../assets/images/igAccroche.png'
export const Base = () => {
    return (
        <div className=" w-full">
            {/* Zone Header  */}
            <div className=" w-full h-screen overflow-hidden relative">
                <img className=' absolute bottom-0 w-42  opacity-55' src={ig1} alt={ig1} />
                <img className=' absolute right-0 w-42  opacity-55' src={ig5} alt={ig5} />
                {/* Zone NavBar  */}
                <div className=" w-full flex  px-8 md:px-24 py-6 items-center">
                    {/* Div logo */}
                    <div className=" flex flex-col md:px-24">
                        <h1 className=" text-2xl md:text-4xl font-bold">Bonne<span className="text-green-600 font-extrabold">BOUFFE</span></h1>
                        <p className=" text-xs text-green-700">Le goût du vrai spaghetti.</p>
                        {/* <span className=" blur-2xl bg-green-200 size-24 rounded-full - "></span> */}
                    </div>
                </div>
                 {/* content!  */}
                 <div className=' w-full relative md:absolute flex flex-col md:flex md:justify-center md:w-full'>
                        <span className=" absolute blur-2xl bg-green-600 size-24 rounded-full "></span>
                    <div className=' absolute md:relative md:w-full md:max-w-4xl md:flex md:justify-center md:mx-auto text-center flex flex-col md:gap-4'>
                        <h1 className=' text-4xl md:text-6xl font-extrabold text-center '>Bienvenue chez <span>Bonne <strong className=' text-green-600'>BOUFFE</strong></span>– La maison de la bonne bouffe !</h1>
                        <p className=' text-gray-600 text-xs md:text-white md:text-xl px-8 text-center'>Découvrez un monde de saveurs, de générosité et de plaisir. Ici, on célèbre la bonne bouffe : des plats savoureux, préparés avec soin, livrés avec amour.
                            Que vous ayez envie d’un bon spaghetti, d’un plat riche en sauce ou d’une recette maison, vous êtes au bon endroit !
                    </p>
                    <button className=' hidden md:block bg-green-600 mx-auto px-4 py-2 rounded-md text-xl hover:opacity-75 duration-500 cursor-pointer'>En Savoir plus</button>
                    </div>
                    <img className='pt-42 md:absolute md:blur -z-20 md:text-center md:mt-42 md:mx-auto' src={igAccroche} alt={igAccroche} />
                    
                </div>
                <span className=" right-0 absolute blur-2xl bg-green-600 size-42 bottom-0 -z-20 rounded-full opacity-75"></span>
            </div>
            <div className='px-8 md:px-24 py-2'>
                {/* Nos Plats  */}
                <section className='py-6 flex flex-col gap-3'>
                    <h1 className=' text-2xl text-center font-bold'> <span className=''>🍴</span> Nos plats</h1>
                    <div className=' flex flex-wrap gap-2 mx-auto'>
                        <div className=' border border-gray-300 rounded-lg min-h-52 max-h-52  min-w-52 max-w-52 flex flex-col gap-7 px-4'>
                            <div className=' size-32 h-18 mx-auto'>
                                <img className='object-contain mx-auto ' src={ig2} alt={ig2} />
                            </div>
                            <h3 className=' mt-2 text-center text-2xl'>Spaghettis traditionnels </h3>
                        </div>
                        <div className=' border border-gray-300 rounded-lg min-h-52 max-h-52  min-w-52 max-w-52 flex flex-col gap-7 px-4'>
                            <div className=' size-32 h-18 mx-auto'>
                                <img className='object-contain mx-auto ' src={igAccroche} alt={igAccroche} />
                            </div>
                            <h3 className=' mt-2 text-center text-2xl'>Pâtes gourmandes </h3>
                        </div>
                        <div className=' border border-gray-300 rounded-lg min-h-52 max-h-52  min-w-52 max-w-52 flex flex-col gap-7'>
                            <div className=' size-32 h-18 mx-auto'>
                                <img className='object-contain mx-auto ' src={igAccroche} alt={igAccroche} />
                            </div>
                            <h3 className=' mt-2 text-center text-2xl'>Plats mijotés maison </h3>
                        </div>
                        <div className=' border border-gray-300 rounded-lg min-h-52 max-h-52  min-w-52 max-w-52 flex flex-col gap-7 px-4'>
                            <div className=' size-32 h-18 mx-auto'>
                                <img className='object-contain mx-auto ' src={igAccroche} alt={igAccroche} />
                            </div>
                            <h3 className=' mt-2 text-center text-2xl'>Salades fraîcheur  </h3>
                        </div>
                        <div className=' border border-gray-300 rounded-lg min-h-52 max-h-52  min-w-52 max-w-52 flex flex-col gap-7 px-4'>
                            <div className=' size-32 h-18 mx-auto'>
                                <img className='object-contain mx-auto ' src={igAccroche} alt={igAccroche} />
                            </div>
                            <h3 className=' mt-2 text-center text-2xl'>Desserts faits maison  </h3>
                        </div>
                      
                        

                    </div>
                </section>
            </div>
        </div>
    );
}


