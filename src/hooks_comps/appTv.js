
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Tv_item from './tvItem';

export default function AppTv() {
    const [ar, setAr] = useState([]);
    useEffect(() => {
        doApi();
    }, [])
    const doApi = async () => {
        let url = "http://fs1.co.il/bus/tv.php";
        try {
            let resp = await axios.get(url);
            setAr(resp.data);
        }
        catch {
            alert("error")
        }
    }

    return (
        <div className='container'>
            <h1>list of VOD</h1>
            <div className="row g-3">
                {ar.map
                    (item => {
                        return (<Tv_item key={item.name} item={item} />)
                    }

                    )}
            </div>
        </div>
    )
}
