const { models }  = require('../../libraries/sequelize')


class CategoriesService{
    constructor(){
    }

    async create(data) {
        const newCategory = await models.Category.create(data)
        return newCategory
    }

    async find() {
        const categories = await models.Category.findAll()
        return categories
    }

    async findOne(id) {
        const category = await models.Category.findByPk(id, {
            include: ['products'] 
        })
        return category;
    }

    
    async update(id, changes) {
        const Category = await this.findOne(id)
        const updated = await Category.update(changes)
        return updated

    }

}

module.exports = CategoriesService;