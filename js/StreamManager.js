import {FailedExistException, FailedEmptyException, FailedObjTypeException } from "./exception.js";


const StreamManager = (function () {

    let instance;

    class StreamManager {

        #name;
        #categories = [];
        #users = [];
        #productions = [];
        #actors = [];
        #directors = [];
        #windows = [];

        constructor(name = "Streaming 4 You") {

            if((name === null)) throw new FailedEmptyException("name");
            this.#name = name;
        }

        get categories() {
            let list = this.#categories;

            return {
                *[Symbol.iterator]() {
                    for (let category of list) {
                        yield category;
                    }
                }
            }
        }

        get users() {
            let list = this.#users;

            return {
                *[Symbol.iterator]() {
                    for (let user of list) {
                        yield user;
                    }
                }
            }
        }

        get productions() {
            let list = this.#productions;

            return {
                *[Symbol.iterator]() {
                    for (let production of list) {
                        yield production;
                    }
                }
            }
        }

        get actors() {
            let list = this.#actors;

            return {
                *[Symbol.iterator]() {
                    for (let actor of list) {
                        yield actor;
                    }
                }
            }
        }

        get directors() {
            let list = this.#directors;

            return {
                *[Symbol.iterator]() {
                    for (let actor of list) {
                        yield actor;
                    }
                }
            }
        }

        #getCategoryPos(elem) {
            if (!(elem instanceof Category)) throw new FailedObjTypeException();

            function compObj(element) {
                return (element.category.name === elem.name)
            }
            return this.#categories.findIndex(compObj);
        }

        addCategory(element) {
            if ((!(element instanceof Category)) || (element == null)) throw new FailedObjTypeException();
            let position = this.#getCategoryPos(element);
            if (position === -1) {
                this.#categories.push(
                    {
                        category: element,
                        products: []
                    }
                );
                return this.#categories;

            } else {
                throw new FailedExistException();
            }
        }



    }

    function createInstance(){
        const streamManager = new StreamManager();
        return streamManager;
    }

    return{
        getInstance(){
            if(!instance){
                instance = createInstance();
            }
            return instance;
        }
    }
});

export {StreamManager};