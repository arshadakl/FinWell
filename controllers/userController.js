

const LoginPageLoad = async(req,res)=>{
    res.render('login')
}

const doLogin = async(req,res)=>{
    console.log(req.body);
}


module.exports={
    LoginPageLoad,
    doLogin
}