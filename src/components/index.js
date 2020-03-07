// 负责导出所有的组件
    /* 方法一 */
// import TodoHeader from './TodoHeader'
// import TodoInput from './TodoInput'
// import TodoList from './TodoList'

// export {
//     TodoHeader,
//     TodoInput,
//     TodoList
// }

    /* 方法二 */
export { default as TodoHeader } from './TodoHeader'
export { default as TodoList } from './TodoList'
export { default as TodoInput } from './TodoInput'
export { default as Like } from './Like'