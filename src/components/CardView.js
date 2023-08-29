import React from "react";
import { Link } from "react-router-dom";

const CardView = ({ data }) => {
   return (
      <div className="container mt-5">
         <div className="card-container text-center">
            {data?.map((listing) => (
               <div key={listing.id} className="property-card">
                  <img src={listing.imageUrl} alt={listing.title} />
                  <h3>{listing.title}</h3>
                  <p>Price: ${listing.price}</p>
                  <Link to={`/detail/${listing.id}`}>View Details</Link>
               </div>
            ))}
         </div>
      </div>
   );
};

export default CardView;
