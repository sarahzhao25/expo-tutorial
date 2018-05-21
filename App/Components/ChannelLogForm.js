import React, { Component } from 'react'
import { TextInput, View } from 'react-native'
import { Button } from 'react-native-elements'

class ChannelLogForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <View style={{padding: 20, marginBottom: 10}}>
        <TextInput
          placeholder="New Channel Name"
          name="name"
          onChangeText={(name) => this.setState({ name })}
          value={this.state.name}
        />
        <Button
          onPress={() => {
            handleSubmit(this.state)
            this.setState({name: ''})
          }}
          title="Submit"
        />
      </View>
    )
  }
}

export default ChannelLogForm
