var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {
        
        //var withdrawfrom = Game.getObjectById('608061833769c56803457f34');
        
        var container1 = Game.getObjectById('60851c59d4d94462fc69c451');
        /**
        var container2 = Game.getObjectById('608061833769c56803457f34');
        
        if(container2.store[RESOURCE_ENERGY] > 1) {
            var withdrawfrom = container2;
        }
        else if(container1.store[RESOURCE_ENERGY] > (container1.store.getCapacity(RESOURCE_ENERGY)/2)) {
            var withdrawfrom = container1;
        }
        else {
            var withdrawfrom = container2;
        }
        **/
        if(creep.memory.upgrading && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.upgrading = false;
            creep.say('🔌 Harvesting   ');
	    }
	    if(!creep.memory.upgrading && creep.store.getFreeCapacity() == 0) {
	        creep.memory.upgrading = true;
	        creep.say('⚡ '+'  Upgradeing  ');
	    }

	    if(creep.memory.upgrading) {
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#b5b210'}});
            }
        }
        else {
            if(creep.withdraw(container1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(container1, {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
        
	}
};

module.exports = roleUpgrader;
