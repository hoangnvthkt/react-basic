import React from "react";
import ReactPaginate from "react-paginate";

const TableUserPaginate = (props) => {
  const { listUsers, pageCount } = props;
  const handlePageClick = (event) => {
    props.fetchListUserWithPaginate(+event.selected + 1);
    props.setCurrentPage(+event.selected + 1);
    console.log(`User requested page number ${event.selected}`);
  };

  return (
    <>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">userName</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listUsers &&
            listUsers.length &&
            listUsers.map((item, index) => {
              return (
                <tr key={`table-user-${index}`}>
                  <td>{item.id}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td>
                    <button
                      className="btn btn-secondary"
                      onClick={() => props.handleClickBtnView(item)}
                    >
                      View
                    </button>
                    <button
                      onClick={() => props.handleClickBtnUpdate(item)}
                      className="btn btn-warning mx-3"
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => props.handleClickBtnDelete(item)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          {listUsers && listUsers.length === 0 && (
            <tr>
              <td colSpan={"5"}>Not found data</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="user-panigation">
        <ReactPaginate
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
          forcePage={props.currentPage - 1}
        />
      </div>
    </>
  );
};
export default TableUserPaginate;