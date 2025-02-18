import { Component, ReactNode } from "react";

export default class DisableBodyScroll extends Component {
  componentDidMount(): void {
    document.body.classList.add("overflow-y-hidden");
  }

  componentWillUnmount(): void {
    document.body.classList.remove("overflow-y-hidden");
  }

  render(): ReactNode {
    return false
  }
}
