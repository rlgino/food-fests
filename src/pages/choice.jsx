import { useNavigate } from "react-router-dom";
import { savePerson, selectGroup } from "../firebase/database";
import { useState } from "react";
import Modal from "../components/modal";

function ChoicePage() {
    let navigate = useNavigate();
    const [name, setName] = useState("")
    const [showPopup, setShowPopup] = useState(false)
    const [selectedGroups, setSelectedGroups] = useState("")

    const goToList = () => {
        navigate("/list")
    }

    const submitFor = e => {
        e.preventDefault()
        setShowPopup(true)
        selectGroup().then(group => {
            savePerson(name, group)
            setSelectedGroups(group)
        })
        setName("")
    }

    return (
        <div className="main p-5">

            {showPopup ? <Modal callback={() => goToList()} closeModal={() => setShowPopup(false)} group={selectedGroups} /> : <></>}

            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Elegí tu bando</h1>
            <form className="max-w-sm mx-auto" onSubmit={e => submitFor(e)}>
                <div className="mb-5">
                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tu nombre:</label>
                    <input type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={name} onChange={e => setName(e.target.value)}
                        placeholder="Pone tu nombre" required />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Elegir</button>
                <button type="button" onClick={() => goToList()} className="mt-4 w-full py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Ver grupos</button>
            </form>

        </div>
    );
}

export default ChoicePage;