import React from 'react'
import{Button} from'react-bootstrap'
import{Alert} from 'react-bootstrap'

function Bootstrapboot() {
  return (
    <div>
        <p>How to add Bootstrap in react components</p>
        <p>We do have seperate react bootstrap library <br/>
            so it becomes easy to use with react</p>
            <p>https://react-bootstrap.netlify.app/docs/getting-started/introduction
                refer this link
            </p>
            <Button>This btn is from bootstrap</Button>
            <Alert variant="danger">Bootstrapped install</Alert>

    </div>
  )
}

export default Bootstrapboot