import { Modal } from "bootstrap";
import { useState } from "react";
import Form from "./Form";
import Header from "./Header";
import New from "./New";
import Sec2pg1 from "./Sec2pg1";

function Layout() {
    const [collection,setCollection]=useState([]);
    return (  
        <div>
            <Header setCollection={setCollection}/>
            <Sec2pg1 collection={collection} setCollection={setCollection}/>
        </div>
    );
}

export default Layout;