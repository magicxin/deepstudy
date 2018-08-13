## Treelist

### Treelist Attributes

| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| tree | 左侧树的数组 | Array | — | [] |
| content | 右侧内容的合集,每一个数组项需要包含title[String] tutorials[Array] | Array | — | [] |
| duration | 动态效果的过渡时间 | Number | — | 0.2 |

### Treelist methods

| 函数名    |  说明           |  参数          |
|-------------  |---------------- |---------------- |
|navclick |右侧单个课程的点击事件 |params:{parent:'',child:''} |

#### Treelist methods 参数说明

| 参数名    |  说明           |  类型          |
|-------------  |---------------- |---------------- |
|形参 |包含返回对象 |Object |
|parent |父级下标值 |Number |
|child |子级下标值 |Number |
