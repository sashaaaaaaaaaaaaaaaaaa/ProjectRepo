import axios from 'axios';
import cheerio from 'cheerio';
import { useState } from 'react';

interface DirectorInfo {
    director: string;
    explanation: string;
}

interface MoviesNewsProps {
    directorsInfo: DirectorInfo[];
    error: string | null;
}

const MoviesNews = ({ directorsInfo, error }: MoviesNewsProps) => {
    const [showExplanations, setShowExplanations] = useState(false);

    const toggleExplanations = () => {
        setShowExplanations(!showExplanations);
    };

    if (error) {
        return <div className="text-center text-red-500 mt-10">{error}</div>;
    }

    return (
        <div className="container text-white mx-auto px-4 py-8">
            <h1 className="text-3xl text-white font-bold mb-6 text-center">Entertainment Weekly Articles</h1>
            <ul className="space-y-4">
                {directorsInfo.map((director, index) => (
                    <li key={index} className="border-b pb-4">
                        <p className="text-xl  text-white font-bold">{director.director}</p>
                        <p className={`mt-2 ${index === 0 && showExplanations ? '' : 'hidden'}`}>{director.explanation}</p>
                    </li>
                ))}
            </ul>
            {directorsInfo.length > 0 && (
                <button onClick={toggleExplanations} className="mt-4 text-blue-500 hover:underline">
                    {showExplanations ? 'Hide Explanations' : 'Show Explanations'}
                </button>
            )}
        </div>
    );
};

export const getServerSideProps = async () => {
    try {
        const response = await axios.get('https://ew.com/article/1996/04/19/50-greatest-directors-and-their-100-best-movies/');
        const html = response.data;
        const $ = cheerio.load(html);

        const directorsInfo: DirectorInfo[] = [];

        // Update selectors based on the actual HTML structure of the EW page
        $('.comp.mntl-sc-page.mntl-block.structured-content.js-extended-commerce__section').each((index, element) => {
            const director = $(element).find('.mntl-sc-block-subheading__text').text().trim();
            const explanation = $(element).find('.comp.mntl-sc-block.mntl-sc-block-html').text().trim();
            if (director && explanation) {
                directorsInfo.push({ director, explanation });
            }
        });

        return {
            props: {
                directorsInfo,
                error: null,
            },
        };
    } catch (error) {
        console.error('Error fetching director info:', error);
        return {
            props: {
                directorsInfo: [],
                error: 'Failed to fetch director info. Please try again later.',
            },
        };
    }
};

export default MoviesNews;






