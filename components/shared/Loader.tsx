const Loader = ({text}: {text?: string}) => (
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center space-y-6">
    <div className="w-16 h-16 border-8 border-gray-300 border-t-gray-500 rounded-full animate-spin"></div>

    <p className="text-gray-600 text-2xl font-semibold animate-pulse">
      {text ? text : "Loading..."}
    </p>
  </div>
);

export default Loader;
