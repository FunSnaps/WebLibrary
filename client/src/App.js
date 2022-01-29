import React, {Component} from 'react';
import axios from "axios";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        this.getPosts();
    }

    getPosts() {
        axios.get("http://localhost:5000/posts").then(res => {
            if (res.data.success) {
                this.setState({
                    posts: res.data.posts,
                });
                console.log(this.state.posts);
            }
        });
    }

    render() {
        return (
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">ID</TableCell>
                            <TableCell align="left">Title</TableCell>
                            <TableCell align="left">Description</TableCell>
                            <TableCell align="left">Category</TableCell>
                            <TableCell align="left">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.posts.map((post, index) => (
                            <TableRow>
                                <TableCell align="left">{index}</TableCell>
                                <TableCell align="left">{post.title}</TableCell>
                                <TableCell align="left">{post.description}</TableCell>
                                <TableCell align="left">{post.postCategory}</TableCell>

                                <Stack spacing={1} direction="row">
                                    <Button variant="contained" href="#">Edit</Button>
                                    <Button variant="contained" href="#">Delete</Button>
                                </Stack>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}

export default App;
