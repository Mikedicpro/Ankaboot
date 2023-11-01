import * as React from 'react';
import { Create, SimpleForm, TextInput, required, BooleanInput, UrlField } from 'react-admin';

export const ApiCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="url"  fullWidth />
            <TextInput source="apiKey" fullWidth />
            <BooleanInput source='needsKey'/>
            <BooleanInput source='healthy'/>
        </SimpleForm>
    </Create>
);