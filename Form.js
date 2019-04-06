import React from 'react'
import { Button } from '@material-ui/core';

const Form = (props) => {
    return (
        <div onSubmit={props.getCard}>
            <input type="text" name="BrideName" placeholder="Bride Name" />
            <input type="text" name="GroomName" placeholder="Groom Name" />
            <input type="text" name="Venue" placeholder="Venue" />
            <input type="date" name="Date" />
            <input type="file" name="Photo" placeholder="upload Photo" />
            <br></br>
            <Button >Submit</Button>
        </div>
    )
}
export default Form