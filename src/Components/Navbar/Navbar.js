import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { Query } from "@apollo/client/react/components";
import Logo from "../../Assets/logo.svg";
import IconContainer from "./IconContainer";
import Minicart from "../Minicart/Minicart";
import Currencies from "../Currencies/Currencies";
import CATEGORY from "../../Queries/CategoryQuery";
import "./Navbar.css";

export class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currenciesOpen: false,
      minicartOpen: false,
    };

    this.currenciesIcon = React.createRef();
    this.minicartIcon = React.createRef();
  }

  navStyles = ({ isActive }) => {
    return {
      color: isActive ? "var(--green)" : "",
      fontWeight: isActive ? "600" : "",
      borderBottom: isActive ? "var(--green) solid 2px" : "",
    };
  };

  displayNavbar = (loading, error, data) => {
    const { currenciesOpen, minicartOpen } = this.state;
    if (loading) return "loading...";
    if (error) return "error...";
    if (data) {
      if (!data.categories) {
        return <Link to="/404" />;
      }
      const { categories } = data;

      return (
        <>
          <nav>
            <div className="category-container">
              {categories.map((category) => (
                <NavLink className="category" style={this.navStyles} key={category.name} to={`/${category.name}`} onClick={() => this.props.handleActiveCategory(category.name)}>
                  {category.name}
                </NavLink>
              ))}
            </div>
            <NavLink className="logo" to={`/`}>
              <img src={Logo} alt="logo" />
            </NavLink>
            <IconContainer
              currenciesOpen={currenciesOpen}
              isMinicartOpen={this.isMinicartOpen}
              isCurrenciesOpen={this.isCurrenciesOpen}
              currenciesRef={this.currenciesIcon}
              minicartRef={this.minicartIcon}
            />
          </nav>
          <Minicart minicartOpen={minicartOpen} isMinicartOpen={this.isMinicartOpen} minicartRef={this.minicartIcon} />
          <Currencies currenciesOpen={currenciesOpen} isCurrenciesOpen={this.isCurrenciesOpen} currenciesRef={this.currenciesIcon} />
        </>
      );
    }
  };

  isCurrenciesOpen = (state) => {
    this.setState({
      currenciesOpen: state,
    });
  };

  isMinicartOpen = (state) => {
    this.setState({
      minicartOpen: state,
    });
  };

  render() {
    return <Query query={CATEGORY}>{({ loading, data, error }) => this.displayNavbar(loading, error, data)}</Query>;
  }
}

export default Navbar;
