import React, { useEffect, useState } from "react";
import useCards from "../../services/useCards";
import Hand from "../hand/Hand";
import "./table.css";

function Table() {
    const [hands, dispatch] = useCards();
    const [firstHand, setFirstHand] = useState();

    useEffect(() => {
        dispatch();
    }, []);

    return (
        <div className="table">
            {hands &&
                hands.map((hand, index) => {
                    let type = index === 0 ? "me" : "other";
                    return (
                        <div className={`table-hand hand-${index}`}>
                            <Hand cards={hand} type={type} />
                        </div>
                    );
                })}
        </div>
    );
}

export default Table;
