import React from "react";
import { Link, useParams } from "react-router-dom";
import { getListingDetail } from "../api";

const DetailPage = () => {
   const { listingId } = useParams();
   const listingDetail = getListingDetail(Number(listingId));

   if (!listingDetail) {
      return <div>Loading...</div>;
   }

   return (
      <div className="container pt-5">
         <Link
            className="btn btn-secondary text-white text-decoration-none mb-3"
            to="/"
         >
            Back
         </Link>
         <div className="row pb-5">
            <div className="col-md-6 mx-auto">
               <div className="card ">
                  <div className="card-body">
                     <img
                        src={listingDetail?.imageUrl}
                        alt={listingDetail?.title}
                        className="w-100"
                     />
                     <h2 className="pt-3">{listingDetail?.title}</h2>
                     <h6>Address: {listingDetail?.address}</h6>
                     <p className="mb-1">
                        Square Feet: {listingDetail?.coveredAreaSQFT}
                     </p>
                     <p className="mb-1">Beds: {listingDetail?.beds}</p>
                     <p className="mb-1">
                        Property Type: {listingDetail?.propertyType}
                     </p>
                     <p className="mb-1">Price: ${listingDetail?.price}</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default DetailPage;
