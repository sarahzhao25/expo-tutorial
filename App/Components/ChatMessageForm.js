import React, { Component } from 'react'
import { TextInput, View } from 'react-native'
import { Button } from 'react-native-elements'

class ChatMessageForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user_email: this.props.currentUser.user_email,
      message: ''
    }
  }

  render() {
    const { handleSubmit, currentUser } = this.props
    return (
      <View style={{padding: 20, marginBottom: 10}}>
      {!currentUser.user_email &&
        <TextInput
          placeholder="Email Address"
          name="user_email"
          onChangeText={(user_email) => this.setState({ user_email })}
          value={this.state.user_email}
        />}
        <TextInput
          placeholder="Message here"
          name="message"
          onChangeText={(message) => this.setState({ message })}
          value={this.state.message}
        />
        <Button
          onPress={() => {
            handleSubmit(this.state)
            this.setState({ message: '' })
          }}
          title="Submit"
        />
      </View>
    )
  }
}

export default ChatMessageForm
