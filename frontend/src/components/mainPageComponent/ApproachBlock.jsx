import Test from "../Test"

const ApproachBlock = () =>{
    return ( 
        <div>
        <div class="xl:px-0 py-5 lg:pb-20 mx-auto">
            <div class="max-w-3xl mb-10 lg:mb-14">
                <h2 class="font-semibold text-2xl md:text-4xl md:leading-tight text-gray-800">Наш подход</h2>
                <p class="mt-1 text-gray-800">Как кредитный брокер, мы обеспечиваем простой и прозрачный процесс получения кредита. Мы подбираем для вас лучшие предложения от банков, учитывая ваши финансовые возможности и цели.</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
                <div class="aspect-w-16 aspect-h-9 lg:aspect-none">
                    <img className="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1587614203976-365c74645e83?q=80&w=480&h=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Features Image" />
                </div>

            <div>

                <div class="mb-4">
                    <h3 class="text-text-blue-600 text-xs font-medium uppercase">
                        Шаги
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
                            <p class="text-sm lg:text-base text-gray-600">
                                <span class="text-black">Оставить заявку на сайте: </span>
                                Вы заполняете заявку на сайте или звоните нам.
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
                            <p class="text-sm lg:text-base text-gray-600">
                                <span class="text-black">Анализ данных: </span>
                                Мы анализируем Ваши данные и консультируем
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
                            <p class="text-sm md:text-base text-gray-600">
                                <span class="text-black">Подбор кредита: </span>
                                Подбираем оптимальный вариант кредита (с одобрением в 97% случаев).
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
                            <p class="text-sm md:text-base text-gray-600">
                                <span class="text-black">Поездка в офис: </span>
                                Вы приезжаете к нам в офис и мы регистрируем сделку
                            </p>
                        </div>
                    </div>

                    <div class="flex gap-x-5 ms-1">
                        <div class="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                            <div class="relative z-10 size-8 flex justify-center items-center">
                                <span class="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-blue-600 font-semibold text-xs uppercase rounded-full">
                                    5
                                </span>
                            </div>
                        </div>
                        <div class="grow pt-0.5 pb-8 sm:pb-12">
                            <p class="text-sm md:text-base text-gray-600">
                                <span class="text-black">Получение денег: </span>
                                Вы получаете деньги, вы счастливые идёте покупать жене айфон в кредит, так как ты осел!!!
                            </p>
                        </div>
                    </div>

                    <button type="button" class="group inline-flex items-center gap-x-2 py-2 px-3 bg-blue-600 font-medium text-sm text-white rounded-[13px] focus:outline-none"
                        aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-scale-animation-modal" data-hs-overlay="#hs-scale-animation-modal"
                    >
                        <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path class="opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:delay-100 transition" d="M14.05 2a9 9 0 0 1 8 7.94"></path><path class="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition" d="M14.05 6A5 5 0 0 1 18 10"></path></svg>
                        Оставить заявку
                    </button>
                    <Test/>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ApproachBlock