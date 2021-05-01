var roleGunner4 = {

    /** @param {Creep} creep **/
    run: function(creep) {
        
        if(!creep.memory.fighting) {
            creep.memory.fighting = true;
            creep.say('💂 Waiting   ');
	    }
	    if(creep.memory.fighting) {
	        creep.memory.fighting = false;
	        
	    }
        
        if(!creep.memory.fighting) {
            var target = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 3);
            
            if(target.length > 0) {
                creep.say('🔫'+'PEWPEW');
                creep.rangedAttack(target[0]);
            }
        }
        if(!creep.memory.fighting) {
        creep.moveTo(Game.flags.FlagGunner4);
        }
    }
};

module.exports = roleGunner4;
