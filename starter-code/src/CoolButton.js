import React, { Component } from "react";
import "bulma/css/bulma.css";

const elements = {
  isActive: "is-active",
  isBlack: "is-black",
  isCentered: "is-centered",
  isDanger: "is-danger",
  isDark: "is-dark",
  isFocused: "is-focused",
  isGrouped: "is-grouped",
  isHovered: "is-hovered",
  isInfo: "is-info",
  isInverted: "is-inverted",
  isLarge: "is-large",
  isLight: "is-light",
  isLink: "is-link",
  isLoading: "is-loading",
  isMedium: "is-medium",
  isOutlined: "is-outlined",
  isPrimary: "is-primary",
  isRight: "is-right",
  isRounded: "is-rounded",
  isSelected: "is-selected",
  isSmall: "is-small",
  isStatic: "is-static",
  isSuccess: "is-success",
  isText: "is-text",
  isWarning: "is-warning",
  isWhite: "is-white"
};

class CoolButton extends Component {
  render() {
    console.log(this.props);
    console.log(elements.isSuccess);
    const { isSmall, isDanger, isSuccess, isDark } = this.props;
    let { className } = this.props;

    if (!className) {
      className = "button";
    } else {
      className = "button " + className;
    }

    if (isSuccess) {
      className += " " + elements.isSuccess;
    }

    if (isDanger) {
      className += " " + elements.isDanger;
    }

    if (isSmall) {
      className += " " + elements.isSmall;
    }

    if (isDark) {
      className += " " + elements.isDark;
    }

    return <button className={className}>{this.props.children}</button>;
  }
}

export default CoolButton;
