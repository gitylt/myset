import pagination from './index.vue'
pagination.install = function(vue){
    vue.component(pagination.name,pagination)
}

export default pagination;