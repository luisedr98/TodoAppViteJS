import './style.css'
import app from './src/todo/app';
import todoStore from './src/store/todo.store'

todoStore.initStore();
app('#app');