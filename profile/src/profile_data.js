const data = {
    name:'sheik faridh n',
    position: 'software engineer',
    about:'A Javascript enthusiast looking forward to learn advanced technologies',
    contact:{
        address:'5-2-32, Kaka Illam, Natarajan Street, P.T.R Colony, Uthamapalayam, Theni-625533',
        mobile:'8825976090',
        email:'faridh.nousadh@gmail.com',
        github:'https://github.com/Sheik-Faridh/Freshworks',
        linkedIn:'https://www.linkedin.com/in/sheik-faridh-5694a7137'
    },
    skills:{
        javascript: 4,
        'html/css':4,
        analytical:3,
        'problem solving':4,
        debugging:4
    },
    certifications:[
        {
            name:'Freshworks Marketplace App Developer',
            issued_date: '2019-07'
        }
    ],
    technology:['Node.JS', 'React JS', 'Express JS', 'Core Java', 'C#'],
    experiences:[
        {
            company:'Techaffinity',
            start_date:'2018/12/03',
            end_date:'2020/08/27',
            current_working:false,
            position:'Junior Software Engineer',
            role:['Freshworks Marketplace App developer','Contributing solutions to the Freshworks customers','Produced clean code for diverse applications','Developed a library file for Freshworks SDK to reduce the effort of developer']
        },
        {
            company:'SPS',
            start_date:'2020/09/02',
            end_date:null,
            current_working:true,
            position:'G1: Programmer',
            role:['Building applications with complex UI using React JS']
        }
    ],
    projects:[
        {
            name:'WhatsApp Integration',
            description:'Integrate your business number with your Freshdesk account and support customers over WhatsApp.',
            url:'https://www.freshworks.com/apps/freshdesk/whatsapp_early_access'
        },
        {
            name:'Intune Integration',
            description:'Sync your mobile and computer devices that are managed in Intune to Freshservice asset management.',
            url:'https://www.freshworks.com/apps/freshservice/intune'
        },
        {
            name:'VSTS',
            description:'VSTS app helps you to create workitem from Freshservice ticket into VSTS for easier tracking.',
            url:'https://www.freshworks.com/apps/freshservice/vsts'
        },
        {
            name:'Dynamics CRM',
            description:'Dynamics CRM gets you the key details about your customers inside your helpdesk.',
            url:'https://www.freshworks.com/apps/freshdesk/dynamics_crm'
        },
        {
            name:'Asana Integration',
            description:'Asana helps you create a task from a Freshdesk ticket into Asana for easier tracking and follow-up.',
            url:'https://www.freshworks.com/apps/freshdesk/asana'
        },
        {
            name:'Hostar QC',
            description:'QC is the quality control app that was custom-built for Freshworks customer - Hotstar. It helps us to verify the responses sent by an agent and assigning them to appropriate reviewers. Once approved, the reply is sent to the customer',
            url:null
        }
    ],
    achievements:[
        'Best Project Model of Civil Engineering in 2017 by TamilNadu State Council for Science and Technology',
        'District Rank Holder(BCM) in HSC 2013-2014 by District Collector',
        'Community Champions as Top Contibutor in Freshworks Developer Community by Freshworks',
        'Mahatma Gandhi ScholarShip for Top 20 of the department'
    ],
    education:[
        {
            degree:'BE',
            department:'Civil Engineering',
            year:'2014 - 2018',
            college:'Kumaraguru College of Technology'
        }
    ]
}

export default data;
