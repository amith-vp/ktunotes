const { SlashCommandBuilder } = require('@discordjs/builders');
// const notes = require("./notes.json");
const notes = require("./resource.json");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('notes')
		.setDescription('Get notes and resources')
		.addStringOption(option => option.setName('subject').setDescription('Select Subject').setRequired(true)
        .addChoice('Maths1', 'mat1')
        .addChoice('Maths2', 'mat2')
        .addChoice('Physics', 'phy')
        .addChoice('Chemistry', 'chem')
        .addChoice('Basic of Electrical Eng.', 'bee')
        .addChoice('Basic of Electronics Eng', 'bec')
        .addChoice('Basic of Mechanical Eng', 'bme')
        .addChoice('Engineering Graphics', 'eg')
        .addChoice('Engineering Mechanics', 'em')
        .addChoice('C Programming', 'cp')
        .addChoice('LIfeskill', 'ls')
        .addChoice('Professional Communication', 'pc'))
		.addStringOption(option => option.setName('resourcetype').setDescription('Select resource type')
        .addChoice('Question Paper', 'qp')
        .addChoice('Important Question', 'iq')
        .addChoice('Notes', 'notes')
        .addChoice('Capsule', 'capsule')
        .addChoice('Youtube Channel', 'yt')
        ),
	async execute(interaction) {
        const subject = interaction.options.getString('subject');
        const resource = interaction.options.getString('resourcetype');
        console.log(subject,resource)
         console.log(notes.bee.qp)
		 return interaction.reply(notes[subject][resource]);
	},
};





// var x = document.querySelectorAll("a");
// var myarray = []
// for (var i=0; i<x.length; i++){
// var nametext = x[i].textContent;
// var cleantext = nametext.replace(/\s+/g, ' ').trim();
// var cleanlink = x[i].href;
// myarray.push([cleantext,cleanlink]);
// };

// var w = window.open("");
// jsonString = JSON.stringify({myarray})
// w.document.write(jsonString); 
