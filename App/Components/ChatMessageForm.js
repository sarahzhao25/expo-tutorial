import React, { Component } from 'react'
import { KeyboardAvoidingView, TextInput, View } from 'react-native'
import { Button } from 'react-native-elements'

class ChatMessageForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user_email: '',
      message: ''
    }
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <View style={{padding: 20, marginBottom: 10}}>
        <TextInput
          placeholder="Email Address"
          name="user_email"
          onChangeText={(user_email) => this.setState({ user_email })}
          value={this.state.user_email}
        />
        <TextInput
          placeholder="Message here"
          name="message"
          onChangeText={(message) => this.setState({ message })}
          value={this.state.message}
        />
        <Button
          onPress={() => {
            handleSubmit(this.state)
            this.setState({user_email: '', message: ''})
          }}
          title="Submit"
        />
      </View>
    )
  }
}

export default ChatMessageForm
