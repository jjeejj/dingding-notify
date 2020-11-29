# dingding-notify

钉钉通知

### 安装

```bash
npm i dingding-notify
```

或者

```bash
yarn add dingding-notify
```

### 使用方法

```typescript
import { Dingding } from "dingding-notify";
const dingding = new Dingding({
    webhook: "url",
    secret: "secret"
});

const body = await dingding.notity({
    msgtype: "text",
    text: {
        content: "this is text test"
    }
});
```
