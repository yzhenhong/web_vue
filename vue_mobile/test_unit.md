https://www.jianshu.com/p/2bb292c1cb5b

# 如何测试 vue 组件 渲染结果、改变 props、触发事件等

文档：

- https://jestjs.io/
- https://vue-test-utils.vuejs.org/zh/

名词解释：describe 套件、it 断言、expect 期望、test 测试

## 执行命令

- npm run test:unit 单元测试
- npm run test:unit -- --coverage 单元测试并打印报告

代码执行覆盖率 4 个参数：

| Stmts      | Branch           | Funcs | Lines    | Uncovered Line |
| ---------- | :--------------- | ----- | -------- | -------------- |
| 语句覆盖率 | 分支如 `if else` | 函数  | 行覆盖率 | 未执行到的行号 |

执行后，会多一个文件夹 coverage，内部有个 html 文件可以访问详情

## 生命周期函数

- 所有的单元测试前执行 beforeAll ->
- 单个测试先执行 beforeEach -> 在执行 it -> 再执行 afterEach ->
- 所有的单元测试完成后执行 afterAll

```
describe('HelloWorld.vue', () => {
  beforeAll(() => {
    console.log('111')
  })
  afterEach(() => {
    console.log('444')
  })
  afterAll(() => {
    console.log('555')
  })
  beforeEach(() => {
    console.log('222')
  })

 it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld as any, {
      props: { msg },
    })
    console.log('333:', wrapper.text())
    expect(wrapper.text()).toEqual('abc') //失败
    //expect(wrapper.text()).toEqual(msg) //成功
  })
})
```

## 异步测试

- 需要有 done()才对,注意 it 那里需要传入 done
- 也可以 async 或 promise 实现

```
it('renders props.msg when passed', (done) => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld as any, {
      props: { msg },
    })
    console.log('333:', wrapper.text())
    setTimeout(() => {
      expect(wrapper.text()).toEqual(msg)
      done()
    }, 200)
  })
})
```

## shallowMount 和 Mount 的区别

- shallowMount 不会渲染子组件
- mount 会渲染子组件 【推荐是用这个】

方法:\
find 查找节点、findComponent 查找组件、\
props 参数、trigger 事件

```
import { mount, shallowMount } from '@vue/test-utils'
import { defineComponent, h } from 'vue'

const Test = defineComponent({
  name: 'Test',
  setup() {
    return () => h('span', '123')
  },
})

const HelloWorld = defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  setup(props) {
    return () => {
      return h('div', [h(Test)])
    }
  },
})

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', async () => {
    const msg = 'new message'
    const swrapper = shallowMount(HelloWorld as any)
    const wrapper = mount(HelloWorld)
    const ss = swrapper.find('span')
    const s = wrapper.find('span') //查找节点
    //查找组件
    const helloWorld = wrapper.findComponent({
      name: 'HelloWrold',
    })

    //2函数的区别
    console.log('1111', ss) //shallowMount 不会渲染子组件，所以找不到span标签
    console.log('2222', s) //mount 会渲染子组件，所以找到了span标签
    //注意：shallowMount会执行子组件Test，但不会渲染，不会执行return
    expect(wrapper.text()).toEqual(msg)
  })
})
```

## vue3 单元测试例子

```
describe('JsonSchemaFrom', () => {
  it('should render correct number field', async () => {
    let value = ''
    const wrapper = mount(JsonSchemaForm, {
      props: {
        schema: {
          type: 'number',
        },
        value: value,
        onChange: (v: any) => {
          value = v
        },
      },
    })

    const numberFiled = wrapper.findComponent(NumberFiled)
    expect(numberFiled.exists()).toBeTruthy() //判断子组件是否存在，并成功渲染

    await numberFiled.props('onChange')('1234') //方式一

    //方式二
    // const input = numberFiled.find('input') //是否有input
    // input.element.value = '123'
    // input.trigger('input')
    expect(value).toBe(123) //将input输入数字123后，内部的value值是否会改为数字123，而不是字符串“123”
  })
})
```
