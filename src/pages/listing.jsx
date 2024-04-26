import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GROUP_OSEA, GROUP_TIPO, getGroup } from "../firebase/database";
import randomEmoji from "../services/randomEmoji";

function ListingPage() {
    const navigate = useNavigate()

    const [team1, setTeam1] = useState([])
    const [team2, setTeam2] = useState([])

    useEffect(() => {
        getGroup(GROUP_OSEA).then(group => setTeam1(group))
        getGroup(GROUP_TIPO).then(group => setTeam2(group))
    }, [])

    const goToHome = () => {
        navigate("/choice")
    }
    return (
        <div className="p-2">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Cual es tu bando</h1>
            <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
                <thead className="text-xs text-white uppercase bg-blue-600 border-b border-blue-400 dark:text-white">
                    <tr>
                        <th scope="col" className="px-6 py-3 bg-blue-500">
                            Osea
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Tipo
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        team1.map((name, i) => <tr className="bg-blue-600 border-b border-blue-400" key={i}>
                            <th scope="row" className="px-6 py-4 font-medium bg-blue-500 text-blue-50 whitespace-nowrap dark:text-blue-100">
                                {name} {randomEmoji()}
                            </th>
                            <td className="px-6 py-4">
                                {i < team2.length ? `${team2[i]} ${randomEmoji()}` : ""}
                            </td>
                        </tr>)
                    }
                    {
                        team1.length < team2.length ? team2.slice(team1.length - team2.length).map((name, i) => <tr key={i} className="bg-blue-600 border-b border-blue-400">
                            <th scope="row" className="px-6 py-4 font-medium bg-blue-500 text-blue-50 whitespace-nowrap dark:text-blue-100">
                            </th>
                            <td className="px-6 py-4">
                                {name} {randomEmoji()}
                            </td>
                        </tr>) : <></>
                    }

                </tbody>
            </table>
            <button type="button" onClick={() => goToHome()} className="mt-4 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Elegí tu bando</button>
        </div>
    );
}

export default ListingPage;