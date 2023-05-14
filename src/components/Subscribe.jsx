const Subscribe = () => {
  return (
    <div className="flex flex-col lg:flex-row p-6 items-center justify-between">
      <h1 className="font-bold text-2xl text-center">
        NOTIFY ME OF NEW COURSES AND OFFERS
      </h1>
      <form
        action=""
        className="flex flex-col lg:flex-row items-center justify-center"
      >
        <input
          type="email"
          className="bg-tertiary py-3 px-6 placeholder:text-secondary text-white rounded-md outline-none border-none font-medium"
          required
          placeholder="EMAIL"
        />
        <button
          type="submit"
          className="bg-green m-3 py-3 px-8 rounded-md outline-none w-fit text-white font-bold shadow-md shadow-primary"
        >
          NOTIFY ME
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
