const Spinner = () => {
  return (
    <div class="min-h-60 flex flex-col bg-white border shadow-sm rounded-xl">
      <div class="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
        <div class="flex justify-center">
          <div class="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;