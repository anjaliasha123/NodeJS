const path = require('path');

generateReport = (req, res)=>{
    console.log(req.body)
    res.render(path.join(__dirname,'../','views','result.ejs'))
    console.log('Post request send from home page')
}
getHome = (req, res, next)=>{
    res.status(200).render(path.join(__dirname,'../','views','home.ejs'));
}

getResultPage = (req, res, next)=>{
    console.log('Redirecting to home without location info entered')
    res.redirect('/weather/home');
}

module.exports = {generateReport, getHome, getResultPage};