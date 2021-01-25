// core import
import React , { Component } from 'react';
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {LoadingTable} from "../../../elements/spinner";
import TableContainer from "@material-ui/core/TableContainer";

// library import

// custom import

class ListDepositMember extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items : null,
        }
    }

    componentDidMount() {
        this.getData();
    }

    async getData(){
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        const{ data } = await res;
        this.setState({ items : data });
    }

    render() {
        const { items } = this.state;
        const ItemData = () => {
            if( items ){
                return (
                    items.map(( item ) => (
                      <TableRow className={`animate__animated animate__fadeIn`}>
                          <TableCell align="left">{item.title}</TableCell>
                          <TableCell align="left">{item.body}</TableCell>
                      </TableRow>
                    ))
                );
            }
            return <LoadingTable colSpan={2}/>;
        }
        return (
            <div>
                <TableContainer component={Paper} className={`border-radius-10 mt-20`}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ចំណងជើង</TableCell>
                                <TableCell>អត្ថបទ</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <ItemData/>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        );
    }
}

export default ListDepositMember;
