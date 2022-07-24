
import  React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Alert from "@material-ui/lab/Alert";



export default function CellEditControlGrid() {
    const [editRowsModel, setEditRowsModel] = React.useState({});

    const handleEditRowsModelChange = React.useCallback((model) => {
        setEditRowsModel(model.current);
    }, []);

    return (
        <div style={{ width: '100%' }}>
            <Alert severity="info" style={{ marginBottom: 8 }}>
                <code>editRowsModel: {JSON.stringify(editRowsModel)}</code>




            </Alert>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    editRowsModel={editRowsModel}
                    onEditRowsModelChange={handleEditRowsModelChange}
                />
            </div>
        </div>
    );
}

const columns = [
    { field: 'name', headerName: 'Name', width: 180, editable: true },
    { field: 'age', headerName: 'Age', type: 'number', editable: true },
    {
        field: 'dateCreated',
        headerName: 'Date Created',
        type: 'date',
        width: 180,
        editable: true,
    },
    {
        field: 'lastLogin',
        headerName: 'Last Login',
        type: 'dateTime',
        width: 220,
        editable: true,
    },
];

const rows = [
    {
        id: 1,
        name: 'Indika',
        age: 25,
        dateCreated: "2020.12.06",
        lastLogin: "4531221",
    },
    {
        id: 2,
        name: "kasun",
        age: 36,
        dateCreated: "202.235",
        lastLogin: "454654",
    },

];
