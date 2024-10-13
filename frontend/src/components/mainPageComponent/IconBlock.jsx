const IconBlock = () => {
    return (
        <div class="py-10 lg:py-14 mx-auto">
        <div class="aspect-w-16 aspect-h-7">
          <img class="w-full h-[400px] object-cover rounded-xl" src="https://images.unsplash.com/photo-1624571409412-1f253e1ecc89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="Features Image" />
        </div>

        <div class="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div class="lg:col-span-1">
            <h2 class="font-bold text-2xl md:text-3xl text-gray-800">
              Мы готовы к сотрудничеству
            </h2>
            <p class="mt-2 md:mt-4 text-gray-500">
            Мы готовы работать с вами, даже если у вас есть следующие обстоятельства, которые могут затруднить получение кредита.
            </p>
          </div>

          <div class="lg:col-span-2">
            <div class="grid sm:grid-cols-2 gap-8 md:gap-12">
              <div class="flex gap-x-5">
                <svg class="shrink-0 mt-1 size-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="10" x="3" y="11" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" x2="8" y1="16" y2="16"/><line x1="16" x2="16" y1="16" y2="16"/></svg>
                <div class="grow">
                  <h3 class="text-lg font-semibold text-gray-800">
                    Наличие кредитов
                  </h3>
                  <p class="mt-1 text-gray-600">
                    У Вас уже есть несколько кредитов.
                  </p>
                </div>
              </div>

              <div class="flex gap-x-5">
                <svg class="shrink-0 mt-1 size-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>
                <div class="grow">
                  <h3 class="text-lg font-semibold text-gray-800">
                    Убытки компании
                  </h3>
                  <p class="mt-1 text-gray-600">
                    Ваша компания терпит убытки.
                  </p>
                </div>
              </div>

              <div class="flex gap-x-5">
                <svg class="shrink-0 mt-1 size-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                <div class="grow">
                  <h3 class="text-lg font-semibold text-gray-800">
                    Плохая кредитная история
                  </h3>
                  <p class="mt-1 text-gray-600">
                    Ваша кредитная история плохая.
                  </p>
                </div>
              </div>

              <div class="flex gap-x-5">
                <svg class="shrink-0 mt-1 size-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                <div class="grow">
                  <h3 class="text-lg font-semibold text-gray-800">
                    Отказы в кредитах
                  </h3>
                  <p class="mt-1 text-gray-600">
                  Вам не единожды отказывали в предоставлении кредита.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default IconBlock