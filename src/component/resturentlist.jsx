export const Restaurantlist = ({ list, load, handlePrev, handleNext, page }) => {
    return (
        <div>

            <div className="collection">

                {
                    load ? <h3> Loading..... </h3> : list.map((e) =>

                        <div key={e.id} className="container">

                            <div>

                                <img className="image" src={e.Image} alt="img" />

                            </div>

                            <div>

                                <h1 className="titel">{e.name}</h1>
                                <h5 className="cat"> Category : {e.categorie}</h5>

                                <div>

                                    <h3>Min:{" ₹" + e.min_amount}</h3>

                                    <div> Rating : {e.rating}</div>

                                </div>

                                <div>{e.cash === "on" ? "cash" : ""} / {e.upi === "on" ? "upi" : " "} / {e.card === "on" ? "card" : ""}</div>

                            </div>

                        </div>)


                }



            </div>


            <button className="btn" disabled={page === 1} onClick={handlePrev} >prev</button>

            <button className="btn" onClick={handleNext} >Next</button>

        </div>
    )
}