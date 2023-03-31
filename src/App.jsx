import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./UI/navbar/Navbar";
import TypingOptionsMenu from "./components/TypingOptionsMenu/TypingOptionsMenu";
import Words from "./components/Words/Words";
import WordService from "./API/WordService";
import {useEffect, useState} from "react";
import {ArrowClockwise} from 'react-bootstrap-icons';
import ReloadButton from "./UI/ReloadButton/ReloadButton";
import {useFetching} from "./hooks/useFetching";
import Loader from "./UI/Loader/Loader";
import {useDispatch, useSelector} from "react-redux";


function App() {
    const dispatch = useDispatch();

    const [words, setWords] = useState([]);
    const [fetchWords, isWordsLoading, wordError] = useFetching(async (limit) => {
        const response = await WordService.getRandomWords(limit);
        setWords(response.data);
    })

    useEffect(() => {
        fetchWords(50)

    }, [])

    return (
        <div className="App">
            <Navbar logoText={'Monkeytype'}/>
            <div className="typing">
                <TypingOptionsMenu />
                {isWordsLoading && <Loader style={{top: '42%', left: '47.5%'}}/>}
                <div>
                    <Words  words={words} className={isWordsLoading && 'fade'}/>
                    <ReloadButton onClick={() => fetchWords(50)}/>
                </div>
            </div>
        </div>
    );
}

export default App;
