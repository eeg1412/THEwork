# blog

### 安装依赖

```
npm install
```

### 运行

```
npm run start
```

### api 基本路径

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

### 查询博文

路径：/blog  
类型：GET  
headers 认证信息：  
| 参数名 | 类型 | 描述 |
| -- | -- | -- |
| token | String | 登录返回的 Token |

发送信息：  
| 参数名 | 类型 | 描述 |
| -- | -- | -- |
| id | String | 文章 id |

返回信息：  
| 参数名 | 类型 | 描述 |
| -- | -- | -- |
| code | Number | 状态码：0 失败，1 成功 |
| blog | Object | 文章数据 |
| msg | String | 信息 |

### 查询博文列表

路径：/blogList  
类型：GET  
headers 认证信息：  
| 参数名 | 类型 | 描述 |
| -- | -- | -- |
| token | String | 登录返回的 Token |

发送信息：  
| 参数名 | 类型 | 描述 |
| -- | -- | -- |
| page | Number | 页码 |
| size | Number | 一页多少条 |

返回信息：  
| 参数名 | 类型 | 描述 |
| -- | -- | -- |
| code | Number | 状态码：0 失败，1 成功 |
| list | Array | 文章列表 |
| total | Number | 文章总数 |
| msg | String | 信息 |

### 创建博文

路径：/blogCreat  
类型：POST  
headers 认证信息：  
| 参数名 | 类型 | 描述 |
| -- | -- | -- |
| token | String | 登录返回的 Token |

发送信息：  
| 参数名 | 类型 | 描述 |
| -- | -- | -- |
| title | String | 文章标题 |
| content | String | 文章内容 |

返回信息：  
| 参数名 | 类型 | 描述 |
| -- | -- | -- |
| code | Number | 状态码：0 失败，1 成功 |
| msg | String | 信息 |

### 修改博文

路径：/blogEdit  
类型：POST  
headers 认证信息：  
| 参数名 | 类型 | 描述 |
| -- | -- | -- |
| token | String | 登录返回的 Token |

发送信息：  
| 参数名 | 类型 | 描述 |
| -- | -- | -- |
| title | String | 文章标题 |
| content | String | 文章内容 |
| id | String | 文章 id |

返回信息：  
| 参数名 | 类型 | 描述 |
| -- | -- | -- |
| code | Number | 状态码：0 失败，1 成功 |
| msg | String | 信息 |

### 删除博文

路径：/blogRemove  
类型：POST  
headers 认证信息：  
| 参数名 | 类型 | 描述 |
| -- | -- | -- |
| token | String | 登录返回的 Token |

发送信息：  
| 参数名 | 类型 | 描述 |
| -- | -- | -- |
| id | String | 文章 id |

返回信息：  
| 参数名 | 类型 | 描述 |
| -- | -- | -- |
| code | Number | 状态码：0 失败，1 成功 |
| msg | String | 信息 |
