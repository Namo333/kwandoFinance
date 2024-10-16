import Test from "./Test"

const BanerTest = () =>{
    return(
        <div class="bg-gray-800 absolute left-0 w-full">
          <div class="max-w-7xl px-4 py-10 sm:px-6 lg:px-8 mx-auto">
            <div class="grid justify-center md:grid-cols-2 md:justify-between md:items-center gap-2">
              <div class="text-center md:text-start">
                <p class="text-xs text-white/80 uppercase tracking-wider">
                  Простой тест
                </p>
                <p class="mt-1 text-white font-medium">
                    Пройдите простой тест за 1 минуту и увеличьте шансы на одобрение кредита!
                </p>
              </div>
              <div class="mt-3 text-center md:text-start md:flex md:justify-end md:items-center">

                <button type="button" class="py-3 px-20 inline-flex items-center gap-x-2 text-sm font-medium rounded-[10px] border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-scale-animation-modal" data-hs-overlay="#hs-scale-animation-modal">
                  Пройти тест
                </button>
                <Test/>
                
              </div>
            </div>
          </div>
        </div>

    )
}

export default BanerTest