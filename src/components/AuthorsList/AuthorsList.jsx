import React from 'react'
import { List, TextField, Datagrid } from 'react-admin'

const AuthorsList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="name" />
      </Datagrid>
    </List>
  )
}

export default AuthorsList