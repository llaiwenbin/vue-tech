// test.js

// 从测试实用工具集中导入 `mount()` 方法
// 同时导入你要测试的组件
import { mount } from '@vue/test-utils'
import Test from '../test'

describe('Test', () => {
    // 现在挂载组件，你便得到了这个包裹器
    const wrapper = mount(Test)

    it('renders the correct markup', () => {
        expect(wrapper.html()).toContain('<span class="count">0</span>')
    })

    // 也便于检查已存在的元素
    it('has a button', () => {
        expect(wrapper.contains('button')).toBe(true)
    })
})