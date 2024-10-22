import SurahLinkDetailed from "../../../pages/home/surah-list-home/surah-link-detailed/SurahLinkDetailed";

/* eslint-disable react/prop-types */
const Chapters = ({ searchResult }) => {
    return (
        <div className="flex flex-col gap-2">
            {
                searchResult.map((surah, idx) => <SurahLinkDetailed
                    key={idx}
                    surah={surah}
                ></SurahLinkDetailed>)
            }
        </div>
    );
};

export default Chapters;