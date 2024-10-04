'use client'
import { Link, Outlet } from "react-router-dom";


const Header = () => {
  return (
    <header class="flex flex-wrap  md:justify-start md:flex-nowrap z-50 w-full bg-white border-b border-gray-200">
      <nav class="relative max-w-[85rem] w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 py-2 px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center gap-x-1">
          <a class="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80" href="#" aria-label="Brand">Kwando</a>
    
 
          <button type="button" class="hs-collapse-toggle md:hidden relative size-9 flex justify-center items-center font-medium text-[12px] rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" id="hs-header-base-collapse"  aria-expanded="false" aria-controls="hs-header-base" aria-label="Toggle navigation"  data-hs-collapse="#hs-header-base" >
            <svg class="hs-collapse-open:hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
            <svg class="hs-collapse-open:block shrink-0 hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            <span class="sr-only">Toggle navigation</span>
          </button>

        </div>
    

        <div id="hs-header-base" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block "  aria-labelledby="hs-header-base-collapse" >
          <div class="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
            <div class="py-2 md:py-0  flex flex-col md:flex-row md:items-center gap-0.5 md:gap-1">
              <div class="grow">
                <div class="flex flex-col md:flex-row md:justify-end md:items-center gap-0.5 md:gap-1">
                  <div class="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] [--is-collapse:true] md:[--is-collapse:false] ">
                    <button id="hs-header-base-mega-menu-medium" type="button" class="hs-dropdown-toggle w-full p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100" aria-haspopup="menu" aria-expanded="false" aria-label="Mega Menu">
                      <svg class="shrink-0 size-4 me-3 md:me-2 block md:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
                      Услуги
                      <svg class="hs-dropdown-open:-rotate-180 md:hs-dropdown-open:rotate-0 duration-300 shrink-0 size-4 ms-auto md:ms-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </button>
    
                    <div class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 relative md:w-[705px] lg:w-[750px] hidden z-10 top-full end-0 before:absolute before:-top-5 before:start-0 before:w-full before:h-5" role="menu" aria-orientation="vertical" aria-labelledby="hs-header-base-mega-menu-medium">
                      <div class="md:mx-6 lg:mx-8 md:bg-white md:rounded-lg md:shadow-md">

                        <div class="pt-2 md:pt-0 grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-0">
                          <div class="col-span-3 md:p-3">

                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-1">
                              <div>
                                <div class="flex flex-col">
                                  <div class="space-y-0.5">
                                    <span class="ms-2.5 mb-2 font-semibold text-xs uppercase text-gray-800">About us</span>
    

                                    <a class="p-2 flex gap-x-3 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg" href="#">
                                      <svg class="shrink-0 size-4 mt-0.5 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                                      <div class="grow">
                                        <p class="text-sm text-gray-800">Support Docs</p>
                                      </div>
                                    </a>

                                    <a class="p-2 flex gap-x-3 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg" href="#">
                                      <svg class="shrink-0 size-4 mt-0.5 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="14" y="3" rx="1"/><path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"/></svg>
                                      <div class="grow">
                                        <p class="text-sm text-gray-800">Integrations</p>
                                      </div>
                                    </a>

                                    <a class="p-2 flex gap-x-3 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg" href="#">
                                      <svg class="shrink-0 size-4 mt-0.5 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
                                      <div class="grow">
                                        <p class="text-sm text-gray-800">Guides</p>
                                      </div>
                                    </a>

                                    <a class="p-2 flex gap-x-3 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg" href="#">
                                      <svg class="shrink-0 size-4 mt-0.5 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 11 2-2-2-2"/><path d="M11 13h4"/><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/></svg>
                                      <div class="grow">
                                        <p class="text-sm text-gray-800">API Reference</p>
                                      </div>
                                    </a>

                                    <a class="p-2 flex gap-x-3 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg" href="#">
                                      <svg class="shrink-0 size-4 mt-0.5 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                                      <div class="grow">
                                        <p class="text-sm text-gray-800">API Status</p>
                                      </div>
                                    </a>

                                  </div>
                                </div>
                              </div>

    
                              <div>
                                <div class="flex flex-col">
                                  <div class="space-y-0.5">
                                    <span class="ms-2.5 mb-2 font-semibold text-xs uppercase text-gray-800">Support</span>
    

                                    <a class="p-2 flex gap-x-3 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg" href="#">
                                      <svg class="shrink-0 size-4 mt-0.5 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
                                      <div class="grow">
                                        <p class="text-sm text-gray-800">Help Center</p>
                                      </div>
                                    </a>

                                    <a class="p-2 flex gap-x-3 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg" href="#">
                                      <svg class="shrink-0 size-4 mt-0.5 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"/></svg>
                                      <div class="grow">
                                        <p class="text-sm text-gray-800">Developer Hub</p>
                                      </div>
                                    </a>

                                    <a class="p-2 flex gap-x-3 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg" href="#">
                                      <svg class="shrink-0 size-4 mt-0.5 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                                      <div class="grow">
                                        <p class="text-sm text-gray-800">Community Forum</p>
                                      </div>
                                    </a>

                                  </div>
    
                                  <div class="mt-3 md:mt-7 space-y-0.5">
                                    <span class="ms-2.5 mb-2 font-semibold text-xs uppercase text-gray-800">Partners</span>
    

                                    <a class="p-2 flex gap-x-3 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg" href="#">
                                      <svg class="shrink-0 size-4 mt-0.5 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-6"/><polyline points="14 2 14 8 20 8"/><path d="M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M7 16.5 8 22l-3-1-3 1 1-5.5"/></svg>
                                      <div class="grow">
                                        <p class="text-sm text-gray-800">Become a Partner</p>
                                      </div>
                                    </a>

                                    <a class="p-2 flex gap-x-3 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg" href="#">
                                      <svg class="shrink-0 size-4 mt-0.5 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 5 4 4"/><path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"/><path d="m8 6 2-2"/><path d="m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z"/><path d="m18 16 2-2"/><path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"/></svg>
                                      <div class="grow">
                                        <p class="text-sm text-gray-800">Build on Preline</p>
                                      </div>
                                    </a>

                                  </div>
                                </div>
                              </div>

                            </div>

                          </div>

    
                          <div class="md:col-span-2">
                            <div class="p-2 md:p-4 md:h-full md:flex-1 flex flex-col md:bg-gray-50 md:rounded-br-lg">
                              <span class="mb-2 font-semibold text-xs uppercase text-gray-800">Customer stories</span>
    

                              <a class="group flex flex-row items-center md:items-start md:flex-col gap-4 md:gap-2 focus:outline-none" href="#">
                                <img className="shrink-0 md:w-full size-28 object-cover rounded-lg" src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Customer Story Image" />
                                <div class="grow">
                                  <p class="text-sm text-gray-800">Preline Projects has proved to be most efficient cloud based project tracking and bug tracking tool.</p>
                                  <p class="mt-3 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium">
                                    Learn more
                                    <svg class="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                                  </p>
                                </div>
                              </a>

                            </div>
                          </div>

                        </div>

                      </div>
                    </div>
                  </div>

    
                  <a class="p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100" href="#">
                    <svg class="shrink-0 size-4 me-3 md:me-2 block md:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    О компании
                  </a>
    
                  <a class="p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100" href="#">
                    <svg class="shrink-0 size-4 me-3 md:me-2 block md:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 12h.01"/><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M22 13a18.15 18.15 0 0 1-20 0"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>
                    Отзывы
                  </a>
    
                  <a class="p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100" href="#">
                    <svg class="shrink-0 size-4 me-3 md:me-2 block md:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg>
                    Новости
                  </a>

                  <a class="p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100" href="#">
                    <svg class="shrink-0 size-4 me-3 md:me-2 block md:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg>
                    Контакты
                  </a>
                </div>
              </div>
    
              <div class="my-2 md:my-0 md:mx-2">
                <div class="w-full h-px md:w-px md:h-4 bg-gray-100 md:bg-gray-300"></div>
              </div>
    

              <div class=" flex flex-wrap items-center gap-x-1.5">
                <a class="py-2 px-2.5 inline-flex items-center font-medium text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
                  Оставить заявку
                </a>
              </div>

            </div>
          </div>
        </div>

      </nav>
    </header>
  )
}

export default Header
