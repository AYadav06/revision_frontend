import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { userSchema } from "../types/user";

{ /*  This is without using zod validation 

import {useForm} from "react-hook-form";
export default function Signup(){

const {register,handleSubmit,formState:{errors},reset}=useForm({
    defaultValues:{
        name:"",
        email:"",
        password:"",
        confirmPassword:""
    }
});
const onSubmit =(data) => {
    console.log(data);
    reset();
}
   return <>
    <form onSubmit={handleSubmit(onSubmit)}>
        <label>name</label>
     <input  { ...register("name",{
        required:{
            value:true,
            message:"name is required"
        },
     })}/>
     {errors.name?.type === "required" &&( <p role="alert">First name is required </p>)}  
     <p> </p>
     <label>Email</label>
     <input  {...register("email",{required:{
        value:true,
        message:"email is required"
     }})}/>
     {errors.email?.type === ""}
     <label>Password</label>
     <input {...register("password",{
        required:{
            value:true,
            message:"password is required"
        },minLength:{
            value:3,
            message:"password must be of 3-8 character"
        }
     }
     )}/>
     <label>ConfirmPassword</label>
     <input {...register("confirmPassword")}/>
     <button type="submit">submit</button>
     </form>
    </>

}
    */}
   
    export default function  Signup(){
     
        const {register,handleSubmit,formState:{errors},reset}=useForm({
            resolver: zodResolver(userSchema),
            defaultValues:{
                name:"",
                email:"",
                password:"",
                confirmPassword:""
            }
        })

        const onSubmit=(data)=>{
         console.log(data);

         reset();
        }

        return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
        <label>name</label>
        <input  {...register("name")}/>
        {errors.name && <p style={{color:"red"}}>{errors.name.message}
        </p>}
            </div>
            <div>
         <label>email</label>
        <input  {...register("email")}/>
        {errors.email && <p style={{color:"red"}}> {errors.email.message}</p>}
            </div>
            <div>

         <label>password</label>
        <input  type="password" {...register("password")}/>
        {errors.password && <p style={{color:"red"}}> {errors.password.message}</p>}
            </div>
            <div>
         <label>confirmPassword</label>
        <input  {...register("confirmPassword")}/>
        {errors.confirmPassword && <p style={{color:"red"}}> {errors.confirmPassword.message}</p>}
            </div>
        <button type="submit">submit</button>
        </form>
        </>
    }