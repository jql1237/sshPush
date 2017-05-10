<template  lang="html">
      <div>

        <ul>
           <li v-for="item in resultList.subjects ">
              <router-link :to="{name:'Detail',params:{id:item.id}}">

                   <img :src="item.images.medium" alt="">
                   <p>{{item.title}}</p>
              </router-link>

           </li>
        </ul>


      </div>




</template>

<script>
  import {myJsonp} from '../store/api'

  export default{
                data(){
                    return {
                      resultList:{
                        subjects:[]
                      }
                    }
                },
       mounted (){
                //  console.log(this.$route.params)
                //  this.resultList.subjects=[]
                this.reload()

       },
        methods:{
                    reload(){

                              myJsonp('http://api.douban.com/v2/movie/top250',{}, (res)=> {

                               this.resultList.subjects=this.resultList.subjects.concat(res.subjects)
                               console.log(this.resultList.subjects)
             })
                              },



            }

        }

</script>

