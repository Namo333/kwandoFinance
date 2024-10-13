const HeroBlock = () => {
    return(
        <div class="mx-auto">
            <div class="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
                <div class="lg:col-span-3">
                    <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl">Банк отказал?
                    мы поможем вам взять кредит</h1>
                    <p class="mt-3 text-lg text-gray-800">Получение кредита у нас в офисе за 15 минут</p>

                    <div class="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                        <a class="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#contact-us">
                            Оставить заявку
                        </a>
                    </div>
                </div>

                <div class="lg:col-span-4 mt-10 lg:mt-0">
                    <img class="w-full rounded-xl" src="https://images.unsplash.com/photo-1665686376173-ada7a0031a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=700&q=80" alt="Hero Image" />
                </div>
            </div>
        </div>
    )
}

export default HeroBlock