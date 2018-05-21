import { delay } from 'redux-saga'
import { put } from 'redux-saga/effects'
import lorem from 'lorem-ipsum-react-native'

const emails = [
  'a@b.com',
  'test@rehashstudio.com',
  'steve@jobs.com',
  'hello@world.com',
  'foo@bar.com',
]

const channelIds = [
  1,
  2,
  3
]

function *addChatsSaga() {
  while (true) {
    yield delay(5000)
    const email = emails[Math.floor(Math.random() * emails.length)];
    const channelId = channelIds[Math.floor(Math.random() * channelIds.length)];
    yield put({
      type: 'ADD_MESSAGE',
      user_email: email,
      message: lorem({
      }),
      isUser: false,
      channelId: channelId
    })
  }
}

export default addChatsSaga
