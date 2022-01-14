# private-message-center
快速给自己发消息的API

#### Usage

##### Curl

```bash
curl "https://msg.dibiaozuitu.com/dingtalk/call?content=让我的钉钉机器人给我发消息&webhook=钉钉机器人的webhook&secret=钉钉机器人的secret"
```

##### Get(node)

```js
axios.post(
  'https://msg.dibiaozuitu.com/dingtalk/call',
  {
    content: '让我的钉钉机器人给我发消息',
    webhook: '钉钉机器人的webhook',
    secret: '钉钉机器人的secret'
  }
).then((a) => console.log(a))
  .catch((e) => console.log(e))
```

##### Post(node)

```js
axios.get(
  'https://msg.dibiaozuitu.com/dingtalk/call',
  {
    params: {
      content: '让我的钉钉机器人给我发消息',
    	webhook: '钉钉机器人的webhook',
    	secret: '钉钉机器人的secret'
    }
  }
).then((a) => console.log(a))
  .catch((e) => console.log(e))
```

##### 
