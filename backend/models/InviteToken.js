import mongoose from "mongoose";





const InviteTokenSchema = new mongoose.Schema({
   email:{type:String,required:true,unique:true,trim:true,lowercase:true},
   token:{token:String,required:true,unique:true},
   invitedBy:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},

   createdAt:{type:Date,default:Date.now},
   expiresAt:{type:Date,default:Date.now},
},
{
    timestamps:true,
}
)


const InviteToken = mongoose.model("InviteToken",InviteTokenSchema);

export default InviteToken;
