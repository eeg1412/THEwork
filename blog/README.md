# blog

### 安装依赖

```
npm install
```

### 运行

```
npm run start
```

### api 路径

127.0.0.1:3001/api

## api 接口

### 注册

路径：/register  
类型：POST  
发送信息：  
| 参数名 | 类型 | 描述 |
|--|--|--|
| account | String | 账号 |
| password | String | 密码 |

返回信息：  
| 参数名 | 类型 | 描述 |
|--|--|--|
| code | Number | 状态码：0 失败，1 成功 |
| msg | String | 信息 |

### 登录

路径：/login  
类型：POST  
发送信息：  
| 参数名 | 类型 | 描述 |
| -- | -- | -- |
| account | String | 账号 |
| password | String | 密码 |

返回信息：  
| 参数名 | 类型 | 描述 |
| -- | -- | -- |
| code | Number | 状态码：0 失败，1 成功 |
| token | String | 认证信息（如果成功） |
| msg | String | 信息 |
