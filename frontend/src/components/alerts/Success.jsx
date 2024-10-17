const Success = ({ message, onClose }) => {
  return (
    <div
      className="fixed bottom-4 right-4 max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg z-50 transition-opacity duration-500 ease-out opacity-100"
      role="alert"
      aria-labelledby="hs-toast-success-example-label"
      style={{
        animation: 'fadeIn 0.5s, fadeOut 0.5s 6.5s forwards', // Анимация для появления и исчезновения
      }}
    >
      <div className="flex p-4">
        <div className="shrink-0">
          <svg
            className="shrink-0 size-4 text-teal-500 mt-0.5"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
          </svg>
        </div>
        <div className="ml-3">
          <p id="hs-toast-success-example-label" className="text-sm text-gray-700">
            {message}
          </p>
        </div>
      </div>
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 focus:outline-none"
      >
        ×
      </button>
    </div>
  );
};

export default Success;
