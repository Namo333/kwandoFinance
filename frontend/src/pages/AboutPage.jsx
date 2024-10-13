import BanerHead from "../components/BanerHead"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Faq from "../components/Faq"
import ContactUs from "../components/ContactUs"


const sections = [
    { component: <Faq />, className: "" },
    { component: <ContactUs />, className: "" },
  ];
  

const AboutPage = () => {
    return (
        <div className="min-h-full">
            <BanerHead/>
            <Header/>
            <main>
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

                    <section>
                        <div className="space-y-5 md:space-y-8">
                            <div class="space-y-3">
                              <h2 class="text-2xl font-bold md:text-3xl ">О компании Квандо Финанс</h2>

                              <p class="text-lg text-gray-800 ">Компания «Квандо Финанс» была основана в 2010 году. За всё время работы мы обрели достаточно большое количество довольных клиентов. Большая часть из них стали нашими друзьями и рекомендуют нас своим знакомым. Сотрудники компании – это профессионалы финансового рынка, которые закончили профильные учебные заведения и в прошлом работали в лучших банках страны.</p>
                            </div>

                            <p class="text-lg text-gray-800 ">Юристы нашей компании имеют многолетний опыт работы в финансовой сфере, грамотно и на высоком уровне подготавливают документы, а также проводят процедуру банкротства.</p>

                            <figure>
                              <img class="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Blog Image" />
                              <figcaption class="mt-3 text-sm text-center text-gray-500 dark:text-neutral-500">
                                A woman sitting at a table.
                              </figcaption>
                            </figure>

                            <p class="text-lg text-gray-800 ">В настоящее время мы успешно и эффективно осуществляем помощь в получении кредита или ипотеки на всей территории Российской Федерации. За годы работы мы зарекомендовали себя на рынке кредитования как надёжные партнёры.</p>

                            <p class="text-lg text-gray-800 ">Наши партнёры: более 50 банков РФ, частные инвесторы, кредитные кооперативы, микро-финансовые компании.</p>

                            <p class="text-lg text-gray-800 ">О качестве нашей работы говорят многочисленные, положительные отзывы наших благодарных клиентов. Специалисты компании регулярно проходят обучения, для повышения квалификации, на специализированных тренингах и семинарах от лучших спикеров и профессионалов в банковской сфере.</p>

                            <p class="text-lg text-gray-800 ">Обратившись в нашу компанию, вы можете рассчитывать на профессиональную, всестороннюю помощь в получении любого кредита.</p>

                            <p class="text-lg text-gray-800 ">Компания «Квандо Финанс» официальный партнер кредитных организаций, предоставляющих займы и кредиты на основании действующего законодательства РФ. Лицензии: АО «Банк БЖФ» — № 3138, ПАО «Совкомбанк» — №963, АО «Альфа-банк» — № 1326, ПАО «Норвик — Банк» № 902, ПАО «Промсвязьбанк» — № 3251 и др.</p>
                        </div>

                        <div class="space-y-3 my-[90px]">
                          <dl class="flex flex-col sm:flex-row gap-1">
                            <dt class="min-w-40">
                              <span class="block text-sm text-gray-500">Реквизиты компании </span>
                            </dt>
                            <dd>
                              <ul>
                                <li class="me-1 inline-flex items-center text-sm text-gray-800">
                                  ООО «Квандо Финанс»
                                </li>
                              </ul>
                            </dd>
                          </dl>

                          <dl class="flex flex-col sm:flex-row gap-1">
                            <dt class="min-w-40">
                              <span class="block text-sm text-gray-500">ИНН / КПП</span>
                            </dt>
                            <dd>
                              <ul>
                                <li class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800">
                                  
                                    ИНН 9724059950
                                </li>
                                <li class="me-1 inline-flex items-center text-sm text-gray-800">
                                  
                                    КПП 772401001
                                </li>
                              </ul>
                            </dd>
                          </dl>

                          <dl class="flex flex-col sm:flex-row gap-1">
                            <dt class="min-w-40">
                              <span class="block text-sm text-gray-500">ОГРН:</span>
                            </dt>
                            <dd>
                              <ul>
                                <li class="me-1 inline-flex items-center text-sm text-gray-800">
                                  1217700487950
                                </li>
                              </ul>
                            </dd>
                          </dl>

                          <dl class="flex flex-col sm:flex-row gap-1">
                            <dt class="min-w-40">
                              <span class="block text-sm text-gray-500">Банк ПАО «ПРОМСВЯЗЬБАНК»</span>
                            </dt>
                          </dl>

                          <dl class="flex flex-col sm:flex-row gap-1">
                            <dt class="min-w-40">
                              <span class="block text-sm text-gray-500">р/с</span>
                            </dt>
                            <dd>
                              <ul>
                                <li class="me-1 inline-flex items-center text-sm text-gray-800">
                                    40702810700000138916
                                </li>
                              </ul>
                            </dd>
                          </dl>

                          <dl class="flex flex-col sm:flex-row gap-1">
                            <dt class="min-w-40">
                              <span class="block text-sm text-gray-500">ИНН / КПП</span>
                            </dt>
                            <dd>
                              <ul>
                                <li class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800">
                                  
                                    ИНН 7744000912
                                </li>
                                <li class="me-1 inline-flex items-center text-sm text-gray-800">
                                  
                                    КПП 772201001
                                </li>
                              </ul>
                            </dd>
                          </dl>

                          <dl class="flex flex-col sm:flex-row gap-1">
                            <dt class="min-w-40">
                              <span class="block text-sm text-gray-500">БИК </span>
                            </dt>
                            <dd>
                              <ul>
                                <li class="me-1 inline-flex items-center text-sm text-gray-800">
                                  
                                    044525555
                                </li>
                              </ul>
                            </dd>
                          </dl>

                          <dl class="flex flex-col sm:flex-row gap-1">
                            <dt class="min-w-40">
                              <span class="block text-sm text-gray-500">к/c</span>
                            </dt>
                            <dd>
                              <ul>
                                <li class="me-1 inline-flex items-center text-sm text-gray-800">
                                  
                                    30101810400000000555 в ГУ БАНКА РОССИИ ПО ЦФО Банка России
                                </li>
                              </ul>
                            </dd>
                          </dl>
                        </div>

                    </section>

                    {sections.map((section, index) => (
                      <section key={index} className={section.className}>
                        {section.component}
                      </section>
                    ))}
                </div>
            </main>

            <Footer/>
        </div>
    )
}

export default AboutPage