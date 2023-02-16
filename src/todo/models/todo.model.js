
export default class Todo {
    /**
     * create a new instace about TODO
     * @param {String} task tarea que se va a guardar en el todo
     */
    constructor(description){
        if (!description || description === '') throw Error('task es obligatorio');
        this.id = 1
        this.description = description;
        this.done = false;
        this.createdAt = new Date();

    }
}