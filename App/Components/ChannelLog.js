import React from 'react'
import { FlatList, View, Text } from 'react-native'
import PropTypes from 'prop-types'

const ChannelLog = ({ channels, navigate }) => (
  <View style={{flex: 1, flexDirection: 'column', width: '100%'}} >
    <FlatList
      data={channels}
      renderItem={({item}) => (
        <Text onPress={() => navigate('SingleChat', {channelId: item.id})}>
          {item.name}
        </Text>
      )}
      keyExtractor= {item => item.id}
    />
  </View>
)

export default ChannelLog
