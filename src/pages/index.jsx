import { useNavigate } from "react-router-dom";

function IndexPage() {
    let navigate = useNavigate();

    const goToList = () => {
        navigate("/choice")
    }

    return (
        <div className="main p-5">
            <h3 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white p-5">
               Se viene la SpaguettiFest!!!
            </h3>
            <h3 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white p-5">
            Porque somos personas que queremos, osea, cambiar el mundo y tipo podemos hacerlo a través de las Food Fest que son pura alegria.
            </h3>
            <button type="button" onClick={() => goToList()} className="mt-4 w-full py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Sortea tu grupo</button>

        </div>
    );
}

export default IndexPage;