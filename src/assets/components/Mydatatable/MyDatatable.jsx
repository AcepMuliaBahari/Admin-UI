import "./mydatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "Name", headerName: " Name", width: 130 },
    
    // { field: "lastName", headerName: "Last name", width: 130 },
    // {
    //   field: "age",
    //   headerName: "Age",
    //   type: "number",
    //   width: 90,
    // },
    // {
    //   field: "fullName",
    //   headerName: "Full name",
    //   description: "This column has a value getter and is not sortable.",
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
    // },
  ];
  
  const rows = [
    { id: 1, Name: "Snow", firstName: "Jon", age: 35 },
    { id: 2, Name: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, Name: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, Name: "Stark", firstName: "Arya", age: 16 },
    { id: 5, Name: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, Name: "Melisandre", firstName: null, age: 150 },
    { id: 7, Name: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, Name: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, Name: "Roxie", firstName: "Harvey", age: 65 },
  ];
  
  const actionColumn = [
    {
    //   field: "action",
    //   headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton"></div>
            </Link>
          </div>
        );
      },
    },
  ];

const MyDatatable = () => {
  return (
    <div className="mydatatable">
      <div className="MydatatableTitle">
        All Data
       
      </div>
      <DataGrid
        rows={rows}
        columns={columns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default MyDatatable;
