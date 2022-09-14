const { Model, DataTypes, Sequelize } = require('sequelize')
const { ORDER_TABLE } = require('./order.model')
const { PRODUCT_TABLE } = require('./products.model')


const ORDER_PRODUCT_TABLE = 'orders_products';

const OrderProductSchema = {
    id: {
        unique: true,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    amount: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    orderId: {
        field: 'order_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: ORDER_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    productId: {
        field: 'product_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: PRODUCT_TABLE,
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'

    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
    }
}


class OrderProduct extends Model {
    static associate(models) {
        this.belongsTo(models.Customer, {as: 'customer'})
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: ORDER_PRODUCT_TABLE,
            modelName: 'OrderProduct',
            timestamps: false
        }
    }
}

module.exports = {
    OrderProduct,
    OrderProductSchema,
    ORDER_PRODUCT_TABLE
}