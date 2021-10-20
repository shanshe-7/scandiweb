import React from "react";
import { OutsideClickDeteCtorProps } from "./types";

export class OutsideClickDetector extends React.Component<OutsideClickDeteCtorProps> {
  ref: React.RefObject<HTMLDivElement>;

  constructor(props: OutsideClickDeteCtorProps) {
    super(props);
    this.ref = React.createRef();
  }

  handleClickOutside(event: any) {
    if (
      this.ref.current &&
      !this.ref.current?.contains(event.target) &&
      event.offsetX <= event.target.clientWidth
    ) {
      this.props.onClickOutside && this.props.onClickOutside();
    }
  }

  componentDidMount() {
    document.addEventListener(
      "mousedown",
      this.handleClickOutside.bind(this),
      true
    );
  }

  componentWillUnmount() {
    document.removeEventListener(
      "mousedown",
      this.handleClickOutside.bind(this),
      true
    );
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        ref={this.ref}
      >
        {this.props.children}
      </div>
    );
  }
}
