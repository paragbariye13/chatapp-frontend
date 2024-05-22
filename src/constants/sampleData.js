export const sampleChats = [{
    avatar:["https://www.w3schools.com/howto/img_avatar.png"],
    name:"John Doe",
    _id:"1",
    groupChat:false,
    members:["1","2"],
},
{
    avatar:["https://www.w3schools.com/howto/img_avatar.png"],
    name:"Pappu Passport",
    _id:"2",
    groupChat:true,
    members:["1","2"],
},

]

export const sampleUsers = [{
    avatar:"https://www.w3schools.com/howto/img_avatar.png",
    name:"John Doe",
    _id:"1",
},
{
    avatar:"https://www.w3schools.com/howto/img_avatar.png",
    name:"Pappu Passport",
    _id:"2",

},


]

export const sampleNotifications = [
    {
        sender:{
            avatar:"https://www.w3schools.com/howto/img_avatar.png",
            name:"John Doe",
        },
        _id:"1",
    },
    {
        sender:{
            avatar:"https://www.w3schools.com/howto/img_avatar.png",
            name:"Pappu Passport",
        },
        _id:"2",
    }
]

export const sampleMessage = [
    {
        content: "Hello How are you?",
        _id:"bfsnonbibnbosm",
        sender:{
            _id:"user._id",
            name:"Parag"
        },
        chat:"chatId",
        createdAt:"2024-02-12T10:41:30.630Z",
    },
    {
        attachments:[
            {
                public_id:"sdoigj 2",
                url:"https://www.w3schools.com/howto/img_avatar.png",
            },
        ],
        
        _id:"bfsnobnbosm",
        sender:{
            _id:"dnkpnpm",
            name:"Parag3"
        },
        chat:"chatId",
        createdAt:"2024-02-12T10:41:30.630Z",
    },
]

export const dashboardData = {
    users:[
        {            
            avatar:["https://www.w3schools.com/howto/img_avatar.png"],
            _id:"1",
            name:"John Doe",
            username:"john_doe",
            friends:20,
            groups:5
            
        },
        {            
            avatar:["https://www.w3schools.com/howto/img_avatar.png"],
            name:"Pappu Passport",
            _id:"2",
            username:"pappu_123",
            friends:50,
            groups:7
        },
    ],

    chats:[
        {
            name:"Adda Group",
            avatar:["https://www.w3schools.com/howto/img_avatar.png"],
            _id:"1",
            groupChat:false,
            members:[
                {_id:"1",avatar:"https://www.w3schools.com/howto/img_avatar.png"},
                {_id:"2",avatar:"https://www.w3schools.com/howto/img_avatar.png"}
            ],
            totalMembers:2,
            totalMessages:30,
            creator:{
                name:"Parag Bhaskar Bariye",
                avatar:["https://www.w3schools.com/howto/img_avatar.png"],
            },
        },
        {
            name:"FaceBook Group",
            avatar:["https://www.w3schools.com/howto/img_avatar.png"],
            _id:"2",
            groupChat:true,
            members:[
                {_id:"1",avatar:"https://www.w3schools.com/howto/img_avatar.png"},
                {_id:"2",avatar:"https://www.w3schools.com/howto/img_avatar.png"},
                {_id:"2",avatar:"https://www.w3schools.com/howto/img_avatar.png"}
            ],
            totalMembers:3,
            totalMessages:50,
            creator:{
                name:"Suyog Bhaskar Bariye",
                avatar:["https://www.w3schools.com/howto/img_avatar.png"],
            }
        }
    ],

    messages:[
        {
            attachments:[
                {
                    public_id:"bhaskar_13",
                    url:"https://www.w3schools.com/howto/img_avatar.png"
                },
            ],
            content:"Hello Baby",
            _id:"1",
            sender:{
                avatar:"https://www.w3schools.com/howto/img_avatar.png",
                name:"Ashu",
            },
            chat:"chatId",groupChat:true,
            createdAt:"2024-03-26T10:41:30.630Z",
        },
        {
            attachments:[

            ],
            content:"Hello Baby",
            _id:"2",
            sender:{
                avatar:"https://www.w3schools.com/howto/img_avatar.png",
                name:"Ashu 2",
            },
            chat:"chatId",groupChat:true,
            createdAt:"2024-03-26T10:41:30.630Z",
        },
    ]
}
