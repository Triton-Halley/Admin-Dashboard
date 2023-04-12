import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Layout from "../layout/Layout";

import LockResetIcon from "@mui/icons-material/LockReset";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface Column {
  id: "id" | "name" | "username" | "edit" | "delete" | "changePassword";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "id", label: "Id", minWidth: 170 },
  { id: "name", label: "Name", minWidth: 100 },
  {
    id: "username",
    label: "Username",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "changePassword",
    label: "Change password",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "edit",
    label: "Edit",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
  {
    id: "delete",
    label: "Delete",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
];

interface Data {
  id: number;
  name: string;
  username: string;
}

function createData(id: number, name: string, username: string): Data {
  return { id, name, username };
}

const rows = [
  createData(134535, "Ali Geshani", "admin"),
  createData(465746, "Tom person", "writer"),
  createData(134535, "Emma Harden", "user"),
];

export default function Users() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Layout>
      {/* header */}
      <div className="p-2 font-bold text-xl ">
        <h1>Users</h1>
      </div>
      <Divider variant="middle" sx={{ bgcolor: "whitesmoke" }} />
      {/* create new User Button */}
      <div className="p-4 font-semibold">
        <Link
          to={"/users/create-new-user"}
          className="bg-blue-500 p-2 rounded-lg text-white"
        >
          Create new User
        </Link>
      </div>

      {/* Users Table  */}

      <Paper sx={{ width: "100%", overflow: "hidden", mt: 5 }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <>
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.id}
                      >
                        {columns
                          .filter(
                            (item) =>
                              item.id !== "delete" &&
                              item.id !== "changePassword" &&
                              item.id !== "edit"
                          )
                          .map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        <TableCell align="right">
                          <Link to={"users/change-user-password"}>
                            <LockResetIcon />
                          </Link>
                        </TableCell>
                        <TableCell align="right">
                          <Link to={"users/edit-user"}>
                            <EditIcon sx={{ color: "blue" }} />
                          </Link>
                        </TableCell>
                        <TableCell align="right">
                          <Link to={"users/delete-user"}>
                            <DeleteIcon color="error" />
                          </Link>
                        </TableCell>
                      </TableRow>
                    </>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Layout>
  );
}
