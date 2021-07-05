const Discord = require('discord.js')

module.exports = class commandRunner{
    /**
     * 
     * @param {Discord.CommandInteraction} interaction The interaction to reply or manage
     * @param {Object} externalsource TODO: remember what this is for
     * @param {String} source The name of the source that it came from, for example commands from discord will report 'discord'
     */
    constructor(interaction=null,externalsource=null,source){
        this.interaction=interaction
        this.externalsource=externalsource
        this.source=source
    }
    /**@type {Discord.CommandInteraction|null} The interaction to reply or manage*/
    interaction
    /**@type {Object|null} TODO: remember what this is for */
    externalsource
    /**@type {String} The name of the source that it came from, for example commands from discord will report 'discord' */
    source
}