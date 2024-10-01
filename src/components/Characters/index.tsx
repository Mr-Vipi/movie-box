import {
  CircularProgress,
  Input,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { charactersSelector, getCharacters } from "./charactersSlice";

type Column = {
  id: "char_id" | "name" | "birthday" | "occupation" | "status";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
};

const columns: Column[] = [
  { id: "char_id", label: "ID", minWidth: 5 },
  { id: "name", label: "Name", minWidth: 100 },
  {
    id: "birthday",
    label: "Birthday",
    minWidth: 100,
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "occupation",
    label: "Occupation",
    minWidth: 170,
  },
  {
    id: "status",
    label: "Status",
    minWidth: 170,
  },
];

export default function Characters() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  const { response, loading } = useAppSelector(charactersSelector);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return loading ? (
    <Stack alignItems="center">
      <CircularProgress size={600} thickness={1} />
    </Stack>
  ) : (
    <Paper sx={{ width: "100%" }}>
      <TableContainer sx={{ maxHeight: 570 }}>
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
            {response
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((character) => {
                return (
                  <TableRow hover tabIndex={-1} key={character.char_id}>
                    <TableCell>
                      <Input type="checkbox" />
                    </TableCell>
                    {columns.map((column) => {
                      const value = character[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 20, 40]}
        component="div"
        count={response?.length ?? 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
