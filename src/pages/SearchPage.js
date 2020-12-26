import React from 'react';
import "./SearchPage.css";
import Response from "../Response"
import { Link } from "react-router-dom";
import {useStateValue} from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import Search from './Search';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';

function SearchPage() {

    const [{term='tesla'}, dispatch] = useStateValue();

    //MOCK LIVE API CALL
    const {data} = useGoogleSearch(term);

    //const data  = Response;

    //https://developers.google.com/custom-search/v1/using_rest
    
    //https://cse.google.com/cse/create/new
    console.log(data);

    return (
        <div className="searchPage">
            <div className="searchPage__header">
                <Link to="/">
                    <img className="searchPage__logo"
                        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                    />
                 </Link>
                 <div className="searchPage__headerBody">
                    <Search hideButtons />
                    <div className="searchPage__options">
                        <div className="searchPage__optionsLeft">
                            <div className="searchPage__option">
                                <SearchIcon />
                                <Link to="/all">Tous</Link>
                            </div>
                            <div className="searchPage__option">
                                <OndemandVideoIcon />
                                <Link to="/videos">Vidéos</Link>
                            </div>
                            
                            <div className="searchPage__option">
                                <ImageIcon />
                                <Link to="/images">Images</Link>
                            </div>
                            <div className="searchPage__option">
                                <DescriptionIcon />
                                <Link to="/news">Actualités</Link>
                            </div>
                            <div className="searchPage__option">
                                <LocalOfferIcon />
                                <Link to="/shopping">Shopping</Link>
                            </div>
                            <div className="searchPage__option">
                                <RoomIcon />
                                <Link to="/maps">Maps</Link>
                            </div>
                            <div className="searchPage__option">
                                <MoreVertIcon />
                                <Link to="/more">Plus</Link>
                            </div>
                         </div>
                         <div className="searchPage__optionsRight">
                            <div className="searchPage__option">
                                <Link to="/parametre">Paramètres</Link>
                            </div>
                            <div className="searchPage__option">
                                <Link to="/outils">Outils</Link>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
            {term && (
                <div className="searchPage__results">
                    <p className="searchPage__resultCount">
                        Environ {data?.searchInformation.formattedTotalResults} résultats 
                        ({data?.searchInformation.formattedSearchTime} secondes) pour {term}
                    </p>
                     {data?.items.map(item => (
                         <div className="searchPage__result">
                             <a href= {item.displayLink}>
                                 <a className="searchPage__resultLink" href= {item.link}>
                                    {item.pagemap?.cse_image?.length > 0 && 
                                    item.pagemap?.cse_image[0]?.src &&(
                                        <img className="searchPage__resultImage" 
                                        src={item.pagemap?.cse_image?.length > 0 && 
                                            item.pagemap?.cse_image[0]?.src}
                                            alt=""
                                            />
                                    )}
                                 </a>
                                {item.displayLink}
                             </a>
                             <a className="searchPage__resultTitle" href= {item.link}>
                                <h2>{item.title}</h2>
                             </a>
                             <p className="searchPage__resultSnippet">
                                {item.snippet}
                             </p>
                            
                         </div>
                     ))}
                </div>
            )}
            
        </div>
    );
}

export default SearchPage
