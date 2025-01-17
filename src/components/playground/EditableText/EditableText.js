import PropTypes from "prop-types"
import React, { Component, createRef } from "react"

import { EditableTextContainer, MenuButton } from "./EditableText.style"
import editIcon from "../../../images/icon-edit.png"

class ConditionSentence extends Component {
  static propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func,
    sentence: PropTypes.string,
  }

  containerRef = createRef()

  onButtonClick = () => this.props.onClick(this.containerRef)

  render() {
    return (
      <EditableTextContainer ref={this.containerRef}>
        {this.props.sentence}
        <MenuButton
          aria-label={"".concat(
            this.props.label || "",
            "-editable-text-button"
          )}
          onClick={this.onButtonClick}
          type="button"
        >
          <img alt="menu" src={editIcon} />
        </MenuButton>
      </EditableTextContainer>
    )
  }
}

export default ConditionSentence
