import Header from "../components/Header"
import BanerHead from "../components/BanerHead"
import Footer from "../components/Footer"

const MainPage = () =>{
    return (
        <div className="min-h-full">
            <BanerHead/>
            <Header/>

            <main>
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <section>
                        <div class="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
                            <div class="mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
                                <div class="flex justify-center">
                                    <a class="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-xs text-gray-600 p-2 px-3 rounded-full transition hover:border-gray-300 focus:outline-none focus:border-gray-300" href="#">
                                        Узнать подробнее
                                        <span class="flex items-center gap-x-1">
                                            <span class="border-s border-gray-200 text-blue-600 ps-2">Подробнее</span>
                                            <svg class="shrink-0 size-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                                        </span>
                                    </a>
                                </div>

                                <div class="mt-5 max-w-xl text-center mx-auto">
                                    <h1 class="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
                                        Банк отказал?
                                        мы поможем вам взять кредит 
                                    </h1>
                                </div>

                                <div class="mt-5 max-w-3xl text-center mx-auto">
                                    <p class="text-lg text-gray-600">Получение кредита у нас в офисе за 15 минут</p>
                                </div>
                                <div class="mt-8 gap-3 flex justify-center">
                                    <a class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 focus:outline-none focus:from-violet-600 focus:to-blue-600 border border-transparent text-white text-sm font-medium rounded-full py-3 px-4" href="#">
                                        Оставить заявку
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>

                    </section>
                    <section>
                        <div>

                            <div class="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto">
                                <div class="max-w-3xl mb-10 lg:mb-14">
                                    <h2 class="font-semibold text-2xl md:text-4xl md:leading-tight">Our approach</h2>
                                    <p class="mt-1 text-neutral-400">This profound insight guides our comprehensive strategy — from meticulous research and strategic planning to the seamless execution of brand development and website or product deployment.</p>
                                </div>

                                <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
                                    <div class="aspect-w-16 aspect-h-9 lg:aspect-none">
                                        <img className="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1587614203976-365c74645e83?q=80&w=480&h=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Features Image" />
                                    </div>

                                <div>

                                    <div class="mb-4">
                                        <h3 class="text-text-blue-600 text-xs font-medium uppercase">
                                            Steps
                                        </h3>
                                    </div>

                                    <div class="flex gap-x-5 ms-1">
                                        <div class="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                                                <div class="relative z-10 size-8 flex justify-center items-center">
                                                    <span class="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-blue-600 font-semibold text-xs uppercase rounded-full">
                                                        1
                                                    </span>
                                                </div>
                                            </div>

                                            <div class="grow pt-0.5 pb-8 sm:pb-12">
                                                <p class="text-sm lg:text-base text-neutral-400">
                                                    <span class="text-black">Market Research and Analysis:</span>
                                                    Identify your target audience and understand their needs, preferences, and behaviors.
                                                </p>
                                            </div>
                                        </div>

                                        <div class="flex gap-x-5 ms-1">
                                            <div class="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                                                <div class="relative z-10 size-8 flex justify-center items-center">
                                                    <span class="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-blue-600 font-semibold text-xs uppercase rounded-full">
                                                        2
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="grow pt-0.5 pb-8 sm:pb-12">
                                                <p class="text-sm lg:text-base text-neutral-400">
                                                    <span class="text-black">Product Development and Testing:</span>
                                                    Develop digital products or services that address the needs and preferences of your target audience.
                                                </p>
                                            </div>
                                        </div>

                                        <div class="flex gap-x-5 ms-1">
                                            <div class="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                                                <div class="relative z-10 size-8 flex justify-center items-center">
                                                    <span class="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-blue-600 font-semibold text-xs uppercase rounded-full">
                                                        3
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="grow pt-0.5 pb-8 sm:pb-12">
                                                <p class="text-sm md:text-base text-neutral-400">
                                                    <span class="text-black">Marketing and Promotion:</span>
                                                    Develop a comprehensive marketing strategy to promote your digital products or services.
                                                </p>
                                            </div>
                                        </div>

                                        <div class="flex gap-x-5 ms-1">
                                            <div class="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                                                <div class="relative z-10 size-8 flex justify-center items-center">
                                                    <span class="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-blue-600 font-semibold text-xs uppercase rounded-full">
                                                        4
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="grow pt-0.5 pb-8 sm:pb-12">
                                                <p class="text-sm md:text-base text-neutral-400">
                                                    <span class="text-black">Launch and Optimization:</span>
                                                    Launch your digital products or services to the market, closely monitoring their performance and user feedback.
                                                </p>
                                            </div>
                                        </div>

                                        <a class="group inline-flex items-center gap-x-2 py-2 px-3 bg-blue-600 font-medium text-sm text-white rounded-full focus:outline-none" href="#">
                                            <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path class="opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:delay-100 transition" d="M14.05 2a9 9 0 0 1 8 7.94"></path><path class="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition" d="M14.05 6A5 5 0 0 1 18 10"></path></svg>
                                            Schedule a call
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />

        </div>
    )
}

export default MainPage