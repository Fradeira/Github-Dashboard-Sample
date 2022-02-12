import React, {useState} from 'react';
import {Search} from "../components/Search";
import {getUsers} from "../services/githubServices";
import {SearchResults} from "../components/Search-results";
import {Error} from "../components/Error";

function Home() {

    // Change BTN if its clicked
    const [isSearch, setIsSearch] = useState(false);

    // Keep the keyword of the search
    const [searchUser, setSearchUser] = useState('');

    // Set the user from API or the issue
    const [user, setUser] = useState();
    const [error, setError] = useState();

    const handleClicked = () => {
        const controller = new AbortController();
        const signal = controller.signal;

        setIsSearch(true);

        getUsers(searchUser, {signal})
            .then(
            (data) => {
                setUser(data.data.items);
                setIsSearch(false);
            }).catch(
            (error) => {
                setError(error)
            });

        return function cleanup(){
            controller.abort();
        }
    };

    return (
        <div className="Homepage">
            <Search {...{setSearchUser, isSearch, handleClicked}}/>
            <SearchResults {...{user}}/>
            {
                error &&
                    <Error {...{error}}/>
            }
        </div>
    );
}

export default Home;
