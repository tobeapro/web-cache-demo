import Koa from 'koa'
import koaBody from 'koa-body'
import koaRouter from 'koa-router'
import fs from 'fs'
import path from 'path'
const app = new Koa()
const router = new koaRouter()
app.use(koaBody())
const port = 3000
router.get('/', ctx => {
    ctx.body = ('You are accessing the backend service')
})
router.get('/img/1.jpg', ctx => {
    const file = fs.readFileSync(path.resolve(__dirname,`.${ctx.request.path}`))
    ctx.set({
        'Expires': new Date((+new Date() + 1000*60*60*24*3))
    })
    ctx.body = file
})

router.get('/img/2.jpg', ctx => {
    const file = fs.readFileSync(path.resolve(__dirname,`.${ctx.request.path}`))
    ctx.set({
        'Expires': new Date((+new Date() + 1000*60*60*24*3)),
        'Cache-control': 'max-age=0',
    })
    ctx.body = file
})

router.get('/img/3.jpg', ctx => {
    const file = fs.readFileSync(path.resolve(__dirname,`.${ctx.request.path}`))
    ctx.set({
        'Cache-control': 'max-age=10'
    })
    ctx.body = file
})

router.get('/img/4.jpg', ctx => {
    const file = fs.readFileSync(path.resolve(__dirname,`.${ctx.request.path}`))
    ctx.set({
        'Cache-control': 's-maxage=10'
    })
    ctx.body = file
})

router.get('/img/5.jpg', ctx => {
    const file = fs.readFileSync(path.resolve(__dirname,`.${ctx.request.path}`))
    ctx.set({
        'Cache-control': 'private'
    })
    ctx.body = file
})

router.get('/img/6.jpg', ctx => {
    const file = fs.readFileSync(path.resolve(__dirname,`.${ctx.request.path}`))
    ctx.set({
        'Expires': new Date((+new Date() + 1000*60*60*24*3)),
        'Cache-control': 'private'
    })
    ctx.body = file
})

router.get('/img/7.jpg', ctx => {
    const file = fs.readFileSync(path.resolve(__dirname,`.${ctx.request.path}`))
    ctx.set({
        'Cache-control': 'no-store'
    })
    ctx.body = file
})

router.get('/img/8.jpg', ctx => {
    const file = fs.readFileSync(path.resolve(__dirname,`.${ctx.request.path}`))
    const stats = fs.statSync(path.resolve(__dirname,`.${ctx.request.path}`))
    if(ctx.request.header['if-modified-since'] === stats.mtime.toUTCString()){
        return ctx.status = 304
    }
    ctx.set({
        'Cache-control': 'no-cache',
        'Last-Modified': stats.mtime.toUTCString()
    })
    ctx.body = file
})

router.get('/img/9.jpg', ctx => {
    const file = fs.readFileSync(path.resolve(__dirname,`.${ctx.request.path}`))
    const stats = fs.statSync(path.resolve(__dirname,`.${ctx.request.path}`))
    if(ctx.request.header['if-none-match']){
        if(ctx.request.header['if-none-match'] === 'abc123'){
            return ctx.status = 304
        }
    }else if(ctx.request.header['if-modified-since'] === stats.mtime.toUTCString()){
        return ctx.status = 304
    }
    ctx.set({
        'Cache-control': 'no-cache',
        'Last-Modified': stats.mtime.toUTCString(),
        'ETag': 'abc123'
    })
    ctx.body = file
})

app.use(router.routes())

app.listen(port, ()=>{
    console.log(`server listen on port:${port}`)
})