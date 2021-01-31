import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';

const alanKey = '6f21a222b7419d980a3ca05d5636343c2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    const [ newsArticles, setNewsArticles ] = useState([]);
    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand : ({ command, articles }) => {
                if(command === 'newHeadlines'){
                    console.log(articles);
                    setNewsArticles(articles)
                };
            }
        })
    }, [])

    return (
        <div>
            <h1>Alan AI Voice Assistant</h1>
            <NewsCards articles={newsArticles} />
        </div>
        
    );
};

export default App;