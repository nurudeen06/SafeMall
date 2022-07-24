const express = require('express')
const safemall = express()
const path = require('path')

safemall.set('view engine','ejs')
 safemall.use(express.static(path.join(__dirname+'/assets')))
 safemall.get('/',(req,res)=>{
 	res.render('index')
 })
 safemall.get('/home',(req,res)=>{
    res.render('home')
 })
 safemall.get('/about-us',(req,res)=>{
    res.render('about-us')
 })
 safemall.get('/services',(req,res)=>{
    res.render('services')
 })
 safemall.get('/buy-now',(req,res)=>{
   res.render('buy-now')
 })
 safemall.get('/dashboard',(req,res)=>{
    res.render('user/dashboard')
 })
 safemall.get('/admin/dashboard',(req,res)=>{
    res.render('admin/dashboard')
 })
safemall.listen(2003,()=>console.log("Safe Mall Server up and Running"))