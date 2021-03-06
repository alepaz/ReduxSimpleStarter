import React from 'react';
import ReactDOM from 'react-dom' //Si deseas renderizar un elemento en el DOM esta es tu libreria
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyAvTFfHbcB-V0zwZafPP32nGo5hsEvKVZY';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
    console.log(data)
});

//React is a JS library to produce html code and show in the browser
//Components are snippets of code who produces html code
//Component are complex js functions who produce html

//Create a new component. This component should produce
// some HTML
const App = function() {     //Const is ES6 syntax
    return (
        <div>
            <SearchBar />
        </div>
    )
}
//Take this component's generated HTML and put it 
// on the page (in the dom)
ReactDOM.render(<App/>, document.querySelector('.container'));