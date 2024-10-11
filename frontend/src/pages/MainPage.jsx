import Header from "../components/Header"
import BanerHead from "../components/BanerHead"
import Footer from "../components/Footer"
import ContactUs from "../components/ContactUs"
import BanerTest from "../components/BanerTest"

import {HeroBlock, ComponyBlock} from "../components/mainPageComponent/exportMainComponents"


const MainPage = () =>{
    return (
        <div className="min-h-full">
            <BanerHead/>
            <Header/>

            <main>
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <section className="pt-[3.5rem]">
                        <HeroBlock/>
                    </section>

                    <section>
                        <ComponyBlock/>
                    </section>

                    <section>
                        <div class="py-10 lg:py-14 mx-auto">
                            <div class="relative p-6 md:p-16">

                                <div class="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
                                <div class="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
                                    <h2 class="text-2xl text-gray-800 font-bold sm:text-3xl">
                                    Fully customizable rules to match your unique needs
                                    </h2>


                                    <nav class="grid gap-4 mt-5 md:mt-10" aria-label="Tabs" role="tablist" aria-orientation="vertical">
                                    <button type="button" class="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-none focus:bg-gray-200 p-4 md:p-5 rounded-xl active" id="tabs-with-card-item-1" aria-selected="true" data-hs-tab="#tabs-with-card-1" aria-controls="tabs-with-card-1" role="tab">
                                        <span class="flex gap-x-6">
                                        <svg class="shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/></svg>
                                        <span class="grow">
                                            <span class="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800">Advanced tools</span>
                                            <span class="block mt-1 text-gray-800">Use Preline thoroughly thought and automated libraries to manage your businesses.</span>
                                        </span>
                                        </span>
                                    </button>

                                    <button type="button" class="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-none focus:bg-gray-200 p-4 md:p-5 rounded-xl" id="tabs-with-card-item-2" aria-selected="false" data-hs-tab="#tabs-with-card-2" aria-controls="tabs-with-card-2" role="tab">
                                        <span class="flex gap-x-6">
                                        <svg class="shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
                                        <span class="grow">
                                            <span class="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800">Smart dashboards</span>
                                            <span class="block mt-1 text-gray-800">Quickly Preline sample components, copy-paste codes, and start right off.</span>
                                        </span>
                                        </span>
                                    </button>

                                    <button type="button" class="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-none focus:bg-gray-200 p-4 md:p-5 rounded-xl" id="tabs-with-card-item-3" aria-selected="false" data-hs-tab="#tabs-with-card-3" aria-controls="tabs-with-card-3" role="tab">
                                        <span class="flex gap-x-6">
                                        <svg class="shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
                                        <span class="grow">
                                            <span class="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800">Powerful features</span>
                                            <span class="block mt-1 text-gray-800">Reduce time and effort on building modern look design with Preline only.</span>
                                        </span>
                                        </span>
                                    </button>
                                    </nav>

                                </div>


                                <div class="lg:col-span-6">
                                    <div class="relative">
                            
                                    <div>
                                        <div id="tabs-with-card-1" role="tabpanel" aria-labelledby="tabs-with-card-item-1">
                                        
                                        <img class="shadow-xl shadow-gray-200 rounded-xl" src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&h=720&q=80" alt="Features Image" />
                                        </div>

                                        <div id="tabs-with-card-2" class="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-2">
                                        <img class="shadow-xl shadow-gray-200 rounded-xl" src="https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&h=720&q=80" alt="Features Image" />
                                        </div>

                                        <div id="tabs-with-card-3" class="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-3">
                                        <img class="shadow-xl shadow-gray-200 rounded-xl" src="https://images.unsplash.com/photo-1598929213452-52d72f63e307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&h=720&q=80" alt="Features Image" />
                                        </div>
                                    </div>

                                    <div class="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
                                        <svg class="w-16 h-auto text-orange-500" width="121" height="135" viewBox="0 0 121 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
                                        <path d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
                                        <path d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
                                        </svg>
                                    </div>

                                    </div>
                                </div>

                                </div>

                                <div class="absolute inset-0 grid grid-cols-12 size-full">
                                <div class="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full"></div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section>
                        <div class="py-10 lg:py-14 mx-auto">
                          <div class="aspect-w-16 aspect-h-7">
                            <img class="w-full h-[400px] object-cover rounded-xl" src="https://images.unsplash.com/photo-1624571409412-1f253e1ecc89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="Features Image" />
                          </div>

                          <div class="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
                            <div class="lg:col-span-1">
                              <h2 class="font-bold text-2xl md:text-3xl text-gray-800">
                                We tackle the challenges start-ups face
                              </h2>
                              <p class="mt-2 md:mt-4 text-gray-500">
                                Besides working with start-up enterprises as a partner for digitalization, we have built enterprise products for common pain points that we have encountered in various products and projects.
                              </p>
                            </div>

                            <div class="lg:col-span-2">
                              <div class="grid sm:grid-cols-2 gap-8 md:gap-12">
                                <div class="flex gap-x-5">
                                  <svg class="shrink-0 mt-1 size-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="10" x="3" y="11" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" x2="8" y1="16" y2="16"/><line x1="16" x2="16" y1="16" y2="16"/></svg>
                                  <div class="grow">
                                    <h3 class="text-lg font-semibold text-gray-800">
                                      Creative minds
                                    </h3>
                                    <p class="mt-1 text-gray-600">
                                      We choose our teams carefully. Our people are the secret to great work.
                                    </p>
                                  </div>
                                </div>

                                <div class="flex gap-x-5">
                                  <svg class="shrink-0 mt-1 size-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>
                                  <div class="grow">
                                    <h3 class="text-lg font-semibold text-gray-800">
                                      Simple and affordable
                                    </h3>
                                    <p class="mt-1 text-gray-600">
                                      From boarding passes to movie tickets, there's pretty much nothing you can't store with Preline.
                                    </p>
                                  </div>
                                </div>

                                <div class="flex gap-x-5">
                                  <svg class="shrink-0 mt-1 size-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                                  <div class="grow">
                                    <h3 class="text-lg font-semibold text-gray-800">
                                      Industry-leading documentation
                                    </h3>
                                    <p class="mt-1 text-gray-600">
                                      Our documentation and extensive Client libraries contain everything a business needs to build a custom integration.
                                    </p>
                                  </div>
                                </div>

                                <div class="flex gap-x-5">
                                  <svg class="shrink-0 mt-1 size-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                                  <div class="grow">
                                    <h3 class="text-lg font-semibold text-gray-800">
                                      Designing for people
                                    </h3>
                                    <p class="mt-1 text-gray-600">
                                      We actively pursue the right balance between functionality and aesthetics, creating delightful experiences.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                    </section>

                    
                    <section className="pb-[150px] max-lg:pb-[12rem] max-md:pb-[12rem] max-[767px]:pb-[15rem] max-[398px]:pb-[18rem] max-[290px]:pb-[18rem]">
                        <BanerTest/>
                    </section>

                    <section className="">
                        <div class="lg:py-14 mx-auto">
                          <div class=" mx-auto">
                            <div class="grid gap-12">
                              <div>
                                <h2 class="text-3xl text-gray-800 font-bold lg:text-4xl">
                                    Преимущества работы с нами
                                </h2>
                                <p class="mt-3 text-gray-800">
                                  For as long as there have been cities, the public square has been a fundamental part of the urban landscape - an open, approachable space to meet and engage with friends and neighbours. Space aims to capture this spirit of bringing people together in an exciting, welcoming environment.
                                </p>
                              </div>
                                <div class="py-10 lg:py-14 mx-auto">
                                    <div class="max-w-4xl mx-auto">
                                        <div class="grid md:grid-cols-2 gap-6 lg:gap-12">
                                        <div class="space-y-6 lg:space-y-10">
                                            <div class="flex gap-x-5 sm:gap-x-8">
                                            <svg class="shrink-0 mt-2 size-8 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="10" x="3" y="11" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" x2="8" y1="16" y2="16"/><line x1="16" x2="16" y1="16" y2="16"/></svg>
                                            <div class="grow">
                                                <h3 class="text-base sm:text-lg font-semibold text-gray-800">
                                                Профессионализм
                                                </h3>
                                                <p class="mt-1 text-gray-600">
                                                В нашу команду входят только профессиональные брокеры.
                                                </p>
                                            </div>
                                            </div>
                                            <div class="flex gap-x-5 sm:gap-x-8">
                                            <svg class="shrink-0 mt-2 size-8 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
                                                <div class="grow">
                                                    <h3 class="text-base sm:text-lg font-semibold text-gray-800">
                                                    Информативность
                                                    </h3>
                                                    <p class="mt-1 text-gray-600">
                                                    В нашем распоряжении находится вся достоверная и актуальная информация по кредитным предложениям.
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="flex gap-x-5 sm:gap-x-8">
                                                <svg class="shrink-0 mt-2 size-8 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                                                <div class="grow">
                                                    <h3 class="text-base sm:text-lg font-semibold text-gray-800">
                                                    Экономия времени
                                                    </h3>
                                                    <p class="mt-1 text-gray-600">
                                                    Благодаря отточенной схеме оформление займа проходит в максимально сжатые сроки
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="space-y-6 lg:space-y-10">
                                            <div class="flex gap-x-5 sm:gap-x-8">
                                            <svg class="shrink-0 mt-2 size-8 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
                                            <div class="grow">
                                                <h3 class="text-base sm:text-lg font-semibold text-gray-800">
                                                Надежность
                                                </h3>
                                                <p class="mt-1 text-gray-600">
                                                Наши специалисты контролируют процесс оформления документации
                                                </p>
                                            </div>
                                            </div>
                                            <div class="flex gap-x-5 sm:gap-x-8">
                                            <svg class="shrink-0 mt-2 size-8 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                                            <div class="grow">
                                                <h3 class="text-base sm:text-lg font-semibold text-gray-800">
                                                Консультация
                                                </h3>
                                                <p class="mt-1 text-gray-600">
                                                Анализ Вашей кредитной истории и консультационные услуги выполняются абсолютно бесплатно.
                                                </p>
                                            </div>
                                            </div>
                                            <div class="flex gap-x-5 sm:gap-x-8">
                                            <svg class="shrink-0 mt-2 size-8 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>
                                            <div class="grow">
                                                <h3 class="text-base sm:text-lg font-semibold text-gray-800">
                                                Хороший шанс
                                                </h3>
                                                <p class="mt-1 text-gray-600">
                                                Мы способны увеличить Ваши шансы на получение положительного ответа по заявке
                                                </p>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          </div>
                        </div>
                    </section>

                    <section className="">
                        <div>
                            <div class="xl:px-0 py-5 lg:pb-20 mx-auto">
                                <div class="max-w-3xl mb-10 lg:mb-14">
                                    <h2 class="font-semibold text-2xl md:text-4xl md:leading-tight text-gray-800">Наш подход</h2>
                                    <p class="mt-1 text-gray-800">This profound insight guides our comprehensive strategy — from meticulous research and strategic planning to the seamless execution of brand development and website or product deployment.</p>
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

                                        <a class="group inline-flex items-center gap-x-2 py-2 px-3 bg-blue-600 font-medium text-sm text-white rounded-[13px] focus:outline-none" href="#">
                                            <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path class="opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:delay-100 transition" d="M14.05 2a9 9 0 0 1 8 7.94"></path><path class="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition" d="M14.05 6A5 5 0 0 1 18 10"></path></svg>
                                            Оставить заявку
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div class="py-10 lg:py-14 mx-auto">
                            <div class="grid md:grid-cols-5 gap-10">
                                <div class="md:col-span-2">
                                <div class="max-w-xs">
                                    <h2 class="text-2xl font-bold md:text-4xl md:leading-tight">Frequently<br></br>asked questions</h2>
                                    <p class="mt-1 hidden md:block text-gray-600">Answers to the most frequently asked questions.</p>
                                </div>
                                </div>

                                <div class="md:col-span-3">
                                <div class="hs-accordion-group divide-y divide-gray-200">
                                    <div class="hs-accordion pb-3 active" id="hs-basic-with-title-and-arrow-stretched-heading-one">
                                    <button class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-expanded="true" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
                                        Can I cancel at anytime?
                                        <svg class="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                                        <svg class="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                                    </button>
                                    <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
                                        <p class="text-gray-600">
                                        Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback.
                                        </p>
                                    </div>
                                    </div>

                                    <div class="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-two">
                                    <button class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-expanded="false" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two">
                                        My team has credits. How do we use them?
                                        <svg class="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                                        <svg class="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                                    </button>
                                    <div id="hs-basic-with-title-and-arrow-stretched-collapse-two" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
                                        <p class="text-gray-600">
                                        Once your team signs up for a subscription plan. This is where we sit down, grab a cup of coffee and dial in the details.
                                        </p>
                                    </div>
                                    </div>

                                    <div class="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-three">
                                    <button class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-expanded="false" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three">
                                        How does Preline's pricing work?
                                        <svg class="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                                        <svg class="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                                    </button>
                                    <div id="hs-basic-with-title-and-arrow-stretched-collapse-three" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three">
                                        <p class="text-gray-600">
                                        Our subscriptions are tiered. Understanding the task at hand and ironing out the wrinkles is key.
                                        </p>
                                    </div>
                                    </div>

                                    <div class="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-four">
                                    <button class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-expanded="false" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four">
                                        How secure is Preline?
                                        <svg class="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                                        <svg class="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                                    </button>
                                    <div id="hs-basic-with-title-and-arrow-stretched-collapse-four" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four">
                                        <p class="text-gray-600">
                                        Protecting the data you trust to Preline is our first priority. This part is really crucial in keeping the project in line to completion.
                                        </p>
                                    </div>
                                    </div>

                                    <div class="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-five">
                                    <button class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-expanded="false" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five">
                                        How do I get access to a theme I purchased?
                                        <svg class="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                                        <svg class="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                                    </button>
                                    <div id="hs-basic-with-title-and-arrow-stretched-collapse-five" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five">
                                        <p class="text-gray-600">
                                        If you lose the link for a theme you purchased, don't panic! We've got you covered. You can login to your account, tap your avatar in the upper right corner, and tap Purchases. If you didn't create a login or can't remember the information, you can use our handy Redownload page, just remember to use the same email you originally made your purchases with.
                                        </p>
                                    </div>
                                    </div>

                                    <div class="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-six">
                                    <button class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-expanded="false" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six">
                                        Upgrade License Type
                                        <svg class="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                                        <svg class="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                                    </button>
                                    <div id="hs-basic-with-title-and-arrow-stretched-collapse-six" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six">
                                        <p class="text-gray-600">
                                        There may be times when you need to upgrade your license from the original type you purchased and we have a solution that ensures you can apply your original purchase cost to the new license purchase.
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>

                    </section>

                    <section>
                        <ContactUs/>
                    </section>
                </div>
            </main>
            
            <Footer />

        </div>
    )
}

export default MainPage