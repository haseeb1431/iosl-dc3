import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import { stat } from 'fs';


class Nav extends Component {

  state = {
    persontype:1
  };

  render() {
    let { location } = this.props;
    const isUser = this.state.persontype==1;

    if (this.state.persontype == 1) {
      //User Navigation bar
      return (
        <ul className="nav">
          <li className={location.pathname === '/' ? 'active' : null}>
            <Link to="/Dashboard">
              <i className="pe-7s-graph"></i>
              <p>Dashboard</p>
            </Link>
          </li>
          <li className={this.isPathActive('/forms') || this.state.formMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ formMenuOpen: !this.state.formMenuOpen })} data-toggle="collapse">
            <i className="pe-7s-note2"></i>
            <p>Incident Management<b className="caret"></b></p>
          </a>
          <Collapse in={this.state.formMenuOpen}>
            <div>
              <ul className="nav">
                <li className={this.isPathActive('/forms/validation-forms') ? 'active' : null}>
                  <Link to="/forms/validation-forms">Create incident</Link>
                </li>
                <li className={this.isPathActive('/Tables/RegularTables') ? 'active' : null}>
                  <Link to="/Tables/RegularTables">Incidents</Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li>
        </ul>
      );
    }
    else if(this.state.persontype == 2){
      //Company
      return (
      <ul className="nav">
          <li className={location.pathname === '/' ? 'active' : null}>
            <Link to="/Dashboard">
              <i className="pe-7s-graph"></i>
              <p>Dashboard</p>
            </Link>
          </li>

          <li className={this.isPathActive('/components') || this.state.componentMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ componentMenuOpen: !this.state.componentMenuOpen })}
            data-toggle="collapse">
            <i className="pe-7s-plugin"></i>
            <p>
              User Management
            <b className="caret"></b>
            </p>
          </a>
          <Collapse in={this.state.componentMenuOpen}>
            <div>
              <ul className="nav">
                  <li className={this.isPathActive('/components/buttons') ? 'active' : null}>
                  <Link to="/components/buttons">Add Postman</Link>
                </li>
                <li className={this.isPathActive('/components/grid') ? 'active' : null}>
                  <Link to="/components/grid">View Jobs </Link>
                </li>
                <li className={this.isPathActive('/components/icons') ? 'active' : null}>
                  <Link to="/components/icons">Assign Package</Link>
                </li>
              </ul>
            </div>
          </Collapse>
    </li>

          <li className={this.isPathActive('/forms') || this.state.formMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ formMenuOpen: !this.state.formMenuOpen })} data-toggle="collapse">
            <i className="pe-7s-note2"></i>
            <p>Incident Management<b className="caret"></b></p>
          </a>
          <Collapse in={this.state.formMenuOpen}>
            <div>
              <ul className="nav">
                <li className={this.isPathActive('/forms/validation-forms') ? 'active' : null}>
                  <Link to="/forms/validation-forms">Create incident</Link>
                </li>
                <li className={this.isPathActive('/Tables/RegularTables') ? 'active' : null}>
                  <Link to="/Tables/RegularTables">Incidents</Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li>
        </ul>
      );
    }
    else{
      //PostMan
      return (
<ul className="nav">
          <li className={location.pathname === '/' ? 'active' : null}>
            <Link to="/Dashboard">
              <i className="pe-7s-graph"></i>
              <p>Dashboard</p>
            </Link>
          </li>
          <li className={this.isPathActive('/components') || this.state.componentMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ componentMenuOpen: !this.state.componentMenuOpen })}
            data-toggle="collapse">
            <i className="pe-7s-plugin"></i>
            <p>
              Package Management
            <b className="caret"></b>
            </p>
          </a>
          <Collapse in={this.state.componentMenuOpen}>
            <div>
              <ul className="nav">
                  <li className={this.isPathActive('/components/buttons') ? 'active' : null}>
                  <Link to="/components/buttons">Handover</Link>
                </li>
                <li className={this.isPathActive('/components/grid') ? 'active' : null}>
                  <Link to="/components/grid">View Jobs </Link>
                </li>
              </ul>
            </div>
          </Collapse>
    </li>

               <li className={this.isPathActive('/forms') || this.state.formMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ formMenuOpen: !this.state.formMenuOpen })} data-toggle="collapse">
            <i className="pe-7s-note2"></i>
            <p>Incident Management<b className="caret"></b></p>
          </a>
          <Collapse in={this.state.formMenuOpen}>
            <div>
              <ul className="nav">
                <li className={this.isPathActive('/forms/validation-forms') ? 'active' : null}>
                  <Link to="/forms/validation-forms">Create incident</Link>
                </li>
                <li className={this.isPathActive('/Tables/RegularTables') ? 'active' : null}>
                  <Link to="/Tables/RegularTables">Incidents</Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li>
        </ul>
          );    }

  }
        

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }
}

export default withRouter(Nav);