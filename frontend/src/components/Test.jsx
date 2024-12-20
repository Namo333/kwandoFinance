import { useState } from 'react';
import Success from './alerts/Success';

const Test = () => {
  const [formData, setFormData] = useState({
    service: '',
    amount: '',
    creditHistory: '',
    incomeProof: '',
    name: '',
    phone: '',
  });

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [step, setStep] = useState(1); // Для отслеживания шагов

  // Обработка изменения полей формы
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Валидация ответа на текущем шаге
  const validateStep = () => {
    switch (step) {
      case 1:
        if (!formData.service) {
          setError('Пожалуйста, выберите услугу.');
          return false;
        }
        break;
      case 2:
        if (!formData.amount) {
          setError('Пожалуйста, укажите сумму.');
          return false;
        }
        break;
      case 3:
        if (!formData.creditHistory) {
          setError('Пожалуйста, выберите кредитную историю.');
          return false;
        }
        break;
      case 4:
        if (!formData.incomeProof) {
          setError('Пожалуйста, подтвердите доход.');
          return false;
        }
        break;
      case 5:
        if (!formData.name || !formData.phone) {
          setError('Пожалуйста, укажите имя и телефон.');
          return false;
        }
        break;
      default:
        return true;
    }
    setError(''); // Если все валидно, убираем ошибку
    return true;
  };

  // Переход на следующий шаг с валидацией
  const handleNextStep = () => {
    if (validateStep()) {
      if (step < 5) {
        setStep(step + 1);
      }
    }
  };

  // Отправка данных формы (заглушка для отправки данных на сервер)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      setError(''); // Очищаем ошибки перед отправкой
      setSuccessMessage('Данные успешно отправлены!');

      // Здесь может быть реальная отправка на сервер
      console.log('Отправка данных:', formData);

      // Сброс сообщения об успешной отправке через 7 секунд
      setTimeout(() => {
        setSuccessMessage('');
      }, 7000);
    }
  };

  // Определение прогресс-бара
  const progressWidth = `${(step / 5) * 100}%`;

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

          {/* Прогресс-бар */}
          <div className="flex justify-center items-center mt-4 mx-4 gap-1">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className={`h-1.5 w-full ${step > index ? 'bg-blue-600' : 'bg-gray-200'} rounded-full`}
              />
            ))}
          </div>

          <form onSubmit={handleSubmit} className="p-4">
            {step === 1 && (
              <>
                <h1>Вопрос 1</h1>
                <p className="mt-1 text-gray-800 font-bold text-[27px]">Какую услугу Вы хотите получить?</p>
                <div className="mt-4 flex flex-col gap-2">
                  <p className='mb-[5px] text-gray-400'>Выберите только один вариант ответа</p>
                  <label>
                    <input
                      type="radio"
                      name="service"
                      value="Получить деньги за 1 час"
                      onChange={handleChange}
                    />{' '}
                    Получить деньги за 1 час
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="service"
                      value="Рефинансирование"
                      onChange={handleChange}
                    />{' '}
                    Рефинансирование
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="service"
                      value="Увеличить имеющийся кредит"
                      onChange={handleChange}
                    />{' '}
                    Увеличить имеющийся кредит
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="service"
                      value="Банкротство"
                      onChange={handleChange}
                    />{' '}
                    Банкротство
                  </label>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <h1>Вопрос 2</h1>
                <p className="mt-1 text-gray-800 font-bold text-[27px]">Какая сумма Вам необходима?</p>
                <p className='mb-[5px] mt-4 text-gray-400'>Напишите сумму от 50.000</p>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  className="mt-2 w-full p-2 border rounded-md"
                  placeholder="Введите сумму"
                />
              </>
            )}

            {step === 3 && (
              <>
                <h1>Вопрос 3</h1>
                <p className="mt-1 text-gray-800 font-bold text-[27px]">Как Вы оцениваете свою кредитную историю?</p>
                <div className="mt-4 flex flex-col gap-2">
                  <p className='mb-[5px] text-gray-400'>Выберите только один вариант ответа</p>
                  <label>
                    <input
                      type="radio"
                      name="creditHistory"
                      value="Плохая (есть текущие просрочки)"
                      onChange={handleChange}
                    />{' '}
                    Плохая (есть текущие просрочки)
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="creditHistory"
                      value="Средняя (просрочки были, сейчас нет)"
                      onChange={handleChange}
                    />{' '}
                    Средняя (просрочки были, сейчас нет)
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="creditHistory"
                      value="Хорошая (платежи вовремя или досрочно)"
                      onChange={handleChange}
                    />{' '}
                    Хорошая (платежи вовремя или досрочно)
                  </label>
                </div>
              </>
            )}

            {step === 4 && (
              <>
                <h1>Вопрос 4</h1>
                <p className="mt-1 text-gray-800 font-bold text-[27px]">Можете ли Вы подтвердить доход?</p>
                <div className="mt-4 flex flex-col gap-2">
                  <p className='mb-[5px] text-gray-400'>Выберите только один вариант ответа</p>
                  <label>
                    <input
                      type="radio"
                      name="incomeProof"
                      value="Да, официальный доход"
                      onChange={handleChange}
                    />{' '}
                    Да, официальный доход
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="incomeProof"
                      value="Да, косвенный доход"
                      onChange={handleChange}
                    />{' '}
                    Да, косвенный доход
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="incomeProof"
                      value="Не могу подтвердить доход"
                      onChange={handleChange}
                    />{' '}
                    Не могу подтвердить доход
                  </label>
                </div>
              </>
            )}

            {step === 5 && (
              <>
                <h1>Вопрос 5</h1>
                <p className="mt-1 text-gray-800 font-bold text-[27px]">Напишите ваше имя и ваш номер телефона</p>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 w-full p-2 border rounded-md"
                  placeholder="Введите ваше имя"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-2 w-full p-2 border rounded-md"
                  placeholder="Введите ваш номер телефона"
                />
              </>
            )}

            {/* Отображение ошибки */}
            {error && <p className="text-red-500 text-xs mt-2">{error}</p>}

            {/* Кнопки управления */}
            <div className="flex justify-between mt-6">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="py-2 px-4 text-sm font-medium rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
                >
                  Назад
                </button>
              )}
              {step < 5 && (
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="py-2 px-4 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                >
                  Далее
                </button>
              )}
              {step === 5 && (
                <button
                  type="submit"
                  className="py-2 px-4 text-sm font-medium rounded-lg bg-green-600 text-white hover:bg-green-700"
                >
                  Отправить
                </button>
              )}
            </div>

            {/* Отображение сообщения об успехе */}
            {successMessage && (
              <Success message={successMessage} onClose={() => setSuccessMessage('')} />
            )}

          </form>
        </div>
      </div>
    </div>
  );
};

export default Test;
