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

function* addChatsSaga() {
  while (true) {
    yield delay(5000)
    const email = emails[Math.floor(Math.random()*emails.length)];
    yield put({
      type: 'ADD_MESSAGE',
      user_email: email,
      message: lorem({
      }),
    })
  }
}

export default addChatsSaga
