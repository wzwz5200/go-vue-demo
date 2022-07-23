//About.vue
<template>
 


    



      
<div id="apps">
  <el-input v-model="user" placeholder="user" />
  <el-input v-model="password" placeholder="passworld" />

  <el-button @click="getdate">登录</el-button>
</div>

<!-- <div id="login">

</div> -->





</template>
<script>
import API from '@/axios';
// import Cookies from 'js-cookie'

// import userService from "@/userService"
//this.user
// import axios from '/Users/E1qas/my_axios/my-project/src/axios';
 import storageService from '@/storageservice'
import storageservice from '@/storageservice';
export default{
    components: {

 
  },
   data() {
        return {
          
                user:"",
                password:"",
         
        }
    },
    name:'_t',


    methods:{
 
 getdate()
 {

        
            API({
                url:  'https://dd.88866677.xyz/api/login',
                method:'post',
                data: {
               Name: this.user,
         
              
             Password : this.password
           },
         
       
             headers: {
    'Content-Type': 'multipart/form-data',
    Authorization: `Bearer ${storageService.get(storageService.USER_TOKEN)}`
    

  }


           
          
                 
            
             
            }).then(res=>{                    //请求成功后执行函数
        //  Cookies.set('token', res.data.date.token);
         storageservice.set(storageservice.USER_TOKEN, res.data.date.token)

    

           this.$router.replace({ name: 'home' });
          //利用localstorage存储到本地

      }).catch((err) => {
   

      alert(err)
      });
      


            // userService.login(this.user)

 }
    
    },





        //测试请求方法
    
   

}
</script>
<style>

#apps {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

    width: 350px;
    height: 240px;

    border-radius:5px;
    position: absolute;
    left: 50%;
    top: 48%;
    transform: translate(-50%,-50%);
}
/* #login{
 background: "./assets/logo.png";
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
    position: fixed;
      top: -8%;  
} */






</style>

