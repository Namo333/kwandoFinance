import { useState } from 'react';
import Success from './alerts/Success';

const Test = () => {
  const [formData, setFormData] = useState({
    amount: '',
    creditHistory: '',
    incomeProof: '',
    name: '',
    phone: '',
    service: '',
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

    // Проверка на заполнение всех обязательных полей
    if (
      !formData.amount ||
      !formData.creditHistory ||
      !formData.incomeProof ||
      !formData.name ||
      !formData.phone ||
      !formData.service
    ) {
      setError('Пожалуйста, заполните все обязательные поля.');
      return;
    }

    // Если все поля заполнены, выводим сообщение об успешной отправке
    setError(''); // очищаем ошибку
    setSuccessMessage('Форма успешно отправлена!'); // сообщение об успешной отправке

    // Через 7 секунд скрываем сообщение об успехе
    setTimeout(() => {
      setSuccessMessage('');
    }, 7000);
    
    console.log(formData); // здесь отправка данных формы на сервер или другое действие
  };

  return (
    <div
      id="hs-scale-animation-modal"
      className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
      role="dialog"
      tabIndex="-1"
      aria-labelledby="hs-scale-animation-modal-label"
    >
      <div
        className="hs-overlay-animation-target hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center"
      >
        <div className="w-full flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto">
          <div className="flex justify-between items-center py-3 px-4 border-b">
            <h3 id="hs-scale-animation-modal-label" className="font-bold text-gray-800">
              Опрос по кредиту
            </h3>
            <button
              type="button"
              className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
              aria-label="Close"
              data-hs-overlay="#hs-scale-animation-modal"
            >
              <span className="sr-only">Close</span>
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-4 overflow-y-auto">
            <p className="mt-1 text-gray-800">
              1) Какую услугу Вы хотите получить?
            </p>
            <div className="mt-2">
              <label>
                <input
                  type="radio"
                  name="service"
                  value="Получить деньги за 1 час"
                  onChange={handleChange}
                />
                Получить деньги за 1 час
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="service"
                  value="Рефинансирование"
                  onChange={handleChange}
                />
                Рефинансирование
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="service"
                  value="Увеличить имеющийся кредит"
                  onChange={handleChange}
                />
                Увеличить имеющийся кредит
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="service"
                  value="Банкротство"
                  onChange={handleChange}
                />
                Банкротство
              </label>
            </div>

            <p className="mt-4 text-gray-800">2) Какая сумма Вам необходима?</p>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="mt-2 w-full p-2 border rounded-md"
              placeholder="Введите сумму"
            />

            <p className="mt-4 text-gray-800">3) Как Вы оцениваете свою кредитную историю?</p>
            <div className="mt-2">
              <label>
                <input
                  type="radio"
                  name="creditHistory"
                  value="Плохая (есть текущие просрочки)"
                  onChange={handleChange}
                />
                Плохая (есть текущие просрочки)
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="creditHistory"
                  value="Средняя (просрочки были, сейчас нет)"
                  onChange={handleChange}
                />
                Средняя (просрочки были, сейчас нет)
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="creditHistory"
                  value="Хорошая (платежи вовремя или досрочно)"
                  onChange={handleChange}
                />
                Хорошая (платежи вовремя или досрочно)
              </label>
            </div>

            <p className="mt-4 text-gray-800">4) Можете ли Вы подтвердить доход?</p>
            <div className="mt-2">
              <label>
                <input
                  type="radio"
                  name="incomeProof"
                  value="Да, официальный доход"
                  onChange={handleChange}
                />
                Да, официальный доход
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="incomeProof"
                  value="Да, косвенный доход"
                  onChange={handleChange}
                />
                Да, косвенный доход
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="incomeProof"
                  value="Не могу подтвердить доход"
                  onChange={handleChange}
                />
                Не могу подтвердить доход
              </label>
            </div>

            <p className="mt-4 text-gray-800">Ваше имя*</p>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-2 w-full p-2 border rounded-md"
              placeholder="Введите имя"
              required
            />

            <p className="mt-4 text-gray-800">Ваш телефон*</p>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-2 w-full p-2 border rounded-md"
              placeholder="Введите телефон"
              required
            />

            {/* Отображаем ошибку, если есть */}
            {error && <p className="text-red-500 text-xs mt-2">{error}</p>}

            <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t mt-4">
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                data-hs-overlay="#hs-scale-animation-modal"
              >
                Закрыть
              </button>
              <button
                type="submit"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
              >
                Отправить
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Сообщение об успешной отправке */}
      {successMessage && (
        <Success message={successMessage} onClose={() => setSuccessMessage('')} />
      )}
    </div>
  );
};

export default Test;
