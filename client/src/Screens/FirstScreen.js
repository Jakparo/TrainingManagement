import React from 'react';

import education from '../icons/education.svg'
import {  Row, Col} from 'reactstrap';

function FirstScreen(props){
    const url = education;
    return <>
        {/* {name && <h2>{name}</h2>} */}
        <Row className="justify-content-center align-items-center"  style={{ height: '80vh'}} >
            <Col  xl="4" md="6" xs='8' sm='8' className="text-center" >
                <h1 className="focus-in-expand">Happy Learning <img style={{marginLeft:'1rem'}}src={url} width={35} height={35}/> </h1>
            </Col>                    
        </Row>
            
    </>
}

export default FirstScreen;