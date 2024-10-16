import FormContactus from './FormContactus';

const ContactUs = () => {
    return (
        <div class="" id="contact-us">
          <div class="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
            <div class="max-w-3xl mb-10 lg:mb-14">
              <h2 class="text-black font-semibold text-2xl md:text-4xl md:leading-tight">Связаться с нами</h2>
              <p class="mt-1 text-gray-600">Какой бы ни была ваша цель – мы доставим вас туда.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
              <div class="md:order-2 border-b border-neutral-800 pb-10 mb-10 md:border-b-0 md:pb-0 md:mb-0">
                <FormContactus/>
              </div>
        
              <div class="space-y-14">
                <div class="flex gap-x-5">
                  <svg class="shrink-0 size-6 text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  <div class="grow">
                    <h4 class="text-black font-semibold">Наш адрес:</h4>
        
                    <address class="mt-1 text-gray-600 text-sm not-italic hover:text-gray-500 focus:outline-none focus:text-gray-500">
                      <a href="https://yandex.ru/maps/-/CDXEE620">
                      м. Павелецкая,<br></br>
                      5-й Монетчиковский переулок, 18
                      </a>
                    </address>
                  </div>
                </div>
                <div class="flex gap-x-5">
                  <svg class="shrink-0 size-6 text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"/><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"/></svg>
                  <div class="grow">
                    <h4 class="text-black font-semibold">Напишите нам:</h4>
        
                    <a class="mt-1 text-gray-600 text-sm hover:text-gray-500 focus:outline-none focus:text-gray-500" href="#mailto:example@site.co" target="_blank">
                        info@credit-ipoteka.com
                    </a>
                  </div>
                </div>
                <div class="flex gap-x-5">
                  <svg class="shrink-0 size-6 text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>
                  <div class="grow">
                    <h4 class="text-black font-semibold">FAQ</h4>
                    <p class="mt-1 text-gray-600">Найдите ответы на все ваши вопросы в нашем разделе часто задаваемых вопросов.</p>
                    <p class="mt-2">
                      <a class="group inline-flex items-center gap-x-2 font-medium text-sm text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline" href="#faq">
                        Посетить FAQ
                        <svg class="shrink-0 size-4 transition group-hover:translate-x-0.5 group-hover:translate-x-0 group-focus:translate-x-0.5 group-focus:translate-x-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default ContactUs