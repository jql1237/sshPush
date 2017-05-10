<template>
    <div >
        <div>  what fuck </div>
    <p>   <img :src="imgLink" alt=""></p>
 
           <h3>{{detailList.title}}</h3> 
           <span>{{detailList.year}}</span>
    </div>
</template>
<script>
    import {myJsonp} from '../store/api'
      export default{
                data(){
                    return {
                    detailList:{
                        
                      },
                       imgLink:''
                    }
                },
       mounted (){
                //  console.log(this.$route.params)
                //  this.resultList.subjects=[]
         
                this.getData()

       },
        methods:{
                   getData(){
                             
                              myJsonp('http://api.douban.com/v2/movie/subject/'+this.$route.params.id,{}, (res)=> {
                                  console.log(res)
                              this.detailList=res
                               this.imgLink=this.detailList.images.large;
                                console.log(this.detailList)
                             
             })
                              },
          
         

            }

        }
</script>