const Choisir_Nos_Services = () => {
  return (
    <>
      <div className="h-[35rem] w-full dark:bg-gray-800 bg-gray-300 mt-10">
        <div className="flex justify-center">
          <div className="flex justify-end bg-white h-[30rem] w-5/6 mt-10 rounded-xl ">
            <article className="p-6 border-2 border-red-500 text-balance">
              <h1 className="font-bold text-2xl text-sky-600">
                Pourquoi choisir nos services ?
              </h1>
              <h2 className="mt-5 text-xl font-bold text-sky-600 ">
                Expertise adaptée à tous
              </h2>
              <p className="mt-5 text-red-500 font-bold w-5/6">
                Réactivité et proximité : Assistance rapide pour limiter les
                interruptions et sécuriser vos systèmes. Accompagnement complet
                : De la prévention à l’intervention, nous sommes à vos côtés à
                chaque étape.
              </p>
              <button className="mt-5 px-4 py-2 bg-red-500 rounded-lg text-white font-bold scale-100 hover:scale-105 transition-transform duration-200">
                Email
              </button>
            </article>
            <img src="/img/Choisir.jpg" className="h-[30rem]"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Choisir_Nos_Services;
