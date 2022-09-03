const { Model, sequelize, DataTypes} = require('sequelize');
const { USER_TABLE } = require('./user.model');

const CUSTOMER_TABLE = 'Customers';

const CustomerSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    surname: {
        allowNull: false,
        type: DataTypes.STRING
    },
    phone: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
    },
    userId: {
        field: 'user_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        unique: true,
        references: {
            model: USER_TABLE,
            key: 'id'
        },//Gracias a esta referencia, puedo desde customer crear a mi usuario
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'

    }

}


class Customer extends Model {
    static associate(models) {
        this.belongsTo(models.user, {as: 'user'})

    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: CUSTOMER_TABLE,
            modelName: 'Customer',
            timestamps: false
        }
    }
}

module.exports = {
    CUSTOMER_TABLE,
    CustomerSchema,
    Customer,
}