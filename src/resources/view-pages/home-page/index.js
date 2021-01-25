// ((======= core import ========= ))
import React, {useEffect} from 'react';

// ((======= library import ========= ))
import Container from "@material-ui/core/Container";

// ((======= custom import ========= ))
import CardMenuComponent from "../../components/card-menu";
import word from "../../language/word";

const HomePageView = ( ) => {
    // effect hook
    useEffect(() => {
        document.title = word.home;
    });

    return (
       <div className={`animate__animated animate__fadeIn`}>
           <Container maxWidth="md">
               <CardMenuComponent/>
           </Container>
       </div>
    );
}

export default HomePageView;
