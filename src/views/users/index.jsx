import React, { useEffect, useState } from "react";
import DataTable from "./../../components/common/dataTable/index.jsx";
import "./style.scss";
import { getUserList } from "../../services/userServices";
import ReactPaginate from "react-paginate";

function Users(props) {
  const [users, setUsers] = useState([]);
  const [pageNumber, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  useEffect(() => {
    handleRequest();
  }, [pageNumber]);

  const handleRequest = async () => {
    let apiCall = await getUserList(props.history, pageNumber);
    setPageCount(apiCall.total_pages);
    setUsers(apiCall.data);
  };

  const handlePageChange = (number) => {
  
    setPage(number.selected+1);
  };
  return (
    <div className="w-75 table__container">
      <DataTable
        headers={["ID", "Email", "First Name", "Last Name", "Avatar"]}
        data={users}
      />
      <div className="pagination__container">
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        activeClassName={"active"}
      /></div>
    </div>
  );
}

export default Users;
