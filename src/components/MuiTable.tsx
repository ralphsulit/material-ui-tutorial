import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material';

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{marginTop:'30px', maxHeight: '300px'}}>
      <Table aria-label='simple table' stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align='center'>Email</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align='center'>{row.email}</TableCell>
            </TableRow>
            ))
          }
        </TableBody>

      </Table>
    </TableContainer>
  )
}

const tableData = [
{
  "id": 1,
  "first_name": "Brett",
  "last_name": "Stacey",
  "email": "bstacey0@dmoz.org",
  "gender": "Female",
  "ip_address": "134.13.155.192"
}, {
  "id": 2,
  "first_name": "Alexandra",
  "last_name": "Audry",
  "email": "aaudry1@archive.org",
  "gender": "Female",
  "ip_address": "221.199.196.0"
}, {
  "id": 3,
  "first_name": "Dion",
  "last_name": "Dilliston",
  "email": "ddilliston2@huffingtonpost.com",
  "gender": "Male",
  "ip_address": "50.159.44.183"
}, {
  "id": 4,
  "first_name": "Gail",
  "last_name": "Kenwyn",
  "email": "gkenwyn3@blogs.com",
  "gender": "Male",
  "ip_address": "180.251.161.219"
}, {
  "id": 5,
  "first_name": "Rowland",
  "last_name": "Rumgay",
  "email": "rrumgay4@blogs.com",
  "gender": "Male",
  "ip_address": "17.130.237.23"
}, {
  "id": 6,
  "first_name": "Laverne",
  "last_name": "Reese",
  "email": "lreese5@unicef.org",
  "gender": "Female",
  "ip_address": "151.56.247.120"
}, {
  "id": 7,
  "first_name": "Ingelbert",
  "last_name": "McQuarter",
  "email": "imcquarter6@twitpic.com",
  "gender": "Male",
  "ip_address": "105.44.226.67"
}, {
  "id": 8,
  "first_name": "Templeton",
  "last_name": "Dalzell",
  "email": "tdalzell7@typepad.com",
  "gender": "Male",
  "ip_address": "172.85.199.19"
}, {
  "id": 9,
  "first_name": "Rogers",
  "last_name": "Winkett",
  "email": "rwinkett8@apple.com",
  "gender": "Male",
  "ip_address": "35.160.218.0"
}, {
  "id": 10,
  "first_name": "Shannen",
  "last_name": "Calltone",
  "email": "scalltone9@whitehouse.gov",
  "gender": "Female",
  "ip_address": "122.13.94.59"
}]