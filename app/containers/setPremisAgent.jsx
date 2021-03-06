import React from 'react'
import PropTypes from 'prop-types'
import PremisAgentHandler from '../utils/premisAgentHandler'
import {PremisHeading, PremisTextInput, PremisSelect} from '../components/premis'
import {PremisAgentStrings} from '../utils/outputStrings'

class SetPremisAgent extends React.Component {

  constructor (props) {
    super(props)

    const numTypes = PremisAgentHandler.typeOptions.length
    let typeSelections = []
    for (let i = 0; i < numTypes; i++) {
      typeSelections[i] = { value: i, label: PremisAgentHandler.typeOptions[i] }
    }


    this.state = {
      typeId: undefined,
      typeSelections: typeSelections
    }
  }

  _handleName (_name) {
    this.props.agentHandler.setName(_name)
  }

  _handleType (_selection) {
    // console.log(_selection.value)
    this.props.agentHandler.setType(_selection.label)
    this.setState({typeId: _selection.value})
  }

  render () {
    return (
      <div>
        <PremisHeading heading={PremisAgentStrings.heading} />
        <PremisTextInput parentFunc={this._handleName.bind(this)} placeHolder={PremisAgentStrings.namePlaceHolder} label={PremisAgentStrings.nameLabel} tip={PremisAgentStrings.nameTip} />
        <PremisSelect parentFunc={this._handleType.bind(this)} placeHolder={PremisAgentStrings.typePlaceHolder} tip={PremisAgentStrings.typeTip} selections={this.state.typeSelections} selection={this.state.typeId} />
      </div>
    )
  }

  /* componentWillUpdate() {

  } */
}

SetPremisAgent.propTypes = {
  web3: PropTypes.object,
  agentHandler: PropTypes.object
}

export default SetPremisAgent
