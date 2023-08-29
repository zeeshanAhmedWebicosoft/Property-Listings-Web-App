import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const DataTableView = ({ data }) => {
   const [searchTerm, setSearchTerm] = useState("");
   const [filteredData, setFilteredData] = useState([]);
   const [sortConfig, setSortConfig] = useState({ key: null, direction: "" });
   // useEffect for updating data on pagination
   useEffect(() => {
      setFilteredData(data);
   }, [data]);
   // Sorting function
   const handleSort = (columnKey) => {
      let direction = "asc";
      if (sortConfig.key === columnKey && sortConfig.direction === "asc") {
         direction = "desc";
      }

      const sorted = [...filteredData].sort((a, b) => {
         const valueA = a[columnKey];
         const valueB = b[columnKey];

         if (typeof valueA === "string" && typeof valueB === "string") {
            return valueA.localeCompare(valueB);
         } else {
            // Handle sorting for non-string values (e.g., numbers)
            return direction === "asc" ? valueA - valueB : valueB - valueA;
         }
      });

      setFilteredData(sorted);
      setSortConfig({ key: columnKey, direction });
   };

   // Filtering function
   const handleFilter = (e) => {
      const newSearchTerm = e.target.value.toLowerCase();
      setSearchTerm(newSearchTerm);

      const filtered = data.filter(
         (item) =>
            item.title.toLowerCase().includes(newSearchTerm) ||
            item.price.toString().includes(newSearchTerm)
      );

      setFilteredData(filtered);
   };

   return (
      <div>
         <Form.Control
            type="text"
            placeholder="Search..."
            className="shadow-none outline-0 mt-4 w-25"
            value={searchTerm}
            onChange={handleFilter}
         />
         <table className="property-table">
            <thead>
               <tr>
                  <th>Title</th>
                  <th>Address</th>
                  <th
                     className="cursor-pointer"
                     onClick={() => handleSort("price")}
                  >
                     Price{" "}
                     {sortConfig.key === "price" && (
                        <span>
                           {sortConfig.direction === "asc" ? "🔼" : "🔽"}
                        </span>
                     )}
                  </th>
               </tr>
            </thead>
            <tbody>
               {filteredData?.length > 0 ? (
                  filteredData.map((item) => (
                     <tr key={item.id}>
                        <td>
                           <Link
                              className="text-dark text-decoration-none"
                              to={`/detail/${item.id}`}
                           >
                              {item.title}
                           </Link>
                        </td>
                        <td>
                           <Link
                              className="text-dark text-decoration-none"
                              to={`/detail/${item.id}`}
                           >
                              {item.address}
                           </Link>
                        </td>
                        <td>
                           <Link
                              className="text-dark text-decoration-none"
                              to={`/detail/${item.id}`}
                           >
                              {item.price}
                           </Link>
                        </td>
                     </tr>
                  ))
               ) : (
                  <p className="ps-2 py-3">no record</p>
               )}
            </tbody>
         </table>
      </div>
   );
};

export default DataTableView;
