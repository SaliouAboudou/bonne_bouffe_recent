
import ig1 from '../../assets/images/ig1.webp'
import ig5 from '../../assets/images/ig5.webp'
import ig7 from '../../assets/images/ig7.webp'
import ig6 from '../../assets/images/ig6.webp'
import Desfruitsdemerfrais from '../../assets/images/Desfruitsdemerfrais.webp'
import basilicfrais from '../../assets/images/basilicfrais.webp'
import parmesanaffiné from '../../assets/images/parmesanaffiné.webp'
import tomate from '../../assets/images/tomate.webp'
import viandeslocales from '../../assets/images/viandeslocales.webp'
import ig14 from '../../assets/images/ig14.webp'
import ig16 from '../../assets/images/ig16.webp'
import ig2 from '../../assets/images/ig2.webp'
import igAccroche from '../../assets/images/igAccroche.png'
import chefcusinier from '../../assets/images/chefcusinier.webp'
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
                        {/* slogan  */}
                        <p className=" text-xs text-green-700">L'art de la bonne bouffe.</p>
                        {/* <span className=" blur-2xl bg-green-200 size-24 rounded-full - "></span> */}
                    </div>
                </div>
                 {/* content!  */}
                 <div className=' w-full relative md:absolute flex flex-col md:flex md:justify-center md:w-full'>
                        <span className=" absolute blur-2xl bg-green-600 size-24 rounded-full "></span>
                    <div className=' absolute md:relative md:w-full md:max-w-4xl md:flex md:justify-center md:mx-auto text-center flex flex-col md:gap-4'>
                        <h1 className=' text-4xl md:text-6xl font-extrabold text-center '>Bienvenue chez <span>Bonne <strong className=' text-green-600'>BOUFFE</strong></span>– La maison de la bonne bouffe !</h1>
                        <p className=' text-gray-600 text-xs md:text-white md:text-xl px-8 text-cente text-justify'>Découvrez un monde de saveurs, de générosité et de plaisir. Ici, on célèbre la bonne bouffe : des plats savoureux, préparés avec soin, livrés avec amour.
                            Que vous ayez envie d’un bon spaghetti, d’un plat riche en sauce ou d’une recette maison, vous êtes au bon endroit !
                    </p>
                    <button className=' hidden md:block bg-green-600 mx-auto px-4 py-2 rounded-md text-xl hover:opacity-75 duration-500 cursor-pointer'>En Savoir plus</button>
                    </div>
                    <img className='pt-42 md:absolute md:blur -z-20 md:text-center md:mt-42 md:mx-auto' src={igAccroche} alt={igAccroche} />
                    
                </div>
                <span className=" right-0 absolute blur-2xl bg-green-600 size-42 bottom-0 -z-20 rounded-full opacity-75"></span>
            </div>
            {/* Zone content nos plats and nos ingredients  */}
            <div className='px-8 md:px-24 py-2 relative'>
                <img className=' absolute -z-20 w-24' src={ig6} alt={ig6} />
                <img className=' absolute -z-20 w-24 scale-x-[-1]' src={ig6} alt={ig6} />
                <img className=' absolute -z-20  w-24 right-0 -bottom-24' src={ig7} alt={ig7} />
                {/* Nos Plats  */}
                <section className='py-6 flex flex-col gap-3 mx-auto'>
                    <h1 className=' text-2xl text-center font-bold px-4  mx-auto py-2 bg-green-100 rounded-full'> <span className=''>🍴</span> Nos plats</h1>
                    <div className=' flex flex-wrap gap-1 md:gap-3 mx-auto'>
                        <div className=' border border-gray-300 min-w-72 max-w-72 rounded-lg min-h-38 max-h-38  md:min-w-52 md:max-w-52 flex flex-col gap-7 px-4'>
                            <div className=' size-32 h-18 mx-auto'>
                                <img className='object-contain mx-auto ' src={ig2} alt={ig2} />
                            </div>
                            <h3 className=' mt-2 text-center text-sm'>Spaghettis traditionnels </h3>
                        </div>
                        <div className=' border border-gray-300 min-w-72 max-w-72 rounded-lg min-h-38 max-h-38   md:min-w-52 md:max-w-52 flex flex-col gap-7 px-4'>
                            <div className=' size-32 h-18 mx-auto'>
                                <img className='object-contain mx-auto ' src={igAccroche} alt={igAccroche} />
                            </div>
                            <h3 className=' mt-2 text-center text-sm'>Pâtes gourmandes </h3>
                        </div>
                        <div className=' border border-gray-300 min-w-72 max-w-72 rounded-lg min-h-38 max-h-38 md:text-2xl  md:min-w-52 md:max-w-52 flex flex-col gap-7'>
                            <div className=' size-32 h-18 mx-auto'>
                                <img className='object-contain mx-auto ' src={ig16} alt={ig16} />
                            </div>
                            <h3 className=' mt-2 text-center text-sm'>Plats mijotés maison </h3>
                        </div>
                        <div className=' border border-gray-300 min-w-72 max-w-72 rounded-lg min-h-38 max-h-38 md:text-2xl  md:min-w-52 md:max-w-52 flex flex-col gap-7 px-4'>
                            <div className=' size-32 h-18 mx-auto'>
                                <img className='object-contain mx-auto ' src={ig14} alt={ig14} />
                            </div>
                            <h3 className=' mt-2 text-center text-sm'>Salades fraîcheur  </h3>
                        </div>
                        <div className=' border border-gray-300 min-w-72 max-w-72 rounded-lg min-h-38 max-h-38 md:text-2xl  md:min-w-52 md:max-w-52 flex flex-col gap-7 px-4'>
                            <div className=' size-32 h-18 mx-auto'>
                                <img className='object-contain mx-auto ' src={igAccroche} alt={igAccroche} />
                            </div>
                            <h3 className=' mt-2 text-center text-sm'>Desserts faits maison  </h3>
                        </div>
                      
                        

                    </div>
                </section>

                {/* Nos Ingredient  */}

                <section className='py-6  flex flex-col  gap-3  rounded-lg md:bg-gray-50'>
                    <h1 className=' text-2xl text-center font-bold px-4  mx-auto py-2 bg-green-100 rounded-full'> <span className=''>🧂</span> Nos Ingrédients</h1>
                    <div className=' flex flex-wrap gap-1 md:gap-3 mx-auto'>
                        <div className=' min-h-52 max-h-52  min-w-52 max-w-52  bg-green-50 h-18 rounded-full md:min-h-52 md:max-h-52  md:min-w-52 md:max-w-52 flex flex-col gap-3 px-4 py-4'>
                            <div className=' size-32 mx-auto rounded-full bg-white overflow-hidden'>
                                <img className='object-contain mx-auto ' src={tomate} alt={tomate} />
                            </div>
                            <h3 className='  text-center text-sm'>Des tomates italiennes mûries au soleil </h3>
                        </div>
                        <div className='  bg-green-50 h-18 rounded-full min-h-52 max-h-52  min-w-52 max-w-52 flex flex-col gap-3 px-4 py-4'>
                            <div className=' size-32 mx-auto rounded-full bg-white overflow-hidden'>
                                <img className='object-contain mx-auto ' src={basilicfrais} alt={basilicfrais} />
                            </div>
                            <h3 className='  text-center text-sm'>Du basilic frais </h3>
                        </div>
                        <div className='  bg-green-50 h-18 rounded-full min-h-52 max-h-52  min-w-52 max-w-52 flex flex-col gap-3 px-4 py-4'>
                            <div className=' size-32 mx-auto rounded-full bg-white overflow-hidden'>
                                <img className='object-contain mx-auto ' src={parmesanaffiné} alt={parmesanaffiné} />
                            </div>
                            <h3 className='  text-center text-sm'>Du parmesan affiné </h3>
                        </div>
                        <div className='  bg-green-50 h-18 rounded-full min-h-52 max-h-52  min-w-52 max-w-52 flex flex-col gap-3 px-4 py-4'>
                            <div className=' size-32 mx-auto rounded-full bg-white overflow-hidden'>
                                <img className='object-contain mx-auto ' src={viandeslocales} alt={viandeslocales} />
                            </div>
                            <h3 className='  text-center text-sm'>Des viandes locales sélectionnées </h3>
                        </div>
                        <div className='  bg-green-50 h-18 rounded-full min-h-52 max-h-52  min-w-52 max-w-52 flex flex-col gap-3 px-4 py-4'>
                            <div className=' size-32 mx-auto rounded-full bg-white overflow-hidden'>
                                <img className='object-contain mx-auto ' src={Desfruitsdemerfrais} alt={Desfruitsdemerfrais} />
                            </div>
                            <h3 className='  text-center text-sm'>Des fruits de mer frais </h3>
                        </div>

                    </div>
                </section>
            </div>

            {/* Zone content nos plats and nos ingredients  */}
            <div className='px-8 md:px-24 py-2 relative'>
                <img className=' absolute -z-20 w-24' src={ig6} alt={ig6} />
                <img className=' absolute -z-20 w-24 scale-x-[-1]' src={ig6} alt={ig6} />
                <img className=' absolute -z-20  w-24 right-0 -bottom-24' src={ig7} alt={ig7} />
             

                {/* Commander  */}
                <section className='py-6  flex flex-col  gap-3  rounded-lg'>
                    <h1 className=' text-2xl text-center font-bold px-4  mx-auto py-2 bg-green-100 rounded-full'> <span className=''>🛒</span> Commander</h1>
                       <p className=' text-center text-sm text-gray-600'>Envie de bonne bouffe ? Commandez en quelques clics !</p>
                    <div className=' flex flex-wrap md:grid md:grid-cols-3 md:justify-between w-full gap-1 md:gap-3 mx-auto'>
                     
                        <div className=' bg-gray-50  min-h-32 max-h-52   rounded-lg w-full  md:min-h32 md:max-h-32 flex  justify-center gap-3 px-4 py-4 relative '>
                            
                            <div className=' flex flex-col '>
                                <span className=' text-center mx-auto bg-white size-12 rounded-full flex justify-center items-center font-bold text-green-300 border'>01</span>
                                <h1 className='  text-gray-600 text-sm'>Parcourez notre menu gourmand</h1>
                            </div>
                        </div>
                        
                        <div className=' bg-gray-50  min-h-32 max-h-52   rounded-lg w-full  md:min-h32 md:max-h-32 flex  justify-center gap-3 px-4 py-4 relative '>
                            
                            <div className=' flex flex-col '>
                                <span className=' text-center mx-auto bg-white size-12 rounded-full flex justify-center items-center font-bold text-green-300 border '>02</span>
                                <h1 className='  text-gray-600 text-sm'>Ajoutez vos plats préférés à votre panier</h1>
                            </div>
                        </div>
                        
                        <div className=' bg-gray-50  min-h-32 max-h-52   rounded-lg w-full  md:min-h32 md:max-h-32 flex  justify-center gap-3 px-4 py-4 relative '>
                            
                            <div className=' flex flex-col '>
                                <span className=' text-center mx-auto bg-white size-12 rounded-full flex justify-center items-center font-bold text-green-300 border'>03</span>
                                <h1 className='  text-gray-600 text-sm'>Finalisez votre commande et détendez-vous</h1>
                            </div>
                        </div>
                        
                    </div>
                    <p className=' text-center text-sm text-gray-600'>Nous préparons, nous livrons, vous régalez !
                    📞 Commandes express au +229 0 151 931 010</p>

                </section>
            </div>

            {/* zone a propos de nous  */}
            <div className='px-8 md:px-24 py-2 relative '>
                {/* A Propos  */}
                <section className='py-6 flex flex-col gap-3'>
                    <h1 className=' text-2xl text-center font-bold px-4  mx-auto py-2 bg-green-100 rounded-full'> <span className=''>👨‍🍳</span> À propos de nous</h1>
                    <div className=' flex flex-wrap w-full justify-center mx-auto gap-3 md:gap-3 '>
                        <div className=' md:absolute md:opacity-45 '>
                            <img className=' w-42  text-center' src={chefcusinier} alt={chefcusinier} />
                        </div>
                        <div className=' text-center w-full md:max-w-5xl flex flex-col gap-2.5'>
                            <h1 className=' text-green-600 font-bold'>Notre Histoire</h1>
                            <p className=' text-justify text-sm'>Nés de la passion pour la bonne cuisine, nous avons voulu offrir à chacun la possibilité de savourer des plats savoureux et authentiques, préparés avec amour et simplicité.</p>
                            <p className=' text-justify text-sm'>Tout a commencé avec une envie simple : partager la vraie bonne bouffe, celle qui réchauffe le cœur et rassemble autour de la table.
                            Inspirés par les traditions italiennes, les repas familiaux et les recettes maison transmises de génération en génération, nous avons décidé de créer la <span>Bonne<strong className=' text-green-600'>BOUFFE</strong></span> : un endroit où qualité, générosité et plaisir se rencontrent.</p>
                            <p className=' text-justify text-sm'>Aujourd'hui, grâce à la livraison rapide et soignée, nous avons fait tomber les murs de la cuisine pour apporter directement chez vous un moment de bonheur, de partage et de gourmandise.</p>
                            <p className=' text-justify text-sm'>Notre promesse :
                            Vous faire sentir à chaque bouchée que la bonne bouffe peut être simple, vraie, et accessible à tous.</p>

                        </div>
                    </div>
                </section>
            </div>


        </div>
    );
}


