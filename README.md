# dingding-notify

钉钉通知

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
