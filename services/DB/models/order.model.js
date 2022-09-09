const { Model, DataTypes, Sequelize } = require('sequelize')

const ORDER_TABLE = 'orders';

const OrderSchema = {
    id: {
        unique: true,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    customerId: {
        field: 'customer_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: COSTUMER_TABLE,
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


class Order extends Model {
    static associate(models) {
        this.belongsTo(models.Customer, {as: 'customer'})
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: ORDER_TABLE,
            modelName: 'Order',
            timestamps: false
        }
    }
}

module.exports = {
    Order,
    OrderSchema,
    ORDER_TABLE
}