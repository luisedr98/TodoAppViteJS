import html from './app.html?raw';
/**
 * 
 * @param {*} elementId 
 */
const app = (elementId) => {
    (()=>{
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).appendChild(app);
    })();    

}

export default app;