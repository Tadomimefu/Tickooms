{
    "color":"#ffffff",
    "serverId":"1068550337025277982",
    "token":{
        "value":"MTEzNTE5MzI2MDEzMDgzMjQ5NA.GoEyPu.-RqE6INIBjx1LcSoMMol2ck5v0-7KrU_HqeVbo",
        "fromENV":true
    },
    "adminRoles":["1068845413928550400"],
    "prefix":"!ticket ",
    "languageFile":"english",

    "status":{
        "enabled":true,
        "type":"PLAYING",
        "text":"!ticket help"
    },

    "system":{
        "maxAmountOfTickets":5,
        "dmMessages":false,

        "memberRole":"1068804158284636200",
        "closeMode":"normal",

        "transcripts":"!!!! ALL SETTINGS FOR TRANSCRIPTS ARE LOCATED IN: transcriptconfig.json !!!!",

        "showSlashcmdsInHelp":false,
        "answerInEphemeralOnOpen":true
    },

    "SUPPORT":"Chat the moderators, or take a look at the bot's support website. https://docs.openticket.dj-dj.be",
    "options":[
        {
            "id":"general",
            "name":"Request",
            "description":"Create this ticket if you have a question, or a support request.",
            "icon":"🎫",
            "label":"Request",
            "type":"ticket",

            "color":"gray",
            "adminroles":["1068845413928550400"],
            "readonlyAdminroles":["1068571782803628132"],
            "channelprefix":"Ticket-",
            "category":"",
            "message":"You created a ticket!",
            "enableDmOnOpen":true,
            "ticketmessage":"The staff will help you soon!\n\n*Click on the button below to close the ticket!*",

            "thumbnail":{
                "enable":false,
                "url":"https://www.example.com/catmemes/cat.png"
            },
            "image":{
                "enable":false,
                "url":"https://www.dj-dj.be/wp-content/uploads/2022/09/pfp-cropped.png"
            },

            "closedCategory":{
                "enable":false,
                "id":"category id"
            },

            "autoclose":{
                "enable":true,
                "inactiveHours":24
            },

            "ping":{
                "@here":true,
                "@everyone":false,
                "custom":{
                    "enable":false,
                    "roleId":"012345678910"
                }
            }
            
        },
        {
            "id":"website",
            "name":"Website",
            "description":"Go to our website.",
            "icon":"✅",
            "label":"click here",
            "type":"website",

            "url":"https://www.dj-dj.be"
            
        },
        {
            "id":"role",
            "name":"Verify",
            "description":"Click here to get the verify role.",
            "icon":"👮🏼",
            "label":"get a role",
            "type":"role",

            "color":"red",
            "roles":["1068804158284636200"],
            "mode":"add&remove",
            "enableDmOnOpen":true
            
        }
    ],

    "messages":[
        {
            "id":"1",
            "name":"Choose Your Ticket",
            "description":"You can click one of the buttons below!",
            "dropdown":true,

            "enableFooter":true,
            "footer":"Selfhosted - i52410",

            "enableFooterImage":false,
            "footerImage":"https://www.example.com/catmemes/cat.png",

            "enableThumbnail":false,
            "thumbnail":"https://www.example.com/catmemes/cat.png",

            "enableImage":false,
            "image":"https://www.example.com/catmemes/cat.png",

            "enableCustomColor":false,
            "color":"#ffffff",

            "options":["general","apply"],
            
            "other":{
                "enableTicketExplaination":true,
                "enableMaxTicketsWarning":true,
                
                "customDropdownPlaceholder":{
                    "enable":false,
                    "text":"Choose a ticket"
                },
                "customCategoryText":{
                    "enable":false,
                    "text":"choose a category:"
                },
                "embedTitleURL":{
                    "enable":false,
                    "url":"https://www.dj-dj.be/projects/open-ticket"
                }
            }
        }
    ]
}
