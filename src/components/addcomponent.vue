<template>
    <div>
    <button class="btn btn-success w-100 my-2" data-bs-toggle="modal" data-bs-target="#addmodal">Add</button>
    <div class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" id="addmodal">
        <div class="modal-dialog modal-dialog-center">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="w-100-text-center">Add new student</h5>
                </div>
                <div class="modal-body">
                    <input type="text" class="form-control my-2"  placeholder="Name" v-model="stdname">
                    <input type="text" class="form-control my-2"  placeholder="City" v-model="stdcity">
                </div>
                <div class="modal-footer">
                    <button class="btn btn-success" data-bs-dismiss="modal" @click="rasieevent">Add</button>
                    <button class="btn btn-danger" data-bs-dismiss="modal">close</button>
                </div>
            </div>
        </div>
    </div> 
</div>
</template>

<script>
export default {
    data:()=>({
        stdname:'',
        stdcity:'',
    }),
    methods:{
        rasieevent(){
            let createdstudent={name:this.stdname,city:this.stdcity};
            this.$emit("onstudentadded",createdstudent);
        }
    }
}
</script>

<style>

</style>