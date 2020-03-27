<template>
    <div>
        <input type="text" v-model="todo" @keydown="doAdd($event)">
        <hr>
        <br>
        <h2>进行中</h2>
        <ul>
            <li v-for="(item, key) in list" v-if="!item.checked">
                <input type="checkbox" v-model="item.checked" @change="saveList()">
                {{item.title}} <button @click="removeData(key)">删除</button>
            </li>
        </ul>

        <br>
        <br>
        <h2>已完成</h2>
        <ul>
            <li v-for="(item, key) in list" v-if="item.checked">
                <input type="checkbox" v-model="item.checked" @change="saveList()">
                {{item.title}} <button @click="removeData(key)">删除</button>
            </li>
        </ul>
    </div>

</template>

<script>
    import storage from '../model/storage'
    export default {
        name: "TodoList",
        data() {
            return {
                todo: '',
                list: []
            }
        },
        methods: {
            doAdd(e) {
                if (e.keyCode === 13) {
                    this.list.push({
                        title: this.todo,
                        checked: false
                    })
                }
                this.todo = '';
                storage.set('list', this.list)
            },
            removeData(key) {
                this.list.splice(key, 1);
                storage.set('list', this.list)
            },
            saveList() {
                storage.set('list', this.list)
            }
        },
        mounted() { // 生命周期函数 vue页面刷新就会触发方法
            var list = storage.get('list');

            if (list) { // 不判断就会把 null赋值，上面循环会报错
                this.list = list;
            }
        }
    }
</script>

<style scoped>

</style>
