
import ig1 from '../../assets/images/ig1.webp'
import ig5 from '../../assets/images/ig5.webp'
import igAccroche from '../../assets/images/igAccroche.png'
export const Base = () => {
    return (
        <div className=" w-full">
            {/* Zone Header  */}
            <div className=" w-full h-screen overflow-hidden relative">
                <img className=' absolute bottom-0 w-42  opacity-55' src={ig1} alt={ig1} />
                <img className=' absolute right-0 w-42  opacity-55' src={ig5} alt={ig5} />
                {/* Zone NavBar  */}
                <div className=" w-full flex  px-8 py-6 items-center">
                    {/* Div logo */}
                    <div className=" flex flex-col">
                        <h1 className=" text-2xl md:text-4xl font-bold">Bonne<span className="text-green-600 font-extrabold">BOUFFE</span></h1>
                        <p className=" text-xs text-green-700">Le goût du vrai spaghetti.</p>
                        {/* <span className=" blur-2xl bg-green-200 size-24 rounded-full - "></span> */}
                    </div>
                </div>
                 {/* content!  */}
                 <div className=' w-full py-2 relative flex flex-col  px-8 '>
                    <div className=' absolute text-center flex flex-col gap-4'>
                        <span className=" absolute blur-2xl bg-green-600 size-24 rounded-full "></span>
                        <h1 className=' text-4xl font-extrabold text-center'>Bienvenue chez <span>Bonne <strong className=' text-green-600'>BOUFFE</strong></span>– La maison de la bonne bouffe !</h1>
                        <p className=' text-gray-600'>Découvrez un monde de saveurs, de générosité et de plaisir. Ici, on célèbre la bonne bouffe : des plats savoureux, préparés avec soin, livrés avec amour.
                            Que vous ayez envie d’un bon spaghetti, d’un plat riche en sauce ou d’une recette maison, vous êtes au bon endroit !
                            </p>
                    </div>
                    <img className='pt-38' src={igAccroche} alt={igAccroche} />
                    
                </div>
                <span className=" right-0 absolute blur-2xl bg-green-600 size-42 bottom-0 -z-20 rounded-full "></span>
            </div>
        </div>
    );
}


