import React from 'react';
import TableCell from "@material-ui/core/TableCell";
import CircularProgress from "@material-ui/core/CircularProgress";
import TableRow from "@material-ui/core/TableRow";

export const LoadingTable = ({ color , colSpan }) => {
    return (
        <TableRow>
            <TableCell component={`th`} scope={`row`} colSpan={colSpan} align={`center`}>
                <CircularProgress color={color}/>
            </TableCell>
        </TableRow>
    );
}

// default props
LoadingTable.defaultProps = {
    colSpan : 1,
    color : 'primary'
}
