import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./UI/navbar/Navbar";
import TypingOptionsMenu from "./components/TypingOptionsMenu/TypingOptionsMenu";
import Words from "./components/Words/Words";
import WordService from "./API/WordService";
import {useEffect, useState} from "react";
import {ArrowClockwise} from 'react-bootstrap-icons';
import ReloadButton from "./components/ReloadButton/ReloadButton";
import {useFetching} from "./hooks/useFetching";
import Loader from "./UI/Loader/Loader";
import {useDispatch, useSelector} from "react-redux";
import SpeedInfo from "./components/SpeedInfo/SpeedInfo";


function App() {
    const dispatch = useDispatch();
    const timerIsCompleted = useSelector(state=>state.timerIsCompleted.timerIsCompleted);
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
            {timerIsCompleted?
            <SpeedInfo/>
                :<div className="typing">
                    <TypingOptionsMenu />
                    {isWordsLoading && <Loader />}
                    <div>
                        <Words  words={words} className={isWordsLoading && 'fade'}/>
                        <ReloadButton fetchWords={ fetchWords}/>
                    </div>
                </div>
            }
        </div>
    );
}

export default App;
