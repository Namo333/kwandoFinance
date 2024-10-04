const BanerHead = () =>{
    return(
        <div class="bg-blue-600 bg-[url('https://preline.co/assets/svg/examples/abstract-1.svg')] bg-no-repeat bg-cover bg-center">
          <div class="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto">
            <div class="grid justify-center md:grid-cols-2 md:justify-between md:items-center gap-2">
              <div class="text-center md:text-start md:order-2 md:flex md:justify-end md:items-center">
                <a href="tel:+74951284454" class="me-5 inline-block text-sm font-semibold text-white">
                    +7 (495) 128-44-54
                </a>
                <p class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border-2 border-white text-white ">
                    Ежедневно 9:00-19:00
                </p>
              </div>
        
              <div class="flex items-center">
                <a class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-lg font-medium text-white hover:bg-white/10 focus:outline-none focus:bg-white/10 transition text-sm" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    info@credit-ipoteka.com
                </a>
                <span class="inline-block border-e border-white/30 w-px h-5 mx-2"></span>

                <div className="hs-dropdown relative inline-flex">
                    <button id="hs-dropdown-default" type="button" className="hs-dropdown-toggle py-2 px-3 inline-flex justify-center items-center rounded-lg font-medium text-white hover:bg-white/10 focus:outline-none focus:bg-white/10 transition text-sm" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                        Информация для заемщиков
                        <svg class="hs-dropdown-open:rotate-180 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </button>

                    <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg mt-2  dark:border after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-default">
                        <div class="p-1 space-y-0.9">
                            <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 " href="#">
                                Закон 102-ФЗ об ипотеке
                            </a>
                            <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 " href="#">
                                Анкета на кредит
                            </a>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default BanerHead