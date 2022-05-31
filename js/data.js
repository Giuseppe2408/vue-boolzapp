const myContacts = new Vue({
    el : '#app',

    data : {
        activeContacts : 0,
        newMsg : '',
        contacts : [
            {
                name: 'Luffy',
                avatar: '_1',
                src: 'img/luffy.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Luffy',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Sei diventato il re dei pirati?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'No mancano altri mille episodi',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Zoro',
                avatar: '_2',
                src: 'img/Roronoa_Zoro.png',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ti sei perso?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Si',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Ti veniamo a prendere io e Luffy',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Sanji',
                avatar: '_3',
                src: 'img/sanji.jpg',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'Andiamo da Nami',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Non posso ora!',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Nami-chaaaaaaan',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Chopper',
                src: 'img/chopper.jpg',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Nami',
                src: 'img/nami.jpg',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ti cercava Sanji',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'E che voleva?',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Arpo',
                src: 'img/arpo_.jpg',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Arpo, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Gigachad',
                src: 'img/gigachad-1200x1200.jpg',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                src: 'img/davide.jpg',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ],
    },
    
    methods : {
        switchContacts(activeContacts) {
            this.activesContacts++;
            this.activeContacts = activeContacts;
            console.log(activeContacts);
        },

        

        newMessage(){
            const newMsg = {
                date : '15:00',
                message : this.newMsg,
                status : 'sent',
            }
            let thisContact = this.contacts[this.activeContacts];
            if (this.newMsg !== "") {                
                thisContact.messages.push(newMsg);
                this.newMsg = "";
            }       
            
            setTimeout(() => {
                const okMsg = {
                    date : '15:01',
                    message : 'ok',
                    status : 'received',
                }
                thisContact.messages.push(okMsg)
            }, 1000)
        },

        searchContact(){
            
        }

        
    }
}); 
 

 
 

