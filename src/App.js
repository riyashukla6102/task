import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ColHeader, people } from './Components/data';
import BarGraph from './Components/BarGraph';
import PieGraph from './Components/PieGraph';
import { Col, Container, Row } from 'react-bootstrap';
import DataTable from 'react-bs-datatable';
import NavbarComponent from './Components/NavbarComponent';

function App() {
  return (
    <>
<NavbarComponent/> 
    <Container>
      <Row>
        <Col sm={2}>
          <div className="sidebar">
            <a href="">Login <i class="fa fa-users"></i></a>
            <a href="">User Data <i class="fa fa-database"></i></a>
            <a href="">Configuration<i class="fa fa-cogs"></i></a>
            <a href="">Notifications<i class="fa fa-bell"></i></a>
          </div>
        </Col>
        <Col>
        <Container>
      <Row>
        <Col>
        <div className="content-card">
        <div>Statistics for 2020-2021</div>
        <BarGraph/>
        </div>
        </Col>
        
        <Col>
        <div className="content-card">
        <div>Statistics for 2020-2021</div>
        <PieGraph/>
        </div>
        </Col>
        
      </Row>
      <Row>
      
        <Col><div className="tab"><DataTable tableHeaders={ColHeader} tableBody={people} rowsPerPage='10'/></div></Col>
        
      </Row>
    </Container>
        </Col>
      </Row>
    </Container>
    
    
    
    
    
    </>
  );
}

export default App;
