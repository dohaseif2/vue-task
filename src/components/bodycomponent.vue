<template>
  <div>
 <addcomponent @onstudentadded="addnewstudent" />
  <table class="table table-striped">
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>City</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="std in students" :key="std.id">
            <td>{{std.id}}</td>
            <td><router-link :to="'/studentdetails/'+std.id">{{std.name}}</router-link></td>
            <td>{{std.city}}</td>
            <td>
              <button class="btn btn-warning mx-1" @click="fillupdateddata(std)" data-bs-toggle="modal" data-bs-target="#updatemodal" >Update</button>
              <button class="btn btn-danger mx-1" @click="deletestudent(std.id)" >Delete</button>
            </td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td colspan="4">
                <h4>Total number of students = {{students.length}}</h4>
            </td>
        </tr>
    </tfoot>
  </table>
  <div class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" id="updatemodal">
    <div class="modal-dialog modal-dialog-center">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="w-100-text-center">update student</h5>
            </div>
            <div class="modal-body">
              <input type="text" class="form-control my-2"  placeholder="ID" v-model="stdid" disabled >

                <input type="text" class="form-control my-2"  placeholder="Name" v-model="stdname">
                <input type="text" class="form-control my-2"  placeholder="City" v-model="stdcity">
                
            </div>
            <div class="modal-footer">
                <button class="btn btn-success" data-bs-dismiss="modal" @click="confirmeUpdate">Update</button>
                <button class="btn btn-danger" data-bs-dismiss="modal">close</button>
            </div>
        </div>
    </div>
    </div>
</div>
</template>

<script>

import addcomponent from './addcomponent.vue'
export default {
    data:()=>({
      students:[],
      stdid:0,
      stdname:"",
      stdcity:""
        
    }),
   async created(){
          let allstd= await fetch("http://localhost:5003/students")
          this.students= await allstd.json();
    },
    methods:{
      async addnewstudent(newstudent){
        let newobj={id:parseInt(this.students[this.students.length-1].id)+100,name:newstudent.name,city:newstudent.city}
        let allstd= await fetch("http://localhost:5003/students",{
          method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify(newobj)
        })

        this.students.push(newobj);
      },
      fillupdateddata(std){
        this.stdid=std.id;
        this.stdname=std.name;
        this.stdcity=std.city;
        
      },
      async confirmeUpdate(){
        let updatedobj={id:this.stdid,name:this.stdname,city:this.stdcity};
        await fetch(`http://localhost:5003/students/${this.stdid}`,{
          method:"PUT",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify(updatedobj)
        });
        this.students.find(std=>std.id==this.stdid).name=this.stdname;
        this.students.find(std=>std.id==this.stdid).city=this.stdcity;

    },
    async deletestudent(_id){
      await fetch(`http://localhost:5003/students/${_id}`,{
          method:"DELETE"
        });
        this.students= this.students.filter(std=>std.id!=_id);
    },

   
},
components:{
      addcomponent
    }
}

</script>

<style>

</style>