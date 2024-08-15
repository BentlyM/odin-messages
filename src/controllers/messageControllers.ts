

export const homePage = (res : Request , req : any) => {
    req.status(200).render('new', {message: 'hello world'});
}