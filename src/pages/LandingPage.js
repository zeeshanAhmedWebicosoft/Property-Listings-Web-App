import React, { useState } from "react";
import { ButtonGroup, ToggleButton, Pagination } from "react-bootstrap";
import { getPropertyListings } from "../api";
import DataTableView from "../components/DataTableView";
import CardView from "../components/CardView";

const LandingPage = () => {
   const [viewType, setViewType] = useState("table");
   const [currentPage, setCurrentPage] = useState(1);
   // Fetch property listings data
   const data = getPropertyListings();
   const itemsPerPage = 10;
   const startIndex = (currentPage - 1) * itemsPerPage;
   const endIndex = startIndex + itemsPerPage;
   const currentData = data.slice(startIndex, endIndex);

   // Calculate the total number of pages
   const totalPages = Math.ceil(data.length / itemsPerPage);

   return (
      <div className="container py-5">
         <div className="view-toggle text-center">
            <ButtonGroup>
               <ToggleButton
                  type="radio"
                  variant={"outline-success"}
                  name="radio"
                  checked={viewType === "table"}
                  onClick={(e) => setViewType("table")}
               >
                  Table View
               </ToggleButton>
               <ToggleButton
                  type="radio"
                  variant={"outline-success"}
                  name="radio"
                  checked={viewType === "card"}
                  onClick={(e) => setViewType("card")}
               >
                  Card View
               </ToggleButton>
            </ButtonGroup>
         </div>
         {viewType === "table" ? (
            <DataTableView data={currentData} />
         ) : (
            <CardView data={currentData} />
         )}
         <div className="pagination-container text-center mt-3">
            <Pagination>
               {Array.from({ length: totalPages }, (_, index) => (
                  <Pagination.Item
                     key={index}
                     active={index + 1 === currentPage}
                     onClick={() => setCurrentPage(index + 1)}
                  >
                     {index + 1}
                  </Pagination.Item>
               ))}
            </Pagination>
         </div>
      </div>
   );
};

export default LandingPage;
