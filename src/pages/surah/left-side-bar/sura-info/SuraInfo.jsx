/* eslint-disable react/prop-types */
import { useSurahId } from "../../../../hooks/useSurahId";
import { useSurahInfo } from "../../../../hooks/useSurahInfo";
import { capitalizeFirstLetter } from "../../../../utilities/capitalizeFirstLetter";

const SuraInfo = () => {

    const surahId = useSurahId();
    const surahInfo = useSurahInfo(surahId);
    const { id, revelation_place, revelation_order, name_simple, verses_count } = surahInfo;

    return (
        <div>
            <h3 className="pl-2 text-sm font-semibold text-gray-500 mb-2">Chapter {id}</h3>
            <h1 className="pl-2 text-3xl font-bold text-cyan-600"> {name_simple}</h1>

            <table className="mt-6 border-collapse w-full">
                <tbody>
                    <tr>
                        <td className="border border-gray-100 p-2">
                            <div className="text-sm font-semibold text-gray-600">Verses :</div>
                        </td>
                        <td className="font-medium text-cyan-600 border border-gray-100 p-2"> {verses_count}</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-100 p-2">
                            <div className="text-xs font-semibold text-gray-500">Revelation Place :</div>
                        </td>
                        <td className="text-sm text-cyan-700 border border-gray-100 p-2"> {capitalizeFirstLetter(revelation_place)}</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-100 p-2">
                            <div className="text-xs font-semibold text-gray-500">Revelation Order :</div>
                        </td>
                        <td className="text-sm text-cyan-700 border border-gray-100 p-2"> {revelation_order}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default SuraInfo;