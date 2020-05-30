import React, { useState, useEffect } from 'react';
import logo from '../image/yamyamlogo.png';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from 'reactstrap';

  const AppNavbar =  () => {
    const [isOpen, setIsOpen] = useState(false);
  
    useEffect(()=>{

    });
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"><img src={logo} style={{width:100, marginTop: 0}}/></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  변환기
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                  <NavLink href="/cal1">맞춤 계산기</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink href="/manualcalculator">제품 선택 계산기</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                  <NavLink href="/comp">제품 비교</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
  
  export default AppNavbar;