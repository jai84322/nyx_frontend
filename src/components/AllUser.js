import { Table, TableHead, TableCell, TableBody, TableRow, styled, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../service/api";
import { Link } from "react-router-dom";

const StyledTable = styled(Table)`
     width : 90%;
     margin : 50px auto 0 auto; 
`;

const THead = styled(TableRow)`
  background : #000000;
  & > th {
    color : #fff;
    font-size: 20px;
  }
`;

const TBody = styled(TableRow)`
  & > td {
     font-size: 20px;
  }
`;



const AllUser = () => {

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        getAllUsers()
    }, [])

    const getAllUsers = async () => {
        let res = await getUsers();
        setUsers(res.data.data);
    }

    let num = 1;
    const counter = () => {
         return num++;
    }

    const deleteUserAccount = async (id) => {
        await deleteUser(id);
        getAllUsers();
    };

    return(
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Sr. No.</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>options</TableCell>
                </THead>
            </TableHead>

            <TableBody>
            {
                    users.map((user) => (
                        <TBody key={user._id} >
                            <TableCell> { counter() } </TableCell>
                            <TableCell> {user.name} </TableCell>
                            <TableCell> {user.username} </TableCell>
                            <TableCell> {user.email} </TableCell>
                            <TableCell> {user.phone} </TableCell>
                            <TableCell>
                                <Button variant="contained" style={{marginRight:10 }} component={Link} to={`/edit/${user._id}`} >Edit</Button>
                                <Button variant="contained" color="secondary" onClick={() => deleteUserAccount(user._id)} >Delete</Button>
                            </TableCell>
                        </TBody>
                    ))
                 }
            </TableBody>
        </StyledTable>
    )
};

export default AllUser;