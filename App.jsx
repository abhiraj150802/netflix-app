import React from "react";
import Card from './Cards';
import sdata from './sdata';
const App = () =>
(
    <>
        <h1 className="heading"> the top series of netflix</h1>

        {sdata.map((val) => {
            return (
                <Card
                    key={val.id}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    sname={val.sname}
                    link={val.link}

                />
            );
        })}

    </>

);
export default App;