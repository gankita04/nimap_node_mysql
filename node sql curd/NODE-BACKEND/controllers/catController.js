
var connection = require('../database/db')

const showCategory = (req, res) => {
    connection.query('SELECT * FROM categories' , (err,rows)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(rows);
        }
    })
}

const insertCategory =  (req, res) => {
    var cat = req.body
    var catData = cat.name
    connection.query('INSERT INTO categories(name) values(?)',[catData] , (err,rows)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(rows);
        }
    })
 
}

const selectCategoryById = (req, res) => {


    connection.query('SELECT * FROM categories WHERE id=?' ,[req.params.id] , (err,rows)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(rows);
        }
    })  
}

const updateCategory =  (req, res) => {
    
  
    const id= req.params.id;
    let cat = req.body;

    var query = "UPDATE categories SET name=? WHERE id =?";
    connection.query(query,[cat.name , id],(err,results)=>{
        if(!err){
            if(results.affectedRows == 0){
                return res.status(404).json({msg:"cat id does not exit"});
            }
            return res.status(200).json({msg:"cat updated"});

        }
        else{
            return res.status(500).json(err);
        }
    })

   
}

const deleteCategory = (req, res) => {
    
    connection.query('DELETE FROM categories WHERE id=?' ,[req.params.id] , (err,rows)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(rows);
        }
    })
  
}
module.exports = {
    showCategory,
    insertCategory,
    updateCategory,
    selectCategoryById,
    deleteCategory
}