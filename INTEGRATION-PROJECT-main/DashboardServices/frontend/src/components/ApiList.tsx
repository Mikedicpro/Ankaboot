import { BooleanField, Datagrid, DateField, List, TextField, UrlField } from 'react-admin';

export const ApiList = (props) => (
    <List {...props} exporter={false} >
        <Datagrid bulkActionButtons={false}>
            <TextField source="id" />
            <UrlField source="url" />
            <TextField source="apiKey" />
            <BooleanField source="needsKey" />
            <BooleanField source="healthy" />
        </Datagrid>
    </List>
);
