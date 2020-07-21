import React from 'react'
import { Button } from 'grommet';

export const DefaultButton = ({name, onClick, ...props}) => {
    
    return (
        <Button primary label={name} onClick={onClick} {...props} />
)};
  