import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'
const API_KEY = 'AIzaSyAiNyGgE5ntBES7fclYRfARCo22bazEj18';

const App = () => {
    return (
         <div> 
            <SearchBar />
         </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('.container'));
