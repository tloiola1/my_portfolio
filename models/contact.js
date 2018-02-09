
module.exports = function(sequelize, DataTypes){

	var contact = sequelize.define("contacts", {
		name:{
			type: DataTypes.STRING,
			allowNull: false
		},
		email:{
			type: DataTypes.STRING,
			allowNull: false
		},
		message:{
			type: DataTypes.TEXT,
			allowNull: false
		}
	});
	return contact;
}