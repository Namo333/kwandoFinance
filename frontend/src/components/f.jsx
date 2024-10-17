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
      setSuccessMessage('Форма успешно отправлена!');

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
      className="hs-overlay hidden fixed inset-0 z-[80] overflow-y-auto"
      role="dialog"
      tabIndex="-1"
      aria-labelledby="hs-scale-animation-modal-label"
    >
      <div className="hs-overlay-animation-target transition-all duration-200 sm:max-w-lg sm:w-full mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
        <div className="w-full flex flex-col bg-white border shadow-sm rounded-xl">
          {/* Заголовок */}
          <div className="flex justify-between items-center py-3 px-4 border-b">
            <h3 id="hs-scale-animation-modal-label" className="font-bold text-gray-800">
              Опрос по кредиту
            </h3>
            <button
              type="button"
              className="inline-flex justify-center items-center rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200"
              data-hs-overlay="#hs-scale-animation-modal"
            >
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Прогресс-бар, поделеный на 5 равных полосок */}
          <div className="flex justify-center items-center mt-4 mx-4 gap-1">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className={`h-1.5 w-full ${step > index ? 'bg-blue-600' : 'bg-gray-200'} rounded-full`}
              />
            ))}
          </div>

          {/* Форма */}
          <form onSubmit={handleSubmit} className="p-4">
            {step === 1 && (
              <>
                <p className="mt-1 text-gray-800">1) Какую услугу Вы хотите получить?</p>
                <div className="mt-4 flex flex-col gap-2">
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
                <p className="mt-7 text-gray-800">2) Какая сумма Вам необходима?</p>
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
                <p className="mt-7 text-gray-800">3) Как Вы оцениваете свою кредитную историю?</p>
                <div className="mt-4 flex flex-col gap-2">
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
                <p className="mt-7 text-gray-800">4) Можете ли Вы подтвердить доход?</p>
                <div className="mt-4 flex flex-col gap-2">
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
                <p className="mt-7 text-gray-800">Ваше имя*</p>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 w-full p-2 border rounded-md"
                  placeholder="Введите имя"
                />
                <p className="mt-4 text-gray-800">Ваш номер телефона*</p>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-2 w-full p-2 border rounded-md"
                  placeholder="Введите номер телефона"
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
