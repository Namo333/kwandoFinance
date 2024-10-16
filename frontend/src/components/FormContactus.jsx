import { useState, useEffect } from 'react';
import Success from './alerts/Success';

const FormContactus = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      info: '',
    });
  
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setError(''); // Сброс ошибки
      setSuccessMessage(''); // Сброс сообщения об успехе
  
      const { name, email, phone, info } = formData;
  
      // Проверка на заполнение всех полей
      if (!name || !email || !phone || !info) {
        setError('Пожалуйста, заполните все поля.');
        return;
      }
  
      // Если все поля заполнены, отправляем данные (например, через запрос на сервер)
      console.log(formData);
  
      // Отображаем сообщение об успешной отправке
      setSuccessMessage('Данные успешно отправлены!');
  
      // Через 7 секунд скрываем сообщение
      setTimeout(() => {
        setSuccessMessage('');
      }, 7000);
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* Поле ФИО */}
            <div className="relative">
              <input
                onChange={handleChange}
                name="name"
                type="text"
                id="hs-tac-input-name"
                value={formData.name}
                className="peer p-4 block w-full bg-[#E7E7E760] border-transparent rounded-lg text-sm text-[#00000091] placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                focus:pt-6
                focus:pb-2
                [&:not(:placeholder-shown)]:pt-6
                [&:not(:placeholder-shown)]:pb-2
                autofill:pt-6
                autofill:pb-2"
                placeholder="ФИО"
              />
              <label
                htmlFor="hs-tac-input-name"
                className="absolute top-0 start-0 p-4 h-full text-black text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                peer-focus:text-xs
                peer-focus:-translate-y-1.5
                peer-focus:text-black
                peer-[:not(:placeholder-shown)]:text-xs
                peer-[:not(:placeholder-shown)]:-translate-y-1.5
                peer-[:not(:placeholder-shown)]:text-black"
              >
                ФИО
              </label>
            </div>
  
            {/* Поле Почта */}
            <div className="relative">
              <input
                onChange={handleChange}
                name="email"
                type="email"
                id="hs-tac-input-email"
                value={formData.email}
                className="peer p-4 block w-full bg-[#E7E7E760] border-transparent rounded-lg text-sm text-[#00000091] placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                focus:pt-6
                focus:pb-2
                [&:not(:placeholder-shown)]:pt-6
                [&:not(:placeholder-shown)]:pb-2
                autofill:pt-6
                autofill:pb-2"
                placeholder="Почта"
              />
              <label
                htmlFor="hs-tac-input-email"
                className="absolute top-0 start-0 p-4 h-full text-black text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                peer-focus:text-xs
                peer-focus:-translate-y-1.5
                peer-focus:text-black
                peer-[:not(:placeholder-shown)]:text-xs
                peer-[:not(:placeholder-shown)]:-translate-y-1.5
                peer-[:not(:placeholder-shown)]:text-black"
              >
                Почта
              </label>
            </div>
  
            {/* Поле Телефон */}
            <div className="relative">
              <input
                onChange={handleChange}
                name="phone"
                type="tel"
                id="hs-tac-input-phone"
                value={formData.phone}
                className="peer p-4 block w-full bg-[#E7E7E760] border-transparent rounded-lg text-sm text-[#00000091] placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                focus:pt-6
                focus:pb-2
                [&:not(:placeholder-shown)]:pt-6
                [&:not(:placeholder-shown)]:pb-2
                autofill:pt-6
                autofill:pb-2"
                placeholder="Номер телефона"
              />
              <label
                htmlFor="hs-tac-input-phone"
                className="absolute top-0 start-0 p-4 h-full text-black text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                peer-focus:text-xs
                peer-focus:-translate-y-1.5
                peer-focus:text-black
                peer-[:not(:placeholder-shown)]:text-xs
                peer-[:not(:placeholder-shown)]:-translate-y-1.5
                peer-[:not(:placeholder-shown)]:text-black"
              >
                Номер телефона
              </label>
            </div>
  
            {/* Поле Сообщение */}
            <div className="relative">
              <textarea
                onChange={handleChange}
                name="info"
                id="hs-tac-message"
                value={formData.info}
                className="peer p-4 block w-full bg-[#E7E7E760] border-transparent rounded-lg text-sm text-[#00000091] placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                focus:pt-6
                focus:pb-2
                [&:not(:placeholder-shown)]:pt-6
                [&:not(:placeholder-shown)]:pb-2
                autofill:pt-6
                autofill:pb-2"
                placeholder="Что вам нужно?"
              ></textarea>
              <label
                htmlFor="hs-tac-message"
                className="absolute top-0 start-0 p-4 h-full text-black text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                peer-focus:text-xs
                peer-focus:-translate-y-1.5
                peer-focus:text-black
                peer-[:not(:placeholder-shown)]:text-xs
                peer-[:not(:placeholder-shown)]:-translate-y-1.5
                peer-[:not(:placeholder-shown)]:text-black"
              >
                Что вам нужно?
              </label>
            </div>
          </div>
  
          <div className="mt-2">
            <p className="text-xs text-neutral-500">
              Все поля обязательны для заполнения
            </p>
  
            {/* Отображение сообщения об ошибке */}
            {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
  
            <p className="mt-5">
              <button
                type="submit"
                className="group inline-flex items-center gap-x-2 py-2 px-6 bg-blue-600 font-medium text-sm text-white rounded-[13px] focus:outline-none"
              >
                Оставить заявку
              </button>
            </p>
          </div>
        </form>
  
        {/* Показываем Success, если есть сообщение об успехе */}
        {successMessage && (
          <Success message={successMessage} onClose={() => setSuccessMessage('')} />
        )}
      </div>
    );
  };
  
  export default FormContactus;