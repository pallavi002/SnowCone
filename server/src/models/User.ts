import mongoose, { Document } from 'mongoose';
import bcrypt from 'bcrypt';

interface IUserModel extends Document {
    username: string;
    email: string;
    password: string;
    role: string;
    
    comparePassword(candidatePassword: string, callback: (err: any, isMatch: boolean) => void): void;
}

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        match: /.+\@.+\..+/,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["adming", "user"],
        default: "user"
    }
});

UserSchema.pre("save", function(next) {
    const user = this;
    if(!user.isModified("password")) return next();
    if(user.isModified("password")) {
        bcrypt.genSalt(10, function(err: Error, salt : string) {
            if(err) return next(err);
        
            //hash password
            bcrypt.hash(user.password, salt, function(err: Error, hash: string) {
                if(err) return next(err);
                user.password = hash;
                next();
            })
        })
    }
})

UserSchema.methods.comparePassword = function (
    candidatePassword: string,
    cb: (arg: any, isMatch?: boolean) => void
    ) {
    bcrypt.compare(candidatePassword, this.password, function (err: Error, isMatch: boolean) { 
        if (err) return cb(err);
        cb(null, isMatch);
    }); 
};

const User = mongoose.model<IUserModel>('User', UserSchema);
export default User;
