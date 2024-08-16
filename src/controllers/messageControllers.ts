
const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];
  


export const homePage = (res : Response , req : any) => {
    req.status(200).render('index', {messages});
}

export const newMessage = (res : Response, req : any) => {
  //req.status(200).render('new', )
}