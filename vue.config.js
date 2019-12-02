const bodyParser =require('body-parser');
const {bookNavData,bookMallData,bookMallDetailData} =require('./data')

module.exports={
    devServer:{
        before(app){
            app.use(bodyParser.json());
            app.get('/api/navlist',(req,res)=>{
                res.send({
                    code:200,
                    data:bookNavData,
                    msg:'导航数据'
                })
            });
            app.get('/api/list',(req,res)=>{
                // console.log(req.query);
                let {id}=req.query;
                let findData=bookMallData.find(i=>i.id==id).list;
                res.send({
                    code:200,
                    findData,
                    msg:'导航content'
                })
            });
            app.get('/api/detail',(req,res)=>{
                // console.log(req.query);
                let {id}=req.query;
                let detailData
                bookMallDetailData.forEach(item => {
                item.list.forEach(book => {
                    if (book.id == id) {
                        detailData = book
                    }
                })
                })
                res.send({
                    code:200,
                    detailData,
                    msg:'详情'
                })
            })
        }
    }
}